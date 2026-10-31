import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RotateCw, ZoomIn, ZoomOut, MessageCircle, RefreshCw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stoneData';

interface StoneTextureConfig {
  id: string;
  name: string;
  category: string;
  origin: string;
  generateTexture: () => THREE.CanvasTexture;
  baseColor: string;
}

export const StoneViewer3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const slabMeshRef = useRef<THREE.Mesh | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef(true);
  const targetRotation = useRef({ x: 0.15, y: -0.35 });
  const currentRotation = useRef({ x: 0.15, y: -0.35 });

  const [selectedStoneId, setSelectedStoneId] = useState<string>('calacatta-gold');
  const [selectedFinish, setSelectedFinish] = useState<'polished' | 'honed' | 'leathered'>('polished');
  const [selectedThickness, setSelectedThickness] = useState<'20mm' | '30mm'>('30mm');
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Procedural stone texture generator for realistic natural marble & granite
  const generateStoneTexture = useCallback((type: string): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    if (type === 'calacatta-gold') {
      ctx.fillStyle = '#fbf9f4';
      ctx.fillRect(0, 0, 1024, 1024);

      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = 'rgba(235, 228, 218, 0.25)';
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 1024, 80 + Math.random() * 180, 0, Math.PI * 2);
        ctx.fill();
      }

      const drawVein = (color: string, width: number, startX: number, startY: number) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        let x = startX;
        let y = startY;
        ctx.moveTo(x, y);

        for (let j = 0; j < 18; j++) {
          x += (Math.random() - 0.2) * 90;
          y += 50 + Math.random() * 40;
          ctx.lineTo(x, y);

          if (Math.random() > 0.6) {
            ctx.save();
            ctx.lineWidth = width * 0.4;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + (Math.random() - 0.5) * 80, y + Math.random() * 60);
            ctx.stroke();
            ctx.restore();
          }
        }
        ctx.stroke();
      };

      drawVein('rgba(168, 140, 95, 0.65)', 18, 300, 0);
      drawVein('rgba(115, 110, 102, 0.45)', 14, 280, 0);
      drawVein('rgba(189, 160, 115, 0.5)', 12, 700, 0);
      drawVein('rgba(130, 125, 118, 0.35)', 8, 120, 0);
    } else if (type === 'nero-marquina') {
      ctx.fillStyle = '#111112';
      ctx.fillRect(0, 0, 1024, 1024);

      for (let i = 0; i < 40; i++) {
        ctx.fillStyle = 'rgba(35, 35, 38, 0.3)';
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 1024, 40 + Math.random() * 90, 0, Math.PI * 2);
        ctx.fill();
      }

      const drawFracture = (startX: number, startY: number) => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 3 + Math.random() * 4;
        ctx.beginPath();
        let x = startX;
        let y = startY;
        ctx.moveTo(x, y);

        for (let j = 0; j < 25; j++) {
          x += (Math.random() - 0.3) * 70;
          y += 35 + Math.random() * 30;
          ctx.lineTo(x, y);

          if (Math.random() > 0.5) {
            ctx.save();
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + (Math.random() - 0.5) * 60, y + (Math.random() - 0.3) * 40);
            ctx.stroke();
            ctx.restore();
          }
        }
        ctx.stroke();
      };

      drawFracture(450, 0);
      drawFracture(750, 50);
      drawFracture(180, 0);
    } else if (type === 'black-galaxy') {
      ctx.fillStyle = '#0a0a0c';
      ctx.fillRect(0, 0, 1024, 1024);

      for (let i = 0; i < 2400; i++) {
        const isGold = Math.random() > 0.35;
        ctx.fillStyle = isGold
          ? `rgba(${220 + Math.random() * 35}, ${170 + Math.random() * 40}, ${90 + Math.random() * 30}, ${0.5 + Math.random() * 0.5})`
          : `rgba(${180 + Math.random() * 50}, ${180 + Math.random() * 50}, ${180 + Math.random() * 50}, ${0.3 + Math.random() * 0.4})`;

        const radius = Math.random() > 0.95 ? 3 + Math.random() * 3 : 0.8 + Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 1024, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (type === 'bianco-carrara') {
      ctx.fillStyle = '#f4f4f4';
      ctx.fillRect(0, 0, 1024, 1024);

      for (let i = 0; i < 15; i++) {
        ctx.strokeStyle = 'rgba(150, 155, 160, 0.22)';
        ctx.lineWidth = 20 + Math.random() * 25;
        ctx.beginPath();
        let x = Math.random() * 1024;
        let y = 0;
        ctx.moveTo(x, y);
        while (y < 1024) {
          x += (Math.random() - 0.5) * 50;
          y += 40 + Math.random() * 40;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    } else if (type === 'emerald-quartzite') {
      ctx.fillStyle = '#102e21';
      ctx.fillRect(0, 0, 1024, 1024);

      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = 'rgba(24, 66, 48, 0.4)';
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 1024, 70 + Math.random() * 120, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < 6; i++) {
        ctx.strokeStyle = 'rgba(215, 185, 115, 0.55)';
        ctx.lineWidth = 8 + Math.random() * 12;
        ctx.beginPath();
        let x = Math.random() * 1024;
        let y = 0;
        ctx.moveTo(x, y);
        while (y < 1024) {
          x += (Math.random() - 0.4) * 60;
          y += 50;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);

  const stones: StoneTextureConfig[] = [
    {
      id: 'calacatta-gold',
      name: 'Calacatta Gold Italian Marble',
      category: 'Marble',
      origin: 'Carrara, Italy',
      baseColor: '#fbf9f4',
      generateTexture: () => generateStoneTexture('calacatta-gold')
    },
    {
      id: 'nero-marquina',
      name: 'Nero Marquina Spanish Marble',
      category: 'Marble',
      origin: 'Markina, Spain',
      baseColor: '#111112',
      generateTexture: () => generateStoneTexture('nero-marquina')
    },
    {
      id: 'black-galaxy',
      name: 'Black Galaxy Premium Granite',
      category: 'Granite',
      origin: 'India',
      baseColor: '#0a0a0c',
      generateTexture: () => generateStoneTexture('black-galaxy')
    },
    {
      id: 'bianco-carrara',
      name: 'Bianco Carrara Classic',
      category: 'Marble',
      origin: 'Tuscany, Italy',
      baseColor: '#f4f4f4',
      generateTexture: () => generateStoneTexture('bianco-carrara')
    },
    {
      id: 'emerald-quartzite',
      name: 'Emerald Green Quartzite',
      category: 'Quartzite',
      origin: 'Brazil',
      baseColor: '#102e21',
      generateTexture: () => generateStoneTexture('emerald-quartzite')
    }
  ];

  const currentStone = stones.find(s => s.id === selectedStoneId) || stones[0];

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 480;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF7F5F0);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.6);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.4);
    keyLight.position.set(3.5, 4.5, 4.0);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe5e3df, 0.9);
    fillLight.position.set(-3.5, -1.0, 2.5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.2);
    rimLight.position.set(0, 3.0, -3.5);
    scene.add(rimLight);

    const thicknessValue = selectedThickness === '30mm' ? 0.09 : 0.06;
    const geometry = new THREE.BoxGeometry(2.8, 1.7, thicknessValue);
    const stoneTexture = currentStone.generateTexture();

    const roughness = selectedFinish === 'polished' ? 0.08 : (selectedFinish === 'honed' ? 0.45 : 0.75);
    const metalness = selectedFinish === 'polished' ? 0.12 : 0.02;

    const material = new THREE.MeshStandardMaterial({
      map: stoneTexture,
      roughness: roughness,
      metalness: metalness
    });

    const slabMesh = new THREE.Mesh(geometry, material);
    slabMesh.castShadow = true;
    slabMesh.receiveShadow = true;
    scene.add(slabMesh);
    slabMeshRef.current = slabMesh;

    // Contact Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(3.6, 2.4);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x252525,
      transparent: true,
      opacity: 0.1
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.position.set(0, -1.2, 0);
    shadowPlane.rotation.x = -Math.PI / 2;
    scene.add(shadowPlane);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotateRef.current) {
        targetRotation.current.y += 0.005;
      }

      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.08;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.08;

      if (slabMeshRef.current) {
        slabMeshRef.current.rotation.x = currentRotation.current.x;
        slabMeshRef.current.rotation.y = currentRotation.current.y;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      stoneTexture.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
    };
  }, [currentStone, selectedFinish, selectedThickness]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    autoRotateRef.current = false;
    setIsAutoRotating(false);
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;

    targetRotation.current.y += deltaX * 0.008;
    targetRotation.current.x = Math.max(-0.6, Math.min(0.6, targetRotation.current.x + deltaY * 0.008));

    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const resetCamera = () => {
    targetRotation.current = { x: 0.15, y: -0.35 };
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 4.6);
    }
  };

  const zoomCamera = (amount: number) => {
    if (!cameraRef.current) return;
    cameraRef.current.position.z = Math.max(2.8, Math.min(6.5, cameraRef.current.position.z + amount));
  };

  const toggleAutoRotate = () => {
    const next = !isAutoRotating;
    setIsAutoRotating(next);
    autoRotateRef.current = next;
  };

  const getWhatsAppSelectionMessage = () => {
    const text = `Hello K-Tech Marbles, I inspected your 3D Interactive Slab Visualizer and I am interested in:
- Stone: ${currentStone.name} (${currentStone.origin})
- Finish: ${selectedFinish.toUpperCase()}
- Thickness: ${selectedThickness}

Could you provide current warehouse pricing and slab availability at Olaniyonu Market?`;
    return encodeURIComponent(text);
  };

  return (
    <section id="visualizer-3d" className="py-20 bg-[#F7F5F0] border-b border-[#E5E3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#9B7954] mb-2">
              <span>Interactive 3D Stone Studio</span>
              <span aria-hidden="true">·</span>
              <span>Rotate &amp; Inspect Slabs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525] tracking-tight text-balance">
              Inspect Slabs in Full 3D Space
            </h2>
            <p className="mt-2 text-[#555555] text-sm sm:text-base max-w-xl">
              Rotate, tilt, and examine light reflections across our natural marble and granite varieties before visiting our Olaniyonu stockyard.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleAutoRotate}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
                isAutoRotating
                  ? 'bg-[#9B7954] text-white border-[#9B7954]'
                  : 'bg-white text-[#252525] border-[#C8BBA8] hover:text-[#9B7954]'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isAutoRotating ? 'Auto-Rotate ON' : 'Auto-Rotate OFF'}</span>
            </button>
            <button
              type="button"
              onClick={resetCamera}
              className="px-3 py-2 bg-white hover:bg-[#E5E3DF] text-[#252525] text-xs font-semibold rounded-lg border border-[#C8BBA8] transition-colors flex items-center gap-1.5"
              title="Reset View"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* 3D Visualizer Canvas & Controls */}
        <div className="rounded-2xl overflow-hidden border border-[#C8BBA8] bg-[#F7F5F0] shadow-md relative flex flex-col">
          {/* Active Stone Badge in 3D Viewport */}
          <div className="absolute top-4 left-4 z-10 p-3 px-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#C8BBA8] shadow-xs text-xs pointer-events-none">
            <div className="font-serif font-bold text-[#252525] text-sm">
              {currentStone.name}
            </div>
            <div className="text-[#555555] mt-0.5">
              {currentStone.origin} · {selectedFinish.toUpperCase()} · {selectedThickness}
            </div>
          </div>

          {/* Canvas Zoom Controls (Floating Top Right) */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-[#C8BBA8] rounded-lg p-1 shadow-xs">
            <button
              type="button"
              onClick={() => zoomCamera(-0.5)}
              className="p-1.5 text-[#252525] hover:bg-[#E5E3DF] rounded transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => zoomCamera(0.5)}
              className="p-1.5 text-[#252525] hover:bg-[#E5E3DF] rounded transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
          </div>

          {/* WebGL Canvas Container */}
          <div
            ref={mountRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="w-full h-[400px] sm:h-[480px] cursor-grab active:cursor-grabbing touch-none relative select-none"
            aria-label="Interactive 3D natural stone slab viewport. Drag to rotate."
          />

          {/* Hint Overlay for first-time visitors */}
          <div className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 pointer-events-none text-center">
            <span className="text-[11px] font-medium text-[#555555] px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#C8BBA8] shadow-xs">
              Drag with mouse or finger to rotate 360° in 3D
            </span>
          </div>

          {/* Bottom Customization Dock */}
          <div className="p-4 sm:p-6 bg-[#E5E3DF] border-t border-[#C8BBA8] flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Stone Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start w-full lg:w-auto">
              <span className="text-xs font-bold text-[#252525] mr-1">Stone:</span>
              {stones.map((stone) => (
                <button
                  key={stone.id}
                  type="button"
                  onClick={() => setSelectedStoneId(stone.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    selectedStoneId === stone.id
                      ? 'bg-[#9B7954] text-white shadow-xs'
                      : 'bg-white text-[#252525] hover:bg-[#F7F5F0] border border-[#C8BBA8]'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0"
                    style={{ backgroundColor: stone.baseColor }}
                  />
                  <span>{stone.name.split(' ')[0]} {stone.name.split(' ')[1] || ''}</span>
                </button>
              ))}
            </div>

            {/* Finish & Thickness Controls */}
            <div className="flex flex-wrap items-center gap-4 justify-center">
              {/* Finish Selector */}
              <div className="flex items-center gap-1 p-0.5 bg-white rounded-md border border-[#C8BBA8] text-xs">
                {(['polished', 'honed', 'leathered'] as const).map((finish) => (
                  <button
                    key={finish}
                    type="button"
                    onClick={() => setSelectedFinish(finish)}
                    className={`px-2.5 py-1 rounded capitalize text-[11px] font-semibold transition-colors ${
                      selectedFinish === finish
                        ? 'bg-[#9B7954] text-white'
                        : 'text-[#252525] hover:text-[#9B7954]'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>

              {/* Thickness Selector */}
              <div className="flex items-center gap-1 p-0.5 bg-white rounded-md border border-[#C8BBA8] text-xs">
                {(['20mm', '30mm'] as const).map((thick) => (
                  <button
                    key={thick}
                    type="button"
                    onClick={() => setSelectedThickness(thick)}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                      selectedThickness === thick
                        ? 'bg-[#9B7954] text-white'
                        : 'text-[#252525] hover:text-[#9B7954]'
                    }`}
                  >
                    {thick}
                  </button>
                ))}
              </div>

              {/* Quote WhatsApp CTA */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${getWhatsAppSelectionMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-md transition-colors flex items-center gap-1.5 shadow-xs whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Quote This 3D Stone</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
