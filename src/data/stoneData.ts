export interface StoneProduct {
  id: string;
  name: string;
  category: 'Marble' | 'Granite' | 'Quartz';
  origin: string;
  description: string;
  image: string;
  bestFor: string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  description: string;
  image: string;
  idealStones: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'Staircases' | 'Flooring' | 'Bathrooms' | 'Commercial';
  location: string;
  stoneUsed: string;
  finish: string;
  edgeDetail: string;
  description: string;
  image: string;
}

export const BUSINESS_INFO = {
  name: 'K-Tech Marbles and Granites Ventures',
  tagline: 'Premium Natural Stone & Marble Slabs',
  estYear: 'EST. 2021',
  logoUrl: '/assets/aistudio/WA_1793472380290_b1d88a9b.jpeg',
  address: 'Shop 13/14, Block K, Olaniyonu Modern Marble Market, Coker Bus Stop / Orile Iganmu Axis, Lagos - Badagry Expressway, Lagos, Nigeria',
  phone: '+234 913 807 8567',
  phoneClean: '2349138078567',
  whatsappUrl: 'https://wa.me/2349138078567?text=Hello%20K-Tech%20Marbles%2C%20I%20am%20interested%20in%20your%20marble%20and%20granite%20slabs.',
  googleMapsUrl: 'https://maps.app.goo.gl/B5BhMwHinNxt1oLe8',
  // Live embeddable map for Olaniyonu Modern Marble Market, Coker, Lagos
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Olaniyonu+Modern+Marble+Market,+Coker+Bus+Stop,+Lagos,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed',
  highlights: [
    { title: 'Quarry Sourced', desc: 'Direct imported marble & granite slabs' },
    { title: 'Custom Cutting', desc: 'Precision edge fabrication & sizing' },
    { title: 'Professional Fitting', desc: 'Experienced stonemasons for seamless installation' },
    { title: 'Physical Showroom', desc: 'Visit our slab yard at Olaniyonu Market' }
  ]
};

