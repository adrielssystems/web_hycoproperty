export interface PropertyListing {
  id: string;
  code: string;
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  address: string;
  cityStateZip: string;
  category: 'Commercial' | 'Industrial' | 'Office' | 'Multi-Tenant';
  areaSqft: number;
  areaDisplay: { en: string; es: string };
  priceDisplay: { en: string; es: string };
  priceSubtext: { en: string; es: string };
  leaseType: { en: string; es: string };
  status: 'AVAILABLE' | 'UNDER_OFFER' | 'LEASED';
  baths?: number;
  offices?: number;
  levelNumber: string;
  levelLabel: { en: string; es: string };
  coverImage: string;
  gallery: string[];
  description: { en: string; es: string };
  highlights: { en: string[]; es: string[] };
  featured?: boolean;
}

export interface ArchitecturalLevel {
  id: string;
  number: string;
  code: { en: string; es: string };
  tag: { en: string; es: string };
  headline: { en: string; es: string };
  subheadline: { en: string; es: string };
  locationLabel: string;
  levelBadge: { en: string; es: string };
  floorTitle: { en: string; es: string };
  metrics: {
    area: { en: string; es: string };
    rate: { en: string; es: string };
    config: { en: string; es: string };
    access: { en: string; es: string };
  };
  image: string;
  secondaryImage: string;
  propertyId: string;
}

