import { ServiceItem, ReviewItem, ServiceArea } from '../types';

export const COMPANY_INFO = {
  name: 'EB Electrical Services Limited',
  shortName: 'EB Electrical',
  tagline: 'Powering Homes & Businesses with Trusted Electrical Solutions',
  industry: 'Electrical Installation Services',
  location: 'London, England',
  address: 'Flat 2, 105 Meyrick Rd, London SW11 2EG, United Kingdom',
  postcode: 'SW11 2EG',
  phone: '+44 7376 635189',
  phoneRaw: '+447376635189',
  phoneDisplay: '07376 635189',
  email: 'info@ebelectricalservices.co.uk',
  availability: 'Open 24 Hours',
  hoursDescription: '24/7 Rapid Emergency Response & Scheduled Works',
  certification: 'Fully Qualified Electrician & NICEIC Registered',
  rating: 5.0,
  reviewsCount: '71+',
  leadElectrician: 'Eric (Lead Electrician & Director)',
  registrationNo: 'NICEIC: D6089201',
  insurance: '£5,000,000 Public Liability Cover',
  warranty: '6-Year NICEIC Platinum Promise Guarantee'
};

export const SERVICES_DATA: ServiceItem[] = [
  // Domestic
  {
    id: 'lighting-installation',
    title: 'Lighting Installation',
    category: 'domestic',
    icon: 'Lightbulb',
    description: 'Bespoke indoor and outdoor architectural lighting, LED spot downlights, dimmers, chandeliers, and garden ambiance.',
    features: ['LED energy-saving downlights', 'Pendant & chandelier hanging', 'Smart dimmer controls', 'Outdoor security & garden lights'],
    popular: true,
    typicalTime: '2 - 4 hours',
    startingPrice: 'From £95'
  },
  {
    id: 'socket-installation',
    title: 'Socket Installation',
    category: 'domestic',
    icon: 'Plug',
    description: 'Adding new power sockets, USB-A/C integrated sockets, spur additions, cooker points, and weatherproof external sockets.',
    features: ['Twin USB-C fast charging sockets', 'Outdoor waterproof IP66 sockets', 'Appliance & cooker switches', 'Hidden TV cable power points'],
    typicalTime: '1 - 3 hours',
    startingPrice: 'From £85'
  },
  {
    id: 'fuse-board-upgrades',
    title: 'Fuse Board Upgrades',
    category: 'domestic',
    icon: 'Cpu',
    description: 'Modern 18th Edition metal consumer unit replacements with dual RCD, RCBOs, and Surge Protection Devices (SPD).',
    features: ['18th Edition BS 7671 compliant', 'Surge Protection Device (SPD)', 'Individual RCBO safety circuits', 'Full NICEIC certification'],
    popular: true,
    typicalTime: '4 - 6 hours',
    startingPrice: 'From £450'
  },
  {
    id: 'rewiring',
    title: 'Full & Partial Rewiring',
    category: 'domestic',
    icon: 'Zap',
    description: 'Complete home rewiring for Victorian, Edwardian, and modern London homes, renovations, extensions, and kitchen rewires.',
    features: ['Minimal disruption & clean chase cutting', 'New cable containment & backboxes', 'Building regulations Part P sign-off', 'EICR installation certificate'],
    typicalTime: '3 - 7 days',
    startingPrice: 'Custom quote'
  },

  // Commercial
  {
    id: 'office-electrical',
    title: 'Office Electrical Work',
    category: 'commercial',
    icon: 'Building2',
    description: 'Complete power distribution, desk floor boxes, dedicated server circuits, and high-efficiency commercial workspace lighting.',
    features: ['Desk power & cat6 data grommets', 'Dedicated server / UPS circuits', 'Three-phase electrical supply', 'Emergency lighting systems'],
    typicalTime: 'Flexible / Out-of-hours',
    startingPrice: 'Commercial rates'
  },
  {
    id: 'maintenance',
    title: 'Electrical Maintenance',
    category: 'commercial',
    icon: 'Wrench',
    description: 'Planned preventative maintenance (PPM), reactive repairs, lamp replacement contracts, and compliance servicing.',
    features: ['Regular scheduled inspections', 'Emergency call-out priority', 'PAT portable appliance testing', 'Detailed safety reporting'],
    typicalTime: 'Ongoing contract / On-demand',
    startingPrice: 'From £120/hr'
  },
  {
    id: 'testing-inspection',
    title: 'Testing & Inspection (EICR)',
    category: 'commercial',
    icon: 'ClipboardCheck',
    description: 'Landlord Electrical Installation Condition Reports (EICR), commercial compliance tests, and insurance safety audits.',
    features: ['Mandatory 5-year landlord checks', 'Digital NICEIC certificate within 24h', 'Remedial action plan if needed', 'Insulation resistance & earth loop tests'],
    popular: true,
    typicalTime: '2 - 4 hours',
    startingPrice: 'From £150'
  },

  // Smart Home
  {
    id: 'hive-installation',
    title: 'Hive Installation',
    category: 'smarthome',
    icon: 'Flame',
    description: 'Certified installation of Hive Active Heating, wireless receivers, smart thermostats, and multi-zone heating controls.',
    features: ['Official Hive hub & thermostat setup', 'Combi or conventional boiler pairing', 'Smartphone app configuration', 'Demonstration & walkthrough'],
    popular: true,
    typicalTime: '1.5 - 2.5 hours',
    startingPrice: 'From £110'
  },
  {
    id: 'smart-controls',
    title: 'Smart Controls & Automation',
    category: 'smarthome',
    icon: 'Radio',
    description: 'Intelligent lighting, smart relay switches, smart doorbells (Ring/Nest), wireless scene controllers, and voice control integrations.',
    features: ['Philips Hue, Lutron & Shelly relays', 'Smart video doorbells & cameras', 'Automated timing & holiday modes', 'Alexa & Apple HomeKit integration'],
    typicalTime: '2 - 5 hours',
    startingPrice: 'From £130'
  },
  {
    id: 'energy-efficient',
    title: 'Energy Efficient Systems',
    category: 'smarthome',
    icon: 'Leaf',
    description: 'Smart energy monitors, eco LED retrofits, smart electric vehicle (EV) charging point installations, and power optimisation.',
    features: ['Home EV smart charging points', 'Real-time smart energy meters', 'Solar inverter connections', 'High-efficiency heat system wiring'],
    typicalTime: 'Half day',
    startingPrice: 'Custom assessment'
  },

  // Emergency
  {
    id: 'emergency-electrician',
    title: '24/7 Emergency Support',
    category: 'emergency',
    icon: 'AlertTriangle',
    description: 'Rapid London emergency dispatch for power outages, burning smells, water ingress, and sparking outlets at any time of night or day.',
    features: ['Under 45-min arrival in SW London', 'Available 24 hours 7 days a week', 'Fully equipped service van', 'Immediate safety isolate & repair'],
    popular: true,
    typicalTime: 'Immediate dispatch',
    startingPrice: '24/7 Emergency rate'
  },
  {
    id: 'fault-finding',
    title: 'Fault Finding & Diagnosis',
    category: 'emergency',
    icon: 'SearchCheck',
    description: 'Precision diagnostic testing to trace tripping RCDs, hidden cable faults, neutral issues, and intermittent circuit breaks.',
    features: ['Advanced multi-function testers', 'Thermal imaging leak detection', 'Locate hidden ceiling/wall faults', 'Safe isolation & immediate fix'],
    typicalTime: '1 - 2 hours',
    startingPrice: 'From £95/hr'
  },
  {
    id: 'emergency-repairs',
    title: 'Emergency Repairs',
    category: 'emergency',
    icon: 'ShieldAlert',
    description: 'Fast repairs for damaged cables, blown main fuses, melted sockets, flood water damage, and emergency breaker replacements.',
    features: ['On-the-spot component replacement', 'Temporary safe power restoration', 'Follow-up permanent repair', 'Safety report issued on completion'],
    typicalTime: '1 - 3 hours',
    startingPrice: 'Fixed call-out quote'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Sarah Jenkins',
    location: 'Battersea, SW11',
    rating: 5,
    date: '2 weeks ago',
    text: 'Communication was smooth from start to finish and the price was very fair. Eric arrived punctually, diagnosed our tripped circuits quickly, and left the room spotless.',
    serviceType: 'Fault Finding & Circuit Repair',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'David Reynolds',
    location: 'Clapham, SW4',
    rating: 5,
    date: '1 month ago',
    text: 'Fantastic service, extremely pleased with the HIVE installation. Walked us through how to use the app and calibrated everything perfectly. Won’t hesitate to use again!',
    serviceType: 'Hive Smart Heating Setup',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Marcus Thorne',
    location: 'Chelsea, SW3',
    rating: 5,
    date: '3 weeks ago',
    text: 'Highly recommend Eric for any electrical work you need done. Upgraded our old 1980s fuse board to a modern surge-protected 18th edition unit. Top-notch NICEIC paperwork.',
    serviceType: 'Fuse Board Upgrade & EICR',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    location: 'Wandsworth, SW18',
    rating: 5,
    date: 'Just recently',
    text: 'Called EB Electrical at 11 PM on a Sunday when water leaked into our kitchen ceiling lighting. He was here in 35 minutes and made the whole house safe. Lifesaver!',
    serviceType: '24/7 Emergency Electrician',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Oliver Hughes',
    location: 'South West London',
    rating: 5,
    date: '2 months ago',
    text: 'Full rewire of our flat renovation. Immaculate craftsmanship, pristine chase work, and clear communication every single day. 5 stars all the way.',
    serviceType: 'Complete Flat Rewiring',
    verified: true
  }
];