export const PRODUCTS: StoneProduct[] = [
  {
    id: 'calacatta-gold',
    name: 'Calacatta Gold Marble',
    category: 'Marble',
    origin: 'Imported (Italy)',
    description: 'Crisp luminous white base with dramatic golden and smoky grey veins. A premier choice for luxury statement spaces.',
    image: '/src/assets/images/product_calacatta_marble_slab_1793469370577.jpg',
    bestFor: 'Kitchen islands, feature walls, luxury bathrooms'
  },
  {
    id: 'black-galaxy',
    name: 'Black Galaxy Granite',
    category: 'Granite',
    origin: 'Imported (India)',
    description: 'Deep obsidian stone shimmering with natural metallic gold specks. Highly durable and heat-resistant.',
    image: '/src/assets/images/product_black_galaxy_granite_slab_1793469370392.jpg',
    bestFor: 'Kitchen countertops, stair treads, heavy-use surfaces'
  },
  {
    id: 'bianco-carrara',
    name: 'Bianco Carrara Marble',
    category: 'Marble',
    origin: 'Imported (Italy)',
    description: 'Classic soft white stone with delicate grey feather veining, bringing timeless European elegance to interiors.',
    image: '/src/assets/images/application_grand_marble_staircase_1793469370641.jpg',
    bestFor: 'Flooring, staircases, vanity tops, tables'
  },
  {
    id: 'nero-marquina',
    name: 'Nero Marquina Marble',
    category: 'Marble',
    origin: 'Imported (Spain)',
    description: 'Striking rich black marble with organic white lightning veins, creating bold architectural contrast.',
    image: '/src/assets/images/gallery_modern_kitchen_waterfall_1793470917944.jpg',
    bestFor: 'Powder rooms, accent walls, kitchen waterfall islands'
  },
  {
    id: 'pure-quartz',
    name: 'Calacatta Quartz Slabs',
    category: 'Quartz',
    origin: 'Engineered Precision',
    description: 'Non-porous, stain-resistant surface mirroring natural marble with zero maintenance required for daily living.',
    image: '/src/assets/images/application_luxury_kitchen_countertop_1793469371581.jpg',
    bestFor: 'Family kitchens, commercial countertops, bar tops'
  }
];

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: 'kitchens',
    title: 'Kitchen Countertops & Islands',
    description: 'Custom cut waterfall islands, undermount sink cutouts, and durable heat-resistant cooking surfaces tailored to your kitchen design.',
    image: '/src/assets/images/gallery_modern_kitchen_waterfall_1793470917944.jpg',
    idealStones: 'Nero Marquina, Calacatta Marble, Black Galaxy Granite'
  },
  {
    id: 'staircases',
    title: 'Staircases & Steps',
    description: 'Solid marble and granite stair treads, risers, and curved steps crafted with bullnose or clean polished edges.',
    image: '/src/assets/images/application_grand_marble_staircase_1793469370641.jpg',
    idealStones: 'Carrara Marble, Black Galaxy Granite, Royal Tan'
  },
  {
    id: 'flooring',
    title: 'Living Room & Foyer Flooring',
    description: 'High-gloss polished marble and granite floor slabs that maximize natural light and add lasting value to your home.',
    image: '/src/assets/images/gallery_grand_living_flooring_1793470919520.jpg',
    idealStones: 'Crema Marfil, Spanish Brown, Calacatta Gold'
  },
  {
    id: 'bathrooms',
    title: 'Bathrooms & Vanity Tops',
    description: 'Water-resistant, elegant stone vanities, book-matched wall slabs, and walk-in shower surrounds.',
    image: '/src/assets/images/gallery_luxury_master_bathroom_1793470917184.jpg',
    idealStones: 'Italian Calacatta Gold, Bianco Carrara, Travertine'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Monolithic Nero Marquina Waterfall Island',
    category: 'Kitchens',
    location: 'Banana Island, Ikoyi, Lagos',
    stoneUsed: 'Nero Marquina Spanish Marble',
    finish: 'Mirror Polished High Gloss',
    edgeDetail: '45° Continuous-Grain Mitered Waterfall',
    description: 'A 4.2-meter statement kitchen island with bookmatched waterfall drops on both sides, undermount composite sink cutout, and recessed under-counter ambient lighting.',
    image: '/src/assets/images/gallery_modern_kitchen_waterfall_1793470917944.jpg'
  },
  {
    id: 'g2',
    title: 'Book-Matched Calacatta Gold Master Ensuite',
    category: 'Bathrooms',
    location: 'Lekki Phase 1, Lagos',
    stoneUsed: 'Calacatta Gold Italian Marble',
    finish: 'Silky Honed Anti-Watermark',
    edgeDetail: 'Seamless Floating Mitered Vanity Deck',
    description: 'Floor-to-ceiling bookmatched marble wall cladding paired with a custom-fabricated floating dual-basin marble vanity deck and freestanding tub podium.',
    image: '/src/assets/images/gallery_luxury_master_bathroom_1793470917184.jpg'
  },
  {
    id: 'g3',
    title: 'Double-Height Penthouse Crema Marfil Flooring',
    category: 'Flooring',
    location: 'Victoria Island, Lagos',
    stoneUsed: 'Crema Marfil & Dark Emperador Marble',
    finish: 'Diamond Polished Monolithic Reflection',
    edgeDetail: 'Zero-Lippage Calibrated Straight Joint',
    description: 'Expansive open-plan living room flooring fitted with large-format calibrated slabs, machine-leveled to achieve a mirror finish that reflects natural garden light.',
    image: '/src/assets/images/gallery_grand_living_flooring_1793470919520.jpg'
  },
  {
    id: 'g4',
    title: 'Executive Emerald Quartzite Reception Desk',
    category: 'Commercial',
    location: 'Eko Atlantic City, Lagos',
    stoneUsed: 'Emerald Green Quartzite & Black Granite',
    finish: 'Polished Crystalline Surface',
    edgeDetail: 'Angular Faceted Geometric Miter Joints',
    description: 'A custom-built corporate reception showpiece featuring deep emerald green crystalline quartzite with natural golden quartz ribbons and warm cove illumination.',
    image: '/src/assets/images/gallery_luxury_reception_quartzite_1793470918952.jpg'
  },
  {
    id: 'g5',
    title: 'Cantilevered Bianco Carrara Grand Staircase',
    category: 'Staircases',
    location: 'Ikeja GRA, Lagos',
    stoneUsed: 'Bianco Carrara Italian Marble',
    finish: 'Honed Matte with Anti-Slip Grooves',
    edgeDetail: 'Full Bullnose Curved Steps with Glass Mounts',
    description: '32 floating solid marble steps engineered with internal steel anchors, full bullnose nosing, and seamless structural glass and bronze railings.',
    image: '/src/assets/images/application_grand_marble_staircase_1793469370641.jpg'
  },
  {
    id: 'g6',
    title: 'Calacatta Waterfall Chef Countertop & Backsplash',
    category: 'Kitchens',
    location: 'Maitama District, Abuja',
    stoneUsed: 'Calacatta Gold 30mm Natural Slab',
    finish: 'Polished Heat-Resistant Seal',
    edgeDetail: '40mm Double Laminated Eased Edge',
    description: 'Contemporary culinary kitchen with seamless full-height slab backsplash and perimeter countertops custom-milled to accommodate flush brass gas cooktops.',
    image: '/src/assets/images/application_luxury_kitchen_countertop_1793469371581.jpg'
  }
];