export const ARCHITECTURAL_LEVELS: ArchitecturalLevel[] = [
  {
    id: 'lvl-01',
    number: '01',
    code: { en: 'GROUND FLOOR', es: 'PLANTA BAJA' },
    tag: {
      en: 'ZIONSVILLE ROAD · CORPORATE & COMMERCIAL DISTRICT',
      es: 'ZIONSVILLE ROAD · DISTRITO CORPORATIVO Y COMERCIAL',
    },
    headline: {
      en: 'YOUR BUSINESS.\nELEVATED.',
      es: 'SU EMPRESA.\nELEVADA.',
    },
    subheadline: {
      en: 'Committed to protecting and growing your property’s value across Indianapolis since 2018.',
      es: 'Comprometidos con proteger y hacer crecer el valor de su propiedad en Indianápolis desde 2018.',
    },
    locationLabel: '5645 W 79th St & 7898 Zionsville Rd · Indianapolis, IN 46268',
    levelBadge: { en: 'STREET LEVEL', es: 'NIVEL CALLE' },
    floorTitle: { en: 'GROUND FLOOR · COMMERCIAL', es: 'PLANTA BAJA · COMERCIAL' },
    metrics: {
      area: { en: '2,600 SQ FT', es: '2,600 PIES²' },
      rate: { en: '$19.50 SF/YR', es: '$19.50 SF/AÑO' },
      config: { en: '5 Private Suites · 1 Bath', es: '5 Suites Privadas · 1 Baño' },
      access: { en: 'High Foot & Vehicle Traffic', es: 'Alto Tráfico Peatonal y Vehicular' },
    },
    image: '/properties/79th-st-1.jpg',
    secondaryImage: '/properties/79th-st-2.jpg',
    propertyId: 'prop-5645-79th',
  },
  {
    id: 'lvl-02',
    number: '02',
    code: { en: 'LEVEL 01', es: 'NIVEL 01' },
    tag: {
      en: 'I-70 & HOLT RD CORRIDOR · MULTI-BUILDING INDUSTRIAL HUB',
      es: 'CORREDOR I-70 Y HOLT RD · COMPLEJO INDUSTRIAL MULTI-NAVE',
    },
    headline: {
      en: 'STRATEGIC SCALE.\nBUILT FOR GROWTH.',
      es: 'ESCALA ESTRATÉGICA.\nDISEÑADA PARA CRECER.',
    },
    subheadline: {
      en: 'Three high-visibility industrial service buildings with direct I-70 exposure, tall overhead doors, and fenced rear yard.',
      es: 'Tres naves industriales de alta visibilidad con exposición directa a la I-70, portones elevados y patio trasero cercado.',
    },
    locationLabel: '4210 W / 4200 W / 4190 W Morris St · Indianapolis, IN 46241',
    levelBadge: { en: 'INDUSTRIAL BAY', es: 'NAVE INDUSTRIAL' },
    floorTitle: { en: 'LEVEL 01 · MULTI-TENANT HUB', es: 'NIVEL 01 · COMPLEJO INDUSTRIAL' },
    metrics: {
      area: { en: '11,750 SQ FT', es: '11,750 PIES²' },
      rate: { en: '$14.00 /SQ FT', es: '$14.00 /PIE²' },
      config: { en: '3 Buildings · Gross Lease', es: '3 Edificios · Renta Bruta' },
      access: { en: 'Direct I-70 & Fenced Yard', es: 'Acceso Directo I-70 y Patio Cercado' },
    },
    image: '/properties/morris-aerial-1.jpg',
    secondaryImage: '/properties/morris-aerial-2.jpg',
    propertyId: 'prop-morris-multi',
  },
  {
    id: 'lvl-03',
    number: '03',
    code: { en: 'LEVEL 02', es: 'NIVEL 02' },
    tag: {
      en: '4210 W. MORRIS ST · BUILDING 1 INDUSTRIAL & OFFICE',
      es: '4210 W. MORRIS ST · EDIFICIO 1 INDUSTRIAL Y OFICINAS',
    },
    headline: {
      en: 'ENGINEERED FOR\nPERFORMANCE.',
      es: 'INGENIERÍA PARA\nALTO RENDIMIENTO.',
    },
    subheadline: {
      en: 'Climate-controlled shop and dual private offices equipped with compressed air lines, heavy power, and tall overhead bay doors.',
      es: 'Taller climatizado y dos oficinas privadas equipadas con líneas de aire comprimido, capacidad eléctrica industrial y portón de gran altura.',
    },
    locationLabel: '4210 W. Morris St · Indianapolis, IN 46241',
    levelBadge: { en: 'SHOP & OFFICE', es: 'TALLER Y OFICINA' },
    floorTitle: { en: 'LEVEL 02 · BUILDING 01', es: 'NIVEL 02 · EDIFICIO 01' },
    metrics: {
      area: { en: '4,000 SQ FT', es: '4,000 PIES²' },
      rate: { en: '$14.00 /SQ FT', es: '$14.00 /PIE²' },
      config: { en: '2 Offices + Heated/AC Shop', es: '2 Oficinas + Taller Climatizado' },
      access: { en: 'Rear Tall Overhead Door', es: 'Portón Trasero de Gran Altura' },
    },
    image: '/properties/bldg1-front.jpg',
    secondaryImage: '/properties/bldg1-shop.jpg',
    propertyId: 'prop-4210-morris',
  },
  {
    id: 'lvl-04',
    number: '04',
    code: { en: 'LEVEL 03', es: 'NIVEL 03' },
    tag: {
      en: 'PRIME 38TH STREET · PROFESSIONAL & COMMERCIAL SUITE',
      es: 'UBICACIÓN PRIME 38TH STREET · SUITE PROFESIONAL Y COMERCIAL',
    },
    headline: {
      en: 'LIVE ABOVE\nTHE ORDINARY.',
      es: 'SUPERE LO\nORDINARIO.',
    },
    subheadline: {
      en: 'Flexible commercial workspace on 38th Street combining open collaborative zones, dedicated work areas, and private executive office.',
      es: 'Espacio comercial flexible en 38th Street que combina áreas abiertas de trabajo, zonas dedicadas, amplio almacén y oficina ejecutiva privada.',
    },
    locationLabel: 'Prime 38th Street Corridor · Indianapolis, IN',
    levelBadge: { en: 'EXECUTIVE LEVEL', es: 'NIVEL EJECUTIVO' },
    floorTitle: { en: 'LEVEL 03 · 38TH ST SUITE', es: 'NIVEL 03 · SUITE 38TH ST' },
    metrics: {
      area: { en: '1,350 SQ FT', es: '1,350 PIES²' },
      rate: { en: 'INQUIRE RATE', es: 'CONSULTAR TARIFA' },
      config: { en: 'Open Workspace + Private Office', es: 'Área Abierta + Oficina Privada' },
      access: { en: 'Prime 38th St Visibility', es: 'Visibilidad Prime en 38th St' },
    },
    image: '/properties/38th-st-1.jpg',
    secondaryImage: '/properties/38th-st-2.jpg',
    propertyId: 'prop-38th-street',
  },
];