export const SERVICE_AREAS_DATA: ServiceArea[] = [
  {
    id: 'battersea',
    name: 'Battersea',
    postcode: 'SW11',
    responseTime: '10 - 20 mins',
    description: 'Our primary headquarters zone based on Meyrick Road. Instant local dispatch to Battersea Park, Nine Elms, and Northcote Road.',
    landmarks: ['Meyrick Road', 'Battersea Power Station', 'Northcote Road', 'Battersea Square'],
    coordinates: { x: 50, y: 55 }
  },
  {
    id: 'clapham',
    name: 'Clapham',
    postcode: 'SW4',
    responseTime: '15 - 25 mins',
    description: 'Complete domestic and commercial coverage across Clapham Old Town, Clapham Common, and Clapham South.',
    landmarks: ['Clapham Common', 'Clapham Old Town', 'Abbeville Road', 'Clapham Junction'],
    coordinates: { x: 58, y: 65 }
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    postcode: 'SW3 & SW10',
    responseTime: '20 - 30 mins',
    description: 'Luxury residential, architectural lighting, smart home controls, and boutique commercial electrical works.',
    landmarks: ["King's Road", 'Sloane Square', 'Cheyne Walk', 'Chelsea Harbour'],
    coordinates: { x: 45, y: 40 }
  },
  {
    id: 'wandsworth',
    name: 'Wandsworth',
    postcode: 'SW18',
    responseTime: '15 - 25 mins',
    description: 'Comprehensive family home installations, Victorian house rewires, fuse boards, and landlord EICR certifications.',
    landmarks: ['Wandsworth Town', 'St John’s Hill', 'Southside', 'Wandsworth Common'],
    coordinates: { x: 40, y: 62 }
  },
  {
    id: 'south-west-london',
    name: 'South West London',
    postcode: 'SW6, SW15, SW19',
    responseTime: '25 - 40 mins',
    description: 'Wider SW coverage including Fulham, Putney, Wimbledon, Balham, Earlsfield, and Southfields.',
    landmarks: ['Fulham Road', 'Putney High St', 'Wimbledon Village', 'Balham High Rd'],
    coordinates: { x: 30, y: 70 }
  }
];

export const WHY_CHOOSE_METRICS = [
  {
    value: 71,
    suffix: '+',
    label: 'Google Reviews',
    detail: 'Flawless 5.0 Star rated by London homeowners',
    icon: 'Star'
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Availability',
    detail: 'Day and night emergency response across London',
    icon: 'Clock'
  },
  {
    value: 100,
    suffix: '%',
    label: 'Satisfaction',
    detail: 'Guaranteed craftsmanship & transparent pricing',
    icon: 'ShieldCheck'
  },
  {
    value: 6,
    suffix: ' Yr',
    label: 'NICEIC Warranty',
    detail: 'Platinum Promise backed installation insurance',
    icon: 'Award'
  }
];
