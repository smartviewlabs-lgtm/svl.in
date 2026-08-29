import { ServiceItem, PortfolioItem, CourseItem, ReviewItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '360-virtual-tours',
    title: '360° Virtual Tours & VR',
    category: 'Immersive Experience',
    shortDesc: 'Ultra-high-definition 8K HDR interactive 360° virtual tours for hotels, real estate, showrooms, and enterprises.',
    description: 'Transform physical spaces into interactive virtual twins. We shoot with industry-leading Matterport Pro3 and multi-lens DSLR panos, embedding clickable hotspots, floor plans, measurement tools, and VR headset compatibility.',
    iconName: 'Compass',
    features: [
      '8K HDR Multi-bracket Photography',
      'Matterport 3D Dollhouse & Floorplans',
      'VR Headset (Meta Quest / Apple Vision) Ready',
      'Interactive Video, Audio & Product Hotspots',
      'Fast Cloud Hosting & Embed Code for Any Website'
    ],
    badge: 'Flagship Service',
    startingPrice: '₹14,999 / $199'
  },
  {
    id: 'google-street-view',
    title: 'Google Street View Setup',
    category: 'Google Maps & Local SEO',
    shortDesc: 'Official Google Trusted Photographer verified walkthroughs published directly to Google Maps & Search.',
    description: 'Boost your Google Business Profile rankings and footfall. We capture and connect certified 360° blue lines on Google Street View, guaranteeing instant verification and massive organic reach on Google Search & Maps.',
    iconName: 'MapPin',
    features: [
      'Google Trusted Photographer Badge & Upload',
      'Direct Google Maps 360° Blue Line Connection',
      'Google Business Profile (GMB) Optimization',
      'High-Resolution Interior & Exterior Points',
      'Permanent Hosting with Zero Monthly Recurring Fees'
    ],
    badge: 'Google Certified',
    startingPrice: '₹8,999 / $119'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    category: 'Performance Marketing',
    shortDesc: 'High-ROI digital marketing, Local SEO, and Meta & Google Ad campaigns tailored for location-based businesses.',
    description: 'Turn virtual tour visitors into paying customers. We design hyper-targeted advertising funnels, Local SEO dominance strategies, and social media showcase campaigns engineered to convert high-ticket leads.',
    iconName: 'TrendingUp',
    features: [
      'Hyper-Local SEO & Map Pack Top 3 Ranking',
      'High-Converting Meta & Google Ads Funnels',
      'Retargeting Campaigns for Tour Visitors',
      'Monthly Analytics, ROI & Footfall Tracking',
      'Reputation Management & 5-Star Review Growth'
    ],
    badge: 'High ROI',
    startingPrice: '₹19,999 / $249'
  },
  {
    id: 'web-development',
    title: 'Web & 3D Interactive Portals',
    category: 'Next-Gen Development',
    shortDesc: 'Ultra-fast, high-converting websites and bespoke web portals seamlessly integrated with 3D/VR tours.',
    description: 'Bespoke web applications built with modern frameworks, glassmorphism aesthetics, lightning-fast Core Web Vitals, and native 360° media integration to give your brand an unforgettable digital showroom.',
    iconName: 'Code',
    features: [
      'Custom Responsive Glassmorphism Design',
      'Integrated 360° Viewer & Virtual Showrooms',
      'Direct WhatsApp & Lead Capture Engines',
      'Sub-Second Page Load & Perfect SEO Scores',
      'Custom CMS & Client Management Dashboard'
    ],
    badge: 'Modern Tech',
    startingPrice: '₹24,999 / $299'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'azure-sky-resort',
    title: 'The Azure Palms Luxury Resort & Spa',
    client: 'Azure Hospitality Group',
    category: 'Hospitality',
    location: 'Goa, India',
    thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    panoramicImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80',
    viewsCount: '142,500+',
    resolution: '12K HDR 360°',
    description: 'A comprehensive 45-node luxury resort walkthrough featuring beachfront infinity pool, presidential overwater suites, and Michelin-star dining spaces with interactive booking hotspots.',
    tags: ['Luxury Hotel', 'Google Street View', 'Matterport Pro', 'Direct Booking Hotspots'],
    featured: true,
    hotspots: [
      { id: 'h1', x: 28, y: 48, title: 'Presidential Infinity Suite', description: 'Panoramic Arabian Sea view with private jacuzzi deck.', tag: 'Room Detail' },
      { id: 'h2', x: 72, y: 55, title: 'Azure Sunset Bar', description: 'Craft cocktail lounge open 5 PM - Midnight.', tag: 'Dining' },
      { id: 'h3', x: 50, y: 70, title: 'Book VIP Cabana', description: 'Tap to check real-time availability and reserve.', tag: 'Booking Link' }
    ]
  },
  {
    id: 'cyberpunk-tech-hub',
    title: 'Nova Apex Global Tech Headquarters',
    client: 'Nova Systems Corp',
    category: 'Corporate',
    location: 'Bengaluru, India',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    panoramicImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80',
    viewsCount: '98,200+',
    resolution: '8K Ultra HDR',
    description: 'Sprawling 120,000 sq ft innovation campus with biometric lab tours, executive boardrooms, cafeteria, and recruitment experience walkthrough.',
    tags: ['Corporate Campus', 'Interactive Map', 'Recruitment VR', '4K Dollhouse'],
    featured: true,
    hotspots: [
      { id: 'h4', x: 35, y: 42, title: 'AI Research Chamber', description: 'Quantum computing testbeds and acoustic pods.', tag: 'Innovation' },
      { id: 'h5', x: 65, y: 58, title: 'Townhall Amphitheatre', description: '400-seat hybrid collaborative auditorium.', tag: 'Event Space' }
    ]
  },
  {
    id: 'lumina-penthouse',
    title: 'The Sky Crest Luxury Duplex Penthouse',
    client: 'Prestige Skyline Realty',
    category: 'Real Estate',
    location: 'Mumbai, India',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    panoramicImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
    viewsCount: '215,000+',
    resolution: '16K Ultra-Def',
    description: 'High-ticket residential virtual showroom with accurate spatial measurement tools, sun orientation simulator, and architectural finish selectors.',
    tags: ['Real Estate', '3D Measurement', 'Architectural VR', 'Ultra-Luxury'],
    featured: true,
    hotspots: [
      { id: 'h6', x: 40, y: 50, title: 'Italian Marble Living Foyer', description: 'Statuary marble flooring with 24ft double-height ceiling.', tag: 'Materials' },
      { id: 'h7', x: 80, y: 45, title: 'Cantilevered Sunset Deck', description: 'Unobstructed skyline and ocean vistas.', tag: 'Balcony' }
    ]
  },
  {
    id: 'velocity-motors',
    title: 'Velocity Supercars Experience Center',
    client: 'Velocity Motors India',
    category: 'Automotive',
    location: 'Delhi NCR, India',
    thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80',
    panoramicImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80',
    viewsCount: '178,000+',
    resolution: '8K HDR 360°',
    description: 'Interactive automotive showroom where customers can step inside supercar cockpits, listen to engine sounds, and customize paint colors in 360°.',
    tags: ['Automotive', 'Interior 360 Cockpit', 'Audio Hotspots', 'Google Street View'],
    featured: false,
    hotspots: [
      { id: 'h8', x: 30, y: 52, title: 'V10 Twin-Turbo Cockpit', description: 'Click to sit inside and inspect hand-stitched Alcantara leather.', tag: 'Interior 360' },
      { id: 'h9', x: 70, y: 48, title: 'Bespoke Carbon Configurator', description: 'View wheel packages and aerodynamic wings.', tag: 'Customizer' }
    ]
  },
  {
    id: 'apex-med-care',
    title: 'Apex Super Specialty Medical Center',
    client: 'Apex Healthcare Foundation',
    category: 'Healthcare',
    location: 'Chandigarh, India',
    thumbnail: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80',
    panoramicImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80',
    viewsCount: '86,400+',
    resolution: '8K HDR Walkthrough',
    description: 'Patient orientation and international medical tourism walkthrough showcasing robotic surgery suites, private deluxe recovery suites, and clean rooms.',
    tags: ['Healthcare', 'Patient Navigation', 'Wayfinding', 'Google Maps Verified'],
    featured: false,
    hotspots: [
      { id: 'h10', x: 45, y: 45, title: 'Robotic Surgery Theatre', description: 'Class-100 sterile environment with DaVinci XI system.', tag: 'OT Facility' },
      { id: 'h11', x: 75, y: 60, title: 'VIP Recovery Suite', description: 'HEPA filtered private recovery with dedicated nurse station.', tag: 'In-Patient' }
    ]
  }
];