export const OFFICIAL_LISTINGS: PropertyListing[] = [
  {
    id: 'prop-5645-79th',
    code: 'HYCO-231',
    title: {
      en: '5645 W 79th St — Commercial & Executive Space',
      es: '5645 W 79th St — Espacio Comercial y Ejecutivo',
    },
    subtitle: {
      en: 'Prime Northwest Indianapolis Commercial Corridor · Immediate Occupancy',
      es: 'Corredor Comercial Prime al Noroeste de Indianápolis · Ocupación Inmediata',
    },
    address: '5645 W 79th St',
    cityStateZip: 'Indianapolis, IN 46268',
    category: 'Commercial',
    areaSqft: 2600,
    areaDisplay: { en: '2,600 Sq Ft', es: '2,600 Pies²' },
    priceDisplay: { en: '$19.50 SF/Year', es: '$19.50 SF/Año' },
    priceSubtext: {
      en: 'Listed rate may not include utilities, building services, or other property expenses.',
      es: 'La tarifa publicada puede no incluir servicios públicos, mantenimiento del edificio u otros gastos.',
    },
    leaseType: { en: 'Commercial Lease', es: 'Arrendamiento Comercial' },
    status: 'AVAILABLE',
    baths: 1,
    offices: 5,
    levelNumber: '01',
    levelLabel: { en: 'GROUND LEVEL · 2,600 SF', es: 'PLANTA BAJA · 2,600 SF' },
    coverImage: '/properties/79th-st-1.jpg',
    gallery: ['/properties/79th-st-1.jpg', '/properties/79th-st-2.jpg', '/properties/79th-st-3.jpg'],
    description: {
      en: 'Looking for the perfect spot to grow your business in Indianapolis? This 2,600 SF commercial property at 5645 W 79th St offers a prime, high-visibility location with exceptional accessibility for both clients and employees. Ready for immediate occupancy and tailored for offices, service businesses, or expanding companies.',
      es: '¿Busca el lugar perfecto para hacer crecer su negocio en Indianápolis? Esta propiedad comercial de 2,600 SF en 5645 W 79th St ofrece una ubicación privilegiada de alta visibilidad con excelente accesibilidad para clientes y empleados. Lista para ocupación inmediata, ideal para oficinas, empresas de servicios o compañías en expansión.',
    },
    highlights: {
      en: [
        '2,600 Sq Ft of versatile commercial & office layout',
        '5 distinct rooms / executive work areas & 1 private restroom',
        'High foot and vehicle traffic along W 79th St corridor',
        'Prime accessibility near Zionsville Rd & I-465',
        'Ready for immediate occupancy',
        'Ideal for professional offices, medical/service businesses, or headquarters',
      ],
      es: [
        '2,600 Pies² de distribución comercial y de oficinas versátil',
        '5 áreas de trabajo / oficinas privadas y 1 baño completo',
        'Alto flujo peatonal y vehicular sobre el corredor W 79th St',
        'Excelente accesibilidad cerca de Zionsville Rd e I-465',
        'Listo para ocupación inmediata',
        'Ideal para oficinas profesionales, empresas de servicios o sede corporativa',
      ],
    },
    featured: true,
  },
  {
    id: 'prop-38th-street',
    code: 'HYCO-1097',
    title: {
      en: 'Prime 38th Street Location | Office Space for Lease',
      es: 'Ubicación Prime en 38th Street | Oficina en Renta',
    },
    subtitle: {
      en: 'Flexible Commercial Layout · Open Workspace & Private Executive Office',
      es: 'Distribución Comercial Flexible · Área Abierta y Oficina Privada',
    },
    address: 'Prime 38th Street Corridor',
    cityStateZip: 'Indianapolis, IN',
    category: 'Office',
    areaSqft: 1350,
    areaDisplay: { en: '1,350 Sq Ft', es: '1,350 Pies²' },
    priceDisplay: { en: 'Contact for Rate', es: 'Consultar Tarifa' },
    priceSubtext: {
      en: 'Competitive customized terms · Direct hands-on management',
      es: 'Términos competitivos personalizados · Gestión directa',
    },
    leaseType: { en: 'Commercial / Office Lease', es: 'Arrendamiento de Oficina / Comercial' },
    status: 'AVAILABLE',
    baths: 1,
    offices: 2,
    levelNumber: '02',
    levelLabel: { en: 'SUITE LEVEL · 1,350 SF', es: 'NIVEL SUITE · 1,350 SF' },
    coverImage: '/properties/38th-st-1.jpg',
    gallery: ['/properties/38th-st-1.jpg', '/properties/38th-st-2.jpg', '/properties/38th-st-3.jpg'],
    description: {
      en: 'Conveniently located on 38th Street, this functional 1,350 SF commercial space offers a flexible layout with open workspace, dedicated work areas, ample storage, and a private office. With excellent visibility and easy access to major roads, surrounding neighborhoods, and nearby businesses, this is a great opportunity for a small business or professional office.',
      es: 'Convenientemente ubicado en 38th Street, este funcional espacio comercial de 1,350 SF ofrece un diseño flexible con área de trabajo abierta, zonas dedicadas, amplio espacio de almacenamiento y una oficina privada. Con excelente visibilidad y fácil acceso a las vías principales, es una gran oportunidad para una pequeña empresa u oficina profesional.',
    },
    highlights: {
      en: [
        'Prime 38th Street location with high arterial visibility',
        '1,350 SF flexible commercial layout',
        'Open collaborative workspace + dedicated work areas',
        'Private executive office & ample on-site storage',
        'Private restroom facility',
        'Suitable for a wide variety of professional and service uses',
      ],
      es: [
        'Ubicación privilegiada en 38th Street con alta visibilidad arterial',
        '1,350 Pies² de distribución comercial flexible',
        'Espacio de trabajo abierto + áreas operativas dedicadas',
        'Oficina ejecutiva privada y amplio almacenamiento interno',
        'Baño privado incluido',
        'Adecuado para una amplia variedad de usos comerciales y profesionales',
      ],
    },
    featured: true,
  },
  {
    id: 'prop-morris-multi',
    code: 'HYCO-952',
    title: {
      en: 'Multi-Tenant Industrial Campus: 4210 / 4200 / 4190 W Morris St',
      es: 'Complejo Industrial Multi-Nave: 4210 / 4200 / 4190 W Morris St',
    },
    subtitle: {
      en: 'Three Shop Buildings On-Site · Clear I-70 Exposure & Fenced Rear Lot',
      es: 'Tres Naves Industriales · Exposición Directa a I-70 y Patio Trasero Cercado',
    },
    address: '4210 W / 4200 W / 4190 W Morris St',
    cityStateZip: 'Indianapolis, IN 46241',
    category: 'Multi-Tenant',
    areaSqft: 11750,
    areaDisplay: { en: '11,750 Sq Ft (Full Campus)', es: '11,750 Pies² (Campus Completo)' },
    priceDisplay: { en: '$14.00 /Sq Ft', es: '$14.00 /Pie²' },
    priceSubtext: {
      en: 'Lease the full multi-building campus or an individual building · Gross Lease',
      es: 'Arriende el complejo completo de 3 edificios o una nave individual · Renta Bruta',
    },
    leaseType: { en: 'Gross Lease', es: 'Arrendamiento Bruto (Gross Lease)' },
    status: 'AVAILABLE',
    baths: 3,
    offices: 6,
    levelNumber: '03',
    levelLabel: { en: 'FULL CAMPUS · 3 BUILDINGS', es: 'CAMPUS COMPLETO · 3 EDIFICIOS' },
    coverImage: '/properties/morris-aerial-1.jpg',
    gallery: [
      '/properties/morris-aerial-1.jpg',
      '/properties/morris-aerial-2.jpg',
      '/properties/morris-aerial-3.jpg',
      '/properties/bldg1-front.jpg',
      '/properties/bldg2-front.jpg',
    ],
    description: {
      en: 'Whole property opportunity for businesses planning future expansion at the same location. High-visibility industrial service property with clear I-70 exposure and fast access at the I-70 and Holt Rd exit. Located in a proven trucking and industrial corridor, this site is ideal for truck and trailer service, fleet maintenance, automotive repair, light industrial, or contractor operations. Three shop buildings on-site with a fenced rear lot providing secure outdoor space for parking, staging, storage, or circulation.',
      es: 'Oportunidad de propiedad completa para empresas que planean expansión futura en una misma ubicación. Propiedad industrial y de servicios de alta visibilidad con exposición directa a la I-70 y acceso rápido en la salida de I-70 y Holt Rd. Ubicada en un corredor industrial consolidado, ideal para servicio de camiones y remolques, mantenimiento de flotas, reparación automotriz, industria ligera u operaciones de contratistas. Tres edificios de taller en el sitio con patio trasero cercado.',
    },
    highlights: {
      en: [
        'Three industrial shop buildings on-site — lease full property or individual building',
        'Tall overhead doors + rear access to secure fenced lot',
        'High ceilings with heated and air-conditioned shop and office areas',
        'Offices with above-office mezzanine storage',
        'Heavy electrical capacity suitable for industrial equipment',
        'Compressed air lines installed throughout the shops',
        'Lighted front signage for strong visibility & I-70 exposure',
        'Lease Type: Gross Lease ($14 / Sq Ft)',
      ],
      es: [
        'Tres edificios industriales en el sitio — rente todo el complejo o por edificio',
        'Portones elevados + acceso trasero a patio seguro cercado',
        'Techos de gran altura con áreas de taller y oficina climatizadas (calefacción y A/C)',
        'Oficinas con almacenamiento superior tipo mezzanine',
        'Capacidad eléctrica industrial para maquinaria pesada',
        'Líneas de aire comprimido instaladas en todo el taller',
        'Señalización frontal iluminada de alta visibilidad hacia I-70',
        'Tipo de contrato: Gross Lease ($14 / Pie²)',
      ],
    },
    featured: true,
  },
  {
    id: 'prop-4210-morris',
    code: 'HYCO-924',
    title: {
      en: '4210 W. Morris St — Industrial Service & Office (Building 1)',
      es: '4210 W. Morris St — Nave Industrial y Oficinas (Edificio 1)',
    },
    subtitle: {
      en: '4,000 Sq Ft High-Visibility Industrial Service Property · I-70 & Holt Rd Exit',
      es: '4,000 Pies² Nave Industrial de Alta Visibilidad · Salida I-70 y Holt Rd',
    },
    address: '4210 W. Morris St',
    cityStateZip: 'Indianapolis, IN 46241',
    category: 'Industrial',
    areaSqft: 4000,
    areaDisplay: { en: '4,000 Sq Ft', es: '4,000 Pies²' },
    priceDisplay: { en: '$14.00 /Sq Ft', es: '$14.00 /Pie²' },
    priceSubtext: {
      en: 'Gross Lease · Heated & Air-Conditioned Shop + Two Private Offices',
      es: 'Gross Lease · Taller Climatizado + Dos Oficinas Privadas',
    },
    leaseType: { en: 'Gross Lease', es: 'Arrendamiento Bruto (Gross Lease)' },
    status: 'AVAILABLE',
    baths: 1,
    offices: 2,
    levelNumber: '04',
    levelLabel: { en: 'BUILDING 01 · 4,000 SF', es: 'EDIFICIO 01 · 4,000 SF' },
    coverImage: '/properties/bldg1-front.jpg',
    gallery: [
      '/properties/bldg1-front.jpg',
      '/properties/bldg1-shop.jpg',
      '/properties/bldg1-office.jpg',
      '/properties/morris-aerial-2.jpg',
    ],
    description: {
      en: '4,000 Sq Ft high-visibility industrial service property with clear I-70 exposure and fast access at the I-70 and Holt Rd exit. Located in a proven trucking and industrial corridor, this site is ideal for truck and trailer service, fleet maintenance, automotive repair, light industrial, or contractor operations.',
      es: 'Propiedad industrial y de servicios de 4,000 Pies² de alta visibilidad con exposición clara a la I-70 y rápido acceso en la salida de I-70 y Holt Rd. Ubicada en un corredor industrial estratégico, ideal para servicio de flotas, mantenimiento pesado, taller especializado, industria ligera o contratistas.',
    },
    highlights: {
      en: [
        'Front entrance to reception / two private executive offices',
        'Rear tall overhead door with direct access to fenced lot',
        'High clear-span ceilings across work bay',
        'Heated and air-conditioned shop and office areas',
        'Electrical capacity suitable for most industrial equipment needs',
        'Compressed air lines installed throughout the shop',
        'Illuminated front signage for strong visibility and exposure',
        'Lease Type: Gross Lease ($14 / Sq Ft)',
      ],
      es: [
        'Entrada frontal a recepción y dos oficinas ejecutivas privadas',
        'Portón trasero elevado con acceso directo a patio cercado',
        'Techos altos libres en toda el área operativa de taller',
        'Áreas de taller y oficinas con calefacción y aire acondicionado',
        'Capacidad eléctrica industrial para equipamiento pesado',
        'Líneas de aire comprimido instaladas en todo el taller',
        'Señalización frontal iluminada de gran visibilidad',
        'Tipo de contrato: Gross Lease ($14 / Pie²)',
      ],
    },
    featured: true,
  },
  {
    id: 'prop-4200-morris',
    code: 'HYCO-906',
    title: {
      en: '4200 W. Morris St — Industrial Shop with Lift (Building 2)',
      es: '4200 W. Morris St — Nave Industrial con Elevador (Edificio 2)',
    },
    subtitle: {
      en: '4,000 Sq Ft Industrial Service Facility · Equipped with Automotive/Shop Lift',
      es: '4,000 Pies² Instalación Industrial · Equipada con Elevador Hidráulico',
    },
    address: '4200 W. Morris St',
    cityStateZip: 'Indianapolis, IN 46241',
    category: 'Industrial',
    areaSqft: 4000,
    areaDisplay: { en: '4,000 Sq Ft', es: '4,000 Pies²' },
    priceDisplay: { en: '$14.00 /Sq Ft', es: '$14.00 /Pie²' },
    priceSubtext: {
      en: 'Gross Lease · Includes 1 Industrial Lift & Full Air Line System',
      es: 'Gross Lease · Incluye 1 Elevador Industrial y Sistema de Aire Comprimido',
    },
    leaseType: { en: 'Gross Lease', es: 'Arrendamiento Bruto (Gross Lease)' },
    status: 'LEASED',
    baths: 1,
    offices: 1,
    levelNumber: '05',
    levelLabel: { en: 'BUILDING 02 · 4,000 SF', es: 'EDIFICIO 02 · 4,000 SF' },
    coverImage: '/properties/bldg2-front.jpg',
    gallery: [
      '/properties/bldg2-front.jpg',
      '/properties/bldg2-shop.jpg',
      '/properties/bldg2-lift.jpg',
    ],
    description: {
      en: '4,000 Sq Ft high-visibility industrial service property along W. Morris St with clear I-70 exposure. Features a climate-controlled shop floor, tall overhead door accessing the secure fenced lot, compressed air lines throughout, and an on-site vehicle/equipment lift.',
      es: 'Propiedad industrial de 4,000 Pies² sobre W. Morris St con exposición a la I-70. Cuenta con área de taller climatizada, portón elevado con acceso al patio cercado, líneas de aire comprimido en toda la nave y un elevador hidráulico instalado.',
    },
    highlights: {
      en: [
        'Front tall overhead door with access to fenced lot',
        'One industrial/automotive lift available for use',
        'High ceilings & heated/air-conditioned shop area',
        'Electrical capacity suitable for heavy equipment needs',
        'Air lines installed throughout the shop',
        'Illuminated front signage for strong visibility and exposure',
        'Lease Type: Gross Lease ($14 / Sq Ft)',
      ],
      es: [
        'Portón frontal elevado con acceso a patio cercado',
        'Un elevador industrial/automotriz disponible para uso',
        'Techos altos y área de taller climatizada (calefacción y A/C)',
        'Capacidad eléctrica para equipos de alto consumo',
        'Líneas de aire comprimido en toda la nave',
        'Señalización frontal iluminada de alta exposición',
        'Tipo de contrato: Gross Lease ($14 / Pie²)',
      ],
    },
  },
  {
    id: 'prop-4190-morris',
    code: 'HYCO-651',
    title: {
      en: '4190 W. Morris St — Industrial & Workshop Facility (Building 3)',
      es: '4190 W. Morris St — Nave Industrial y Taller (Edificio 3)',
    },
    subtitle: {
      en: '3,750 Sq Ft High-Visibility Industrial Service Property · I-70 Corridor',
      es: '3,750 Pies² Propiedad Industrial de Alta Visibilidad · Corredor I-70',
    },
    address: '4190 W. Morris St',
    cityStateZip: 'Indianapolis, IN 46241',
    category: 'Industrial',
    areaSqft: 3750,
    areaDisplay: { en: '3,750 Sq Ft', es: '3,750 Pies²' },
    priceDisplay: { en: '$14.00 /Sq Ft', es: '$14.00 /Pie²' },
    priceSubtext: {
      en: 'Gross Lease · Currently Leased · Inquire for Waitlist or Similar Units',
      es: 'Gross Lease · Actualmente Arrendado · Consulte Lista de Espera o Unidades Similares',
    },
    leaseType: { en: 'Gross Lease', es: 'Arrendamiento Bruto (Gross Lease)' },
    status: 'LEASED',
    baths: 1,
    offices: 2,
    levelNumber: '06',
    levelLabel: { en: 'BUILDING 03 · 3,750 SF', es: 'EDIFICIO 03 · 3,750 SF' },
    coverImage: '/properties/bldg3-front.webp',
    gallery: [
      '/properties/bldg3-front.webp',
      '/properties/bldg3-interior.webp',
      '/properties/morris-aerial-3.jpg',
    ],
    description: {
      en: '3,750 Sq Ft high-visibility industrial service property with clear I-70 exposure and fast access at the I-70 and Holt Rd exit. Ideal for industrial use, workshop operations, fleet service, or specialized storage.',
      es: 'Propiedad industrial de 3,750 Pies² con exposición directa a la I-70 y rápido acceso en la salida de I-70 y Holt Rd. Ideal para uso industrial, operaciones de taller, mantenimiento de flotas o almacenamiento especializado.',
    },
    highlights: {
      en: [
        'Tall overhead door + rear access to fenced lot',
        'High ceilings with heated and air-conditioned shop and office',
        'Office with above-office storage mezzanine',
        'Electrical capacity suitable for most equipment needs',
        'Air lines installed throughout the shop',
        'Lighted front signage for strong visibility and exposure',
      ],
      es: [
        'Portón elevado + acceso trasero a patio cercado',
        'Techos altos con taller y oficina climatizados',
        'Oficina con almacenamiento superior tipo mezzanine',
        'Capacidad eléctrica industrial para equipamiento',
        'Líneas de aire comprimido en todo el taller',
        'Señalización frontal iluminada de alta visibilidad',
      ],
    },
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  iconName: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  tag: { en: string; es: string };
}

export const OFFICIAL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-screening',
    number: '01',
    iconName: 'UserCheck',
    title: {
      en: 'Tenant Screening & Placement',
      es: 'Evaluación y Colocación de Inquilinos',
    },
    description: {
      en: 'We thoroughly vet prospective tenants to ensure reliable, long-term occupancy and minimize risk.',
      es: 'Evaluamos rigurosamente a los futuros inquilinos para garantizar una ocupación confiable a largo plazo y minimizar riesgos.',
    },
    tag: { en: 'RISK MITIGATION', es: 'MITIGACIÓN DE RIESGO' },
  },
  {
    id: 'srv-lease',
    number: '02',
    iconName: 'FileSignature',
    title: {
      en: 'Lease Administration & Renewals',
      es: 'Administración y Renovación de Contratos',
    },
    description: {
      en: 'From drafting to execution and renewals, we manage lease terms to protect your interests and keep your property occupied.',
      es: 'Desde la redacción hasta la firma y renovaciones, gestionamos los términos contractuales para proteger sus intereses y mantener su propiedad ocupada.',
    },
    tag: { en: 'ASSET CONTINUITY', es: 'CONTINUIDAD DE ACTIVOS' },
  },
  {
    id: 'srv-rent',
    number: '03',
    iconName: 'BarChart3',
    title: {
      en: 'Rent Collection & Financial Reporting',
      es: 'Cobro de Rentas y Reportes Financieros',
    },
    description: {
      en: 'Timely rent collection, detailed monthly statements, and year-end reports provide full transparency and peace of mind.',
      es: 'Cobro puntual de rentas, estados de cuenta mensuales detallados e informes anuales que brindan total transparencia y tranquilidad.',
    },
    tag: { en: 'FINANCIAL CLARITY', es: 'TRANSPARENCIA FINANCIERA' },
  },
  {
    id: 'srv-maintenance',
    number: '04',
    iconName: 'Wrench',
    title: {
      en: 'Maintenance & Emergency Repairs',
      es: 'Mantenimiento y Reparaciones de Emergencia',
    },
    description: {
      en: 'We coordinate routine maintenance and respond swiftly to emergencies, using trusted and certified vendors to protect your property’s value.',
      es: 'Coordinamos el mantenimiento preventivo y respondemos con rapidez ante emergencias mediante contratistas certificados de confianza.',
    },
    tag: { en: '24/7 RESPONSE', es: 'RESPUESTA 24/7' },
  },
  {
    id: 'srv-construction',
    number: '05',
    iconName: 'HardHat',
    title: {
      en: 'Construction & Remodeling Management',
      es: 'Gestión de Construcción y Remodelación',
    },
    description: {
      en: 'From small upgrades to full-scale renovations, we oversee projects to ensure quality, budget control, and timely completion.',
      es: 'Desde mejoras puntuales hasta renovaciones integrales, supervisamos cada proyecto garantizando calidad, control presupuestario y entrega a tiempo.',
    },
    tag: { en: 'CAPITAL PROJECTS', es: 'PROYECTOS DE CAPITAL' },
  },
  {
    id: 'srv-inspections',
    number: '06',
    iconName: 'ShieldCheck',
    title: {
      en: 'Inspections & Legal Compliance',
      es: 'Inspecciones y Cumplimiento Legal',
    },
    description: {
      en: 'Regular property inspections and adherence to local laws help safeguard your assets and avoid costly violations.',
      es: 'Inspecciones periódicas y estricto cumplimiento de las normativas de Indiana para resguardar su patrimonio y evitar sanciones.',
    },
    tag: { en: 'REGULATORY SHIELD', es: 'CUMPLIMIENTO NORMATIVO' },
  },
  {
    id: 'srv-vendors',
    number: '07',
    iconName: 'Handshake',
    title: {
      en: 'Vendor & Contractor Coordination',
      es: 'Coordinación de Proveedores y Contratistas',
    },
    description: {
      en: 'We manage relationships and negotiate contracts with vendors to ensure reliable service at the best possible value.',
      es: 'Gestionamos relaciones y negociamos contratos con proveedores especializados para asegurar un servicio confiable al mejor valor.',
    },
    tag: { en: 'VERIFIED NETWORK', es: 'RED CERTIFICADA' },
  },
  {
    id: 'srv-commercial',
    number: '08',
    iconName: 'Building2',
    title: {
      en: 'Commercial Property Solutions',
      es: 'Soluciones para Propiedades Comerciales',
    },
    description: {
      en: 'Tailored services for commercial properties, including tenant targeting, lease strategy, and asset optimization.',
      es: 'Servicios especializados para inmuebles comerciales e industriales, incluyendo atracción de inquilinos corporativos y optimización de activos.',
    },
    tag: { en: 'PORTFOLIO GROWTH', es: 'OPTIMIZACIÓN COMERCIAL' },
  },
];

export interface InstagramReelItem {
  id: string;
  caption: { en: string; es: string };
  url: string;
  image: string;
  tag: { en: string; es: string };
}

export const INSTAGRAM_POSTS: InstagramReelItem[] = [
  {
    id: 'ig-1',
    caption: {
      en: 'YOUR NEXT BUSINESS LOCATION STARTS HERE! 🏢 Looking for strategic commercial space in Indianapolis?',
      es: '¡SU PRÓXIMA UBICACIÓN COMERCIAL COMIENZA AQUÍ! 🏢 ¿Busca un espacio estratégico en Indianápolis?',
    },
    url: 'https://www.instagram.com/reel/DfkLbeqkf-8/',
    image: '/properties/morris-aerial-1.jpg',
    tag: { en: 'REEL · COMMERCIAL', es: 'REEL · COMERCIAL' },
  },
  {
    id: 'ig-2',
    caption: {
      en: 'COMMERCIAL SPACE FOR LEASE — 5645 W 79th St. Looking for the perfect spot to grow your business in Indianapolis?',
      es: 'LOCAL COMERCIAL EN RENTA — 5645 W 79th St. ¿Busca el punto ideal para hacer crecer su empresa?',
    },
    url: 'https://www.instagram.com/reel/DerNUQzkrwR/',
    image: '/properties/79th-st-1.jpg',
    tag: { en: 'FOR LEASE · 2,600 SF', es: 'EN RENTA · 2,600 PIES²' },
  },
  {
    id: 'ig-3',
    caption: {
      en: 'PROPERTY MANAGEMENT IS MORE THAN COLLECTING RENT. Proactive maintenance, financial clarity & asset protection.',
      es: 'ADMINISTRACIÓN ES MÁS QUE COBRAR LA RENTA. Mantenimiento proactivo, claridad contable y protección del activo.',
    },
    url: 'https://www.instagram.com/p/DfFLABGjA3l/',
    image: '/properties/bldg1-front.jpg',
    tag: { en: 'FULL-SERVICE HPM', es: 'SERVICIO INTEGRAL HPM' },
  },
  {
    id: 'ig-4',
    caption: {
      en: 'LOCAL KNOWLEDGE. PROFESSIONAL MANAGEMENT. Serving Indianapolis commercial & residential owners since 2018.',
      es: 'CONOCIMIENTO LOCAL. GESTIÓN PROFESIONAL. Sirviendo a propietarios en Indianápolis desde 2018.',
    },
    url: 'https://www.instagram.com/p/DfABY-rCZgA/',
    image: '/properties/morris-aerial-2.jpg',
    tag: { en: 'INDIANAPOLIS · SINCE 2018', es: 'INDIANÁPOLIS · DESDE 2018' },
  },
  {
    id: 'ig-5',
    caption: {
      en: '38TH ST. IS OFF THE MARKET! 🔑 Another space successfully leased and managed by HYCO Property Management.',
      es: '¡38TH ST. ARRENDADO! 🔑 Otro espacio comercial rentado con éxito por HYCO Property Management.',
    },
    url: 'https://www.instagram.com/reel/DeejIkyjeIE/',
    image: '/properties/38th-st-1.jpg',
    tag: { en: 'LEASED · 38TH ST', es: 'ARRENDADO · 38TH ST' },
  },
  {
    id: 'ig-6',
    caption: {
      en: 'READY FOR YOUR NEXT BUSINESS MOVE? Office, industrial bay, or flex space — we connect businesses with growth.',
      es: '¿LISTO PARA SU PRÓXIMO MOVIMIENTO COMERCIAL? Oficinas, naves industriales o flex spaces listos.',
    },
    url: 'https://www.instagram.com/p/De1gfcUjSXs/',
    image: '/properties/bldg2-shop.jpg',
    tag: { en: 'INDUSTRIAL & FLEX', es: 'INDUSTRIAL Y FLEX' },
  },
];