export const ACADEMY_COURSES: CourseItem[] = [
  {
    id: 'google-trusted-pro',
    title: 'Google Street View & 360° Masterclass',
    level: 'Professional Masterclass',
    duration: '4 Weeks (Live + Hands-On)',
    mode: 'Hybrid (Studio + Field Workshop)',
    description: 'Master commercial 360° photography, nodal bracket calibration, HDR stitching with PTGui, and become an accredited Google Trusted Photographer earning ₹1L+ per project.',
    highlights: [
      'DSLR + Fisheye & 360 One-Shot Camera Workflows',
      'Zero Parallax Calibration & Advanced HDR Stitching',
      'Official Google Street View API Publishing & Blue Lines',
      'Commercial Client Pitching & Pricing Strategy Blueprint'
    ],
    instructor: 'Lead Google Trusted Photographer @ SVL',
    rating: 4.98,
    badge: 'Bestseller',
    price: '₹18,499 / $225'
  },
  {
    id: 'matterport-metaverse',
    title: 'Matterport 3D Digital Twin Specialist',
    level: 'Intermediate',
    duration: '3 Weeks Intensive',
    mode: 'Online Live Masterclass',
    description: 'Learn end-to-end scanning techniques with Matterport Pro2/Pro3, floorplan drafting, custom Mattertag styling, and enterprise WebVR integration.',
    highlights: [
      'Matterport Capture App Deep Dive & LiDAR Scanning',
      'Advanced Dollhouse, Measurement & Mesh Optimization',
      'Custom JavaScript Plugins & Hotspot Automation',
      'Real Estate & Hospitality Case Study Walkthroughs'
    ],
    instructor: 'Spatial Computing Engineer @ SVL',
    rating: 4.95,
    badge: 'High Demand',
    price: '₹14,999 / $185'
  },
  {
    id: 'vr-agency-launchpad',
    title: '360° Virtual Tour Agency Launchpad',
    level: 'Beginner',
    duration: '2 Weeks Masterclass',
    mode: 'Self-Paced + Weekly Mentorship',
    description: 'The step-by-step business blueprint to launch, scale, and automate your own profitable 360° VR & local digital marketing agency from scratch.',
    highlights: [
      'Client Acquisition Scripts & High-Converting Pitch Decks',
      'Cold Email & WhatsApp Lead Generation Engine',
      'Contract Templates, Pricing Calculator & Proposal Kits',
      'Lifetime Access to SVL Private Creator Network'
    ],
    instructor: 'Founder & CEO, Smart View Labs',
    rating: 4.99,
    badge: 'Business Growth',
    price: '₹12,499 / $155'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Vikramaditya Oberoi',
    role: 'Managing Director',
    company: 'Heritage Grand Hotels & Resorts',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 weeks ago',
    text: 'Smart View Labs completely revolutionized our international bookings! Their 8K 360° virtual tour with Google Street View integration doubled our direct website conversions within 45 days. Their attention to lighting and detail is unparalleled.',
    serviceUsed: '360° Virtual Tour & Google Street View',
    verifiedGoogle: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Ananya Singhania',
    role: 'Chief Medical Superintendent',
    company: 'Singhania Super Specialty Hospitals',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 month ago',
    text: 'Patients travelling from abroad were hesitant about our facilities until SVL built our interactive hospital walkthrough. Now patients can explore our robotic OTs and recovery suites beforehand. Google Maps views shot up by 400%!',
    serviceUsed: 'Google Street View & Web 3D Portal',
    verifiedGoogle: true
  },
  {
    id: 'rev-3',
    name: 'Rajesh Mehra',
    role: 'Senior Vice President - Sales',
    company: 'Skyline Luxury Residences',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 weeks ago',
    text: 'The team at SVL are certified Google Trusted Photographers who deliver uncompromising perfection. NRI buyers locked multi-crore penthouse deals purely through the 360° interactive tour. Best investment for real estate developers!',
    serviceUsed: 'Matterport 3D Tour & Digital Marketing',
    verifiedGoogle: true
  },
  {
    id: 'rev-4',
    name: 'Siddharth Kapoor',
    role: 'Founder & Head of Marketing',
    company: 'Velocity Exotic Car Lounge',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 months ago',
    text: 'Incredible experience! The interactive cockpit hotspots and ambient audio in our 360° tour created massive buzz on social media. SVL is the absolute gold standard for virtual reality and immersive marketing.',
    serviceUsed: '360° Interactive Showroom & Ads',
    verifiedGoogle: true
  }
];

export const AGENCY_STATS = [
  { label: 'Virtual Tours Delivered', value: '250+', suffix: '', icon: 'Eye' },
  { label: 'Total Views on Google Maps', value: '4.8M+', suffix: '', icon: 'TrendingUp' },
  { label: 'Google 5-Star Rating', value: '4.98', suffix: '/ 5.0', icon: 'Star' },
  { label: 'Certified Photographers', value: '100%', suffix: ' Google Trusted', icon: 'Award' }
];