export const CLIENT_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Sally Watson',
    role: { en: 'Commercial Property Owner · Indianapolis', es: 'Propietaria Comercial · Indianápolis' },
    quote: {
      en: 'Since partnering with HYCO Property Management, our commercial units have maintained consistent occupancy with zero operational stress. Their monthly financial reporting and proactive maintenance vendor network treat our buildings like their own.',
      es: 'Desde que nos asociamos con HYCO Property Management, nuestras unidades comerciales han mantenido una ocupación constante sin estrés operativo. Sus reportes financieros mensuales y su red de mantenimiento cuidan nuestros edificios como propios.',
    },
  },
  {
    id: 't-2',
    name: 'John Wilson',
    role: { en: 'Industrial Fleet Operations Director', es: 'Director de Operaciones de Flota Industrial' },
    quote: {
      en: 'Leasing our industrial service facility on W. Morris St through HPM was seamless. Having clear I-70 access, tall overhead doors, and a responsive bilingual management team made expanding our fleet operations effortless.',
      es: 'Arrendar nuestra nave industrial en W. Morris St con HPM fue impecable. Contar con acceso directo a la I-70, portones de gran altura y un equipo de administración bilingüe y atento facilitó toda nuestra expansión.',
    },
  },
  {
    id: 't-3',
    name: 'Sara Provaska',
    role: { en: 'Real Estate Investor & Portfolio Client', es: 'Inversionista Inmobiliaria y Cliente de Portafolio' },
    quote: {
      en: 'What sets HYCO apart in Indianapolis is their hands-on attention to detail—from tenant screening and legal compliance to overseeing full remodeling projects on time and on budget.',
      es: 'Lo que distingue a HYCO en Indianápolis es su atención directa al detalle: desde la selección rigurosa de inquilinos y el cumplimiento legal hasta la supervisión de remodelaciones completas en tiempo y presupuesto.',
    },
  },
];
