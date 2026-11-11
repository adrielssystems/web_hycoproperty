export interface LegalSection {
  id: string;
  title: { en: string; es: string };
  paragraphs: { en: string; es: string }[];
  bulletPoints?: { en: string; es: string }[];
}

export interface LegalDocument {
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  lastUpdated: { en: string; es: string };
  effectiveDate: { en: string; es: string };
  jurisdiction: { en: string; es: string };
  sections: LegalSection[];
}

export const TERMS_OF_SERVICE: LegalDocument = {
  title: {
    en: 'Terms of Service & Lease Inquiry Disclaimer',
    es: 'Términos de Servicio y Aviso Legal de Arrendamiento',
  },
  subtitle: {
    en: 'Governed by the Laws of the State of Indiana and Marion County (Indianapolis, IN 46268)',
    es: 'Regido por las Leyes del Estado de Indiana y el Condado de Marion (Indianápolis, IN 46268)',
  },
  lastUpdated: { en: 'November 2026', es: 'Noviembre de 2026' },
  effectiveDate: { en: 'January 1, 2018', es: '1 de Enero de 2018' },
  jurisdiction: {
    en: 'City of Indianapolis, Marion County, State of Indiana, United States',
    es: 'Ciudad de Indianápolis, Condado de Marion, Estado de Indiana, Estados Unidos',
  },
  sections: [
    {
      id: 'acceptance',
      title: {
        en: '1. Acceptance of Terms & Corporate Entity',
        es: '1. Aceptación de los Términos y Entidad Corporativa',
      },
      paragraphs: [
        {
          en: 'These Terms of Service ("Terms") constitute a legally binding agreement between you and HYCO Property Management ("HYCO", "we", "us", or "our"), headquartered at 7898 Zionsville Road, Indianapolis, IN 46268. By accessing or using our website, browsing properties, submitting inquiries, or requesting site showings, you agree to comply with and be bound by these Terms.',
          es: 'Estos Términos de Servicio ("Términos") constituyen un acuerdo legalmente vinculante entre usted y HYCO Property Management ("HYCO", "nosotros" o "nuestro"), con sede en 7898 Zionsville Road, Indianápolis, IN 46268. Al acceder o utilizar nuestro sitio web, consultar propiedades, enviar solicitudes o programar visitas, usted acepta cumplir y quedar sujeto a estos Términos.',
        },
        {
          en: 'If you do not agree to these Terms, you must discontinue the use of this website immediately. All commercial, industrial, and residential real estate services provided by HYCO are subject to Indiana law and Marion County local ordinances.',
          es: 'Si no está de acuerdo con estos Términos, debe suspender el uso de este sitio web de inmediato. Todos los servicios inmobiliarios comerciales, industriales y residenciales provistos por HYCO están sujetos a las leyes de Indiana y las ordenanzas locales del Condado de Marion.',
        },
      ],
    },
    {
      id: 'equal-housing',
      title: {
        en: '2. Equal Housing Opportunity & Fair Housing Compliance',
        es: '2. Igualdad de Oportunidad de Vivienda y Cumplimiento de Vivienda Justa',
      },
      paragraphs: [
        {
          en: 'HYCO Property Management strictly conducts business in full compliance with the Federal Fair Housing Act (Title VIII of the Civil Rights Act of 1968, as amended, 42 U.S.C. §§ 3601-3619) and the Indiana Fair Housing Act (Indiana Code Title 22, Article 9.5).',
          es: 'HYCO Property Management opera en estricto cumplimiento de la Ley Federal de Vivienda Justa (Título VIII de la Ley de Derechos Civiles de 1968, 42 U.S.C. §§ 3601-3619) y la Ley de Vivienda Justa de Indiana (Código de Indiana Título 22, Artículo 9.5).',
        },
        {
          en: 'We do not discriminate against any applicant, tenant, broker, or person based on race, color, religion, sex, sexual orientation, disability, familial status, national origin, or any other protected class under federal, state, or municipal law in Indianapolis/Marion County.',
          es: 'No discriminamos a ningún solicitante, inquilino, corredor o persona por motivos de raza, color, religión, sexo, orientación sexual, discapacidad, estado familiar, origen nacional o cualquier otra clase protegida bajo leyes federales, estatales o municipales de Indianápolis/Condado de Marion.',
        },
      ],
    },
    {
      id: 'listings-disclaimer',
      title: {
        en: '3. Commercial & Industrial Listings Disclaimer (Non-Binding)',
        es: '3. Aviso Legal de Inmuebles Comerciales e Industriales (Carácter Informativo)',
      },
      paragraphs: [
        {
          en: 'All information provided on this website regarding commercial spaces, industrial service buildings, warehouses, ceiling heights, loading docks, electrical capacities, and rental rates (including properties located at 7898 Zionsville Rd, W. Morris St, W. 79th St, and E. 38th St) is deemed reliable but is not guaranteed and is subject to prior lease, withdrawal, error, or change without notice.',
          es: 'Toda la información provista en este sitio web sobre locales comerciales, naves industriales, talleres, alturas libres de techo, muelles de carga, capacidad eléctrica y tarifas de arrendamiento (incluyendo inmuebles en 7898 Zionsville Rd, W. Morris St, W. 79th St y E. 38th St) se considera confiable pero no está garantizada y está sujeta a arrendamiento previo, retiro, error o cambio sin previo aviso.',
        },
        {
          en: 'Nothing on this website constitutes a formal offer to lease or a legally binding contract. A binding tenancy or commercial lease is established solely upon the mutual execution of a formal Indiana Commercial Real Estate Lease Agreement and payment of all required deposits.',
          es: 'Ningún contenido en este sitio constituye una oferta formal de arrendamiento ni un contrato legalmente vinculante. Un arrendamiento vinculante se establece exclusivamente mediante la firma mutua de un Contrato Formal de Arrendamiento Comercial de Indiana y el pago de los depósitos requeridos.',
        },
      ],
      bulletPoints: [
        {
          en: 'Square footage figures are approximate and based on architectural calculations or historical measurements.',
          es: 'Las cifras de pies cuadrados (Sq Ft) son aproximadas y se basan en cálculos arquitectónicos o mediciones históricas.',
        },
        {
          en: 'Prospective commercial and industrial tenants are encouraged to conduct independent engineering and zoning inspections.',
          es: 'Se exhorta a los posibles inquilinos comerciales e industriales a realizar inspecciones independientes de ingeniería y zonificación.',
        },
        {
          en: 'Gross leases, modified gross leases, and triple net (NNN) terms are detailed in property-specific formal lease proposals.',
          es: 'Las condiciones de arrendamiento bruto (Gross Lease), bruto modificado y NNN se detallan en las propuestas formales específicas de cada inmueble.',
        },
      ],
    },
    {
      id: 'indiana-governing-law',
      title: {
        en: '4. Governing Law & Jurisdiction (Marion County, Indiana)',
        es: '4. Ley Aplicable y Jurisdicción (Condado de Marion, Indiana)',
      },
      paragraphs: [
        {
          en: 'These Terms and any dispute, controversy, or claim arising out of or related to your use of this website or communications with HYCO shall be governed by, construed, and enforced in accordance with the laws of the State of Indiana (specifically including Indiana Code Title 32, Article 31: Landlord-Tenant Relations), without regard to its conflict of law principles.',
          es: 'Estos Términos y cualquier disputa, controversia o reclamo que surja de o esté relacionado con el uso de este sitio web o las comunicaciones con HYCO se regirán, interpretarán y aplicarán de conformidad con las leyes del Estado de Indiana (incluyendo expresamente el Código de Indiana Título 32, Artículo 31: Relaciones Propietario-Inquilino), sin consideración a principios de conflicto de leyes.',
        },
        {
          en: 'You irrevocably consent and submit to the exclusive personal jurisdiction and venue of the Marion County Superior Court or the Circuit Court of Marion County, Indianapolis, Indiana, or the United States District Court for the Southern District of Indiana (Indianapolis Division).',
          es: 'Usted acepta y se somete irrevocablemente a la jurisdicción personal y sede exclusiva del Tribunal Superior del Condado de Marion o el Tribunal de Circuito del Condado de Marion, Indianápolis, Indiana, o el Tribunal de Distrito de los EE. UU. para el Distrito Sur de Indiana (División Indianápolis).',
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: {
        en: '5. Intellectual Property & Brand Assets',
        es: '5. Propiedad Intelectual y Activos de Marca',
      },
      paragraphs: [
        {
          en: 'All content on this website, including but not limited to the HYCO Property Management logo, architectural photographs, aerial drone photography, floor plan layouts, editorial copywriting, and HUD UI elements, is the proprietary property of HYCO Property Management and is protected by United States and international copyright, trademark, and intellectual property laws.',
          es: 'Todo el contenido de este sitio web, incluyendo sin limitación el logo de HYCO Property Management, fotografías arquitectónicas, tomas con dron aéreo, planos de distribución, redacción editorial y elementos visuales HUD, es propiedad exclusiva de HYCO Property Management y está protegido por las leyes de propiedad intelectual de los Estados Unidos e internacionales.',
        },
      ],
    },
    {
      id: 'contact-desk',
      title: {
        en: '6. Official Inquiries & Headquarter Notice',
        es: '6. Consultas Oficiales y Notificaciones a la Sede',
      },
      paragraphs: [
        {
          en: 'Formal notices and questions regarding these Terms of Service should be directed to: HYCO Property Management, Legal Department, 7898 Zionsville Rd, Indianapolis, IN 46268, United States. Telephone: +1 (317) 675-0041. Email: info@hycoprop.com.',
          es: 'Las notificaciones formales y consultas sobre estos Términos de Servicio deben dirigirse a: HYCO Property Management, Departamento Legal, 7898 Zionsville Rd, Indianápolis, IN 46268, Estados Unidos. Teléfono: +1 (317) 675-0041. Correo electrónico: info@hycoprop.com.',
        },
      ],
    },
  ],
};

export const PRIVACY_POLICY: LegalDocument = {
  title: {
    en: 'Privacy Policy & Data Protection Practices',
    es: 'Política de Privacidad y Prácticas de Protección de Datos',
  },
  subtitle: {
    en: 'Compliant with Indiana Code § 24-4.9, FTC Fair Information Standards, TCPA, and CAN-SPAM',
    es: 'En cumplimiento con el Código de Indiana § 24-4.9, Estándares FTC, Ley TCPA y CAN-SPAM',
  },
  lastUpdated: { en: 'November 2026', es: 'Noviembre de 2026' },
  effectiveDate: { en: 'January 1, 2018', es: '1 de Enero de 2018' },
  jurisdiction: {
    en: 'State of Indiana & Federal Laws of the United States',
    es: 'Estado de Indiana y Leyes Federales de los Estados Unidos',
  },
  sections: [
    {
      id: 'privacy-commitment',
      title: {
        en: '1. Our Privacy Commitment & Scope',
        es: '1. Compromiso y Alcance de Nuestra Política',
      },
      paragraphs: [
        {
          en: 'HYCO Property Management ("HYCO", "we", "our") values the trust of prospective tenants, current commercial occupants, property owners, and real estate brokers. This Privacy Policy details how we collect, handle, safeguard, and dispose of personal and corporate information when you use our website or contact our Indianapolis office.',
          es: 'HYCO Property Management ("HYCO", "nosotros", "nuestro") valora la confianza de prospectos, ocupantes comerciales actuales, propietarios y corredores inmobiliarios. Esta Política de Privacidad detalla cómo recopilamos, tratamos, protegemos y desechamos información personal y corporativa cuando utiliza nuestro sitio web o contacta a nuestra oficina en Indianápolis.',
        },
        {
          en: 'We conduct all data practices in accordance with the Indiana Disclosure of Security Breach Act (Indiana Code § 24-4.9), the Indiana Customer Records Disposal Statute (IC § 24-4-14), and Federal Trade Commission (FTC) Fair Information Practice Principles.',
          es: 'Realizamos todas nuestras prácticas de datos de conformidad con la Ley de Divulgación de Brechas de Seguridad de Indiana (Código de Indiana § 24-4.9), la Ley de Disposición de Registros de Clientes de Indiana (IC § 24-4-14) y los Principios de Prácticas Justas de Información de la Comisión Federal de Comercio (FTC).',
        },
      ],
    },
    {
      id: 'information-collected',
      title: {
        en: '2. Information We Collect',
        es: '2. Información que Recopilamos',
      },
      paragraphs: [
        {
          en: 'We only collect personal information that you voluntarily provide to us when requesting lease information, scheduling a tour, or submitting a service request, including:',
          es: 'Solo recopilamos información personal que usted nos proporciona voluntariamente al solicitar informes de arrendamiento, agendar una visita o enviar una solicitud de servicio, incluyendo:',
        },
      ],
      bulletPoints: [
        {
          en: 'Contact identifiers: Full name, business email address, company or trade name, direct telephone number.',
          es: 'Datos de contacto: Nombre completo, correo electrónico corporativo, razón social o nombre comercial, teléfono directo.',
        },
        {
          en: 'Commercial interest specifications: Preferred property location (Zionsville Rd, W. Morris St, 79th St, 38th St), requested square footage, target occupancy date, and intended commercial use.',
          es: 'Especificaciones de interés comercial: Ubicación preferida (Zionsville Rd, W. Morris St, 79th St, 38th St), metraje requerido, fecha estimada de ocupación y uso previsto.',
        },
        {
          en: 'Technical telemetry: Internet Protocol (IP) address, browser type, device category, and language preferences (EN/ES) used to optimize the user experience.',
          es: 'Telemetría técnica: Dirección IP, tipo de navegador, categoría de dispositivo y preferencia de idioma (EN/ES) utilizada para optimizar la experiencia.',
        },
      ],
    },
    {
      id: 'no-sale',
      title: {
        en: '3. Absolute Non-Sale of Personal Information',
        es: '3. Prohibición Absoluta de Venta de Datos Personales',
      },
      paragraphs: [
        {
          en: 'HYCO Property Management has NEVER sold, rented, leased, monetized, or shared personal or business information with third-party data brokers, advertising aggregators, or marketing networks, and will NEVER do so under any circumstance.',
          es: 'HYCO Property Management NUNCA ha vendido, rentado, monetizado ni compartido información personal o empresarial con corredores de datos terceros, agregadores publicitarios o redes de mercadeo, y NUNCA lo hará bajo ninguna circunstancia.',
        },
        {
          en: 'Your information is used strictly and exclusively by HYCO personnel and our vetted, licensed Indiana property management contractors (e.g. maintenance technicians dispatched for repairs) to fulfill your real estate requests.',
          es: 'Su información es utilizada estricta y exclusivamente por el personal de HYCO y nuestros contratistas autorizados de mantenimiento en Indiana (ej. técnicos asignados para reparaciones) para atender sus solicitudes inmobiliarias.',
        },
      ],
    },
    {
      id: 'communications-tcpa',
      title: {
        en: '4. Telephone, SMS & Email Consent (TCPA & CAN-SPAM Compliance)',
        es: '4. Consentimiento para Llamadas, SMS y Correo (Cumplimiento TCPA y CAN-SPAM)',
      },
      paragraphs: [
        {
          en: 'By providing your telephone number or submitting a showing request on this website, you grant express consent under the Telephone Consumer Protection Act (TCPA, 47 U.S.C. § 227) for HYCO Property Management to contact you via telephone call, WhatsApp, or SMS regarding your inquiry.',
          es: 'Al proporcionar su número de teléfono o enviar una solicitud en este sitio web, usted otorga consentimiento expreso bajo la Ley de Protección al Consumidor Telefónico (TCPA, 47 U.S.C. § 227) para que HYCO Property Management se comunique con usted por llamada, WhatsApp o SMS respecto a su consulta.',
        },
        {
          en: 'In accordance with the CAN-SPAM Act (15 U.S.C. §§ 7701-7713), all email communications from HYCO clearly identify our corporate identity, physical headquarters at 7898 Zionsville Rd, Indianapolis, IN 46268, and provide a direct unsubscribe or reply-to option.',
          es: 'De conformidad con la Ley CAN-SPAM (15 U.S.C. §§ 7701-7713), todas las comunicaciones por correo de HYCO identifican claramente nuestra identidad corporativa, sede física en 7898 Zionsville Rd, Indianápolis, IN 46268, e incluyen una opción directa para cancelar suscripción o responder.',
        },
      ],
    },
    {
      id: 'retention-disposal',
      title: {
        en: '5. Data Retention & Secure Disposal (Indiana Code § 24-4-14)',
        es: '5. Retención de Datos y Disposición Segura (Código de Indiana § 24-4-14)',
      },
      paragraphs: [
        {
          en: 'We retain customer and applicant records only as long as reasonably necessary to fulfill legitimate property management services, comply with Indiana legal retention mandates for commercial lease files, and resolve disputes.',
          es: 'Conservamos los registros de clientes y solicitantes únicamente durante el tiempo razonablemente necesario para prestar servicios de administración, cumplir con mandatos legales de retención en Indiana para expedientes de arrendamiento y resolver controversias.',
        },
        {
          en: 'When records are no longer required, HYCO disposes of customer records by shredding, erasing, or otherwise modifying personal information in compliance with Indiana Code § 24-4-14 to render it entirely unreadable and unrecoverable.',
          es: 'Cuando los registros ya no son requeridos, HYCO dispone de ellos triturando, borrando o modificando la información personal de conformidad con el Código de Indiana § 24-4-14 para volverla totalmente ilegible e irrecuperable.',
        },
      ],
    },
  ],
};

export const SECURITY_POLICY: LegalDocument = {
  title: {
    en: 'Information Security & Infrastructure Standards',
    es: 'Seguridad de la Información y Estándares de Infraestructura',
  },
  subtitle: {
    en: 'Technical and Organizational Safeguards Aligned with OWASP and Indiana Code § 24-4.9',
    es: 'Medidas Técnicas y Organizacionales Alineadas con OWASP y el Código de Indiana § 24-4.9',
  },
  lastUpdated: { en: 'November 2026', es: 'Noviembre de 2026' },
  effectiveDate: { en: 'January 1, 2018', es: '1 de Enero de 2018' },
  jurisdiction: {
    en: 'State of Indiana & Federal Cybersecurity Guidelines',
    es: 'Estado de Indiana y Directrices Federales de Ciberseguridad',
  },
  sections: [
    {
      id: 'security-posture',
      title: {
        en: '1. Corporate Security Posture & Architecture',
        es: '1. Postura Corporativa de Seguridad y Arquitectura',
      },
      paragraphs: [
        {
          en: 'HYCO Property Management implements defense-in-depth security architectures designed to safeguard tenant records, property operational databases, and website interactions against unauthorized access, destruction, disclosure, or modification.',
          es: 'HYCO Property Management implementa arquitecturas de seguridad de defensa en profundidad diseñadas para proteger los registros de inquilinos, bases de datos operativas e interacciones del sitio web contra acceso, destrucción, divulgación o modificación no autorizada.',
        },
      ],
    },
    {
      id: 'technical-safeguards',
      title: {
        en: '2. Technical Security Safeguards',
        es: '2. Salvaguardas Técnicas de Seguridad',
      },
      paragraphs: [
        {
          en: 'Our digital infrastructure enforces the following technical standards across all endpoints and web portals:',
          es: 'Nuestra infraestructura digital aplica los siguientes estándares técnicos en todos los puntos de conexión y portales web:',
        },
      ],
      bulletPoints: [
        {
          en: 'Transport Layer Security (TLS 1.3): All web traffic and API interactions are strictly encrypted using modern cryptographic cipher suites with HTTP Strict Transport Security (HSTS).',
          es: 'Cifrado en Tránsito (TLS 1.3): Todo el tráfico web y llamadas a API se cifran estrictamente mediante suites criptográficas modernas con HSTS forzado.',
        },
        {
          en: 'OWASP Top 10 Mitigation: Automated defenses against SQL Injection (parameterized SQL queries via node-postgres pool), Cross-Site Scripting (XSS prevention via strict Content Security Policy headers), and Cross-Site Request Forgery (CSRF).',
          es: 'Mitigación OWASP Top 10: Defensas automatizadas contra inyección SQL (consultas parametrizadas en pool node-postgres), XSS (cabeceras CSP estrictas) y falsificación de peticiones en sitios cruzados (CSRF).',
        },
        {
          en: 'Enterprise Rate Limiting: High-frequency request throttling (120 requests/minute for general traffic, 20 requests/minute for forms) to mitigate brute-force and Denial-of-Service (DoS) abuse.',
          es: 'Limitación de Tasa Empresarial: Regulación de peticiones (120 req/min para tráfico general, 20 req/min para formularios) para prevenir ataques de fuerza bruta y denegación de servicio (DoS).',
        },
        {
          en: 'Scrypt Password Hashing: Administrative credentials are protected using salted scrypt cryptographic hashes with constant-time comparison against timing attacks.',
          es: 'Criptografía Scrypt: Las credenciales administrativas están protegidas mediante hashes criptográficos scrypt con sal única y comparación en tiempo constante.',
        },
      ],
    },
    {
      id: 'incident-response',
      title: {
        en: '3. Incident Response & Indiana Security Breach Compliance',
        es: '3. Respuesta a Incidentes y Notificación de Brechas (Indiana Code § 24-4.9)',
      },
      paragraphs: [
        {
          en: 'Under Indiana Code § 24-4.9 (Disclosure of Security Breach), HYCO maintains an active incident response protocol. In the unlikely event of an unauthorized access to unencrypted personal data, HYCO will notify affected Indiana residents and the Office of the Indiana Attorney General without unreasonable delay, in full accordance with statutory timeframes.',
          es: 'Bajo el Código de Indiana § 24-4.9 (Divulgación de Brechas de Seguridad), HYCO mantiene un protocolo activo de respuesta a incidentes. En el evento imprevisto de un acceso no autorizado a datos personales no cifrados, HYCO notificará a los residentes de Indiana afectados y a la Fiscalía General del Estado de Indiana sin demoras indebidas, cumpliendo los plazos legales aplicables.',
        },
      ],
    },
    {
      id: 'vulnerability-reporting',
      title: {
        en: '4. Vulnerability Disclosure & Security Inquiries',
        es: '4. Divulgación de Vulnerabilidades y Contacto de Seguridad',
      },
      paragraphs: [
        {
          en: 'If you believe you have identified a potential security vulnerability or have questions regarding our security controls, please contact our security team directly at info@hycoprop.com with the subject line "SECURITY NOTICE". We investigate all reports promptly.',
          es: 'Si considera haber identificado una vulnerabilidad de seguridad o tiene preguntas sobre nuestros controles, comuníquese con nuestro equipo a info@hycoprop.com con el asunto "AVISO DE SEGURIDAD". Investigamos todos los reportes con prontitud.',
        },
      ],
    },
  ],
};

export const COOKIE_POLICY: LegalDocument = {
  title: {
    en: 'Cookie Policy & Local Preference Management',
    es: 'Política de Cookies y Gestión de Preferencias',
  },
  subtitle: {
    en: 'Transparent Technical Tracking Guidelines in Compliance with US FTC Standards',
    es: 'Directrices Transparentes de Rastreo Técnico en Cumplimiento con Estándares FTC de EE. UU.',
  },
  lastUpdated: { en: 'November 2026', es: 'Noviembre de 2026' },
  effectiveDate: { en: 'January 1, 2018', es: '1 de Enero de 2018' },
  jurisdiction: {
    en: 'United States FTC Guidelines & State of Indiana',
    es: 'Directrices FTC de Estados Unidos y Estado de Indiana',
  },
  sections: [
    {
      id: 'cookie-what',
      title: {
        en: '1. What Are Cookies and Local Storage Technologies?',
        es: '1. ¿Qué Son las Cookies y Tecnologías de Almacenamiento Local?',
      },
      paragraphs: [
        {
          en: 'Cookies and local storage (such as browser localStorage) are small text and data files placed on your computer or mobile device when you browse websites. They are widely used to make websites work efficiently, remember your language choices, and ensure secure sessions.',
          es: 'Las cookies y el almacenamiento local (como localStorage del navegador) son pequeños archivos de texto y datos colocados en su computadora o dispositivo móvil al navegar. Se utilizan ampliamente para que los sitios funcionen eficientemente, recuerden sus preferencias de idioma y garanticen sesiones seguras.',
        },
      ],
    },
    {
      id: 'cookie-categories',
      title: {
        en: '2. Categories of Cookies Used by HYCO',
        es: '2. Categorías de Cookies Utilizadas por HYCO',
      },
      paragraphs: [
        {
          en: 'HYCO Property Management adheres to executive minimalism and does NOT utilize invasive third-party tracking or behavioral advertising cookies. We categorize our storage mechanisms into:',
          es: 'HYCO Property Management aplica un criterio de minimalismo ejecutivo y NO utiliza cookies invasivas de seguimiento publicitario ni redes conductuales. Clasificamos nuestros mecanismos de almacenamiento en:',
        },
      ],
      bulletPoints: [
        {
          en: 'Strictly Necessary & Functional Storage (Essential): Required for website security, session persistence, CSRF protection, and remembering your bilingual choice (e.g. `hyco_web_lang` for English/Spanish). These cannot be disabled.',
          es: 'Almacenamiento Estrictamente Necesario y Funcional (Esencial): Requerido para la seguridad del sitio, persistencia de sesión, protección CSRF y retención de su idioma preferido (ej. `hyco_web_lang` para Inglés/Español). No pueden desactivarse.',
        },
        {
          en: 'Performance & Architecture Telemetry (Optional): Aggregated, anonymous metrics that help us evaluate which property layouts (e.g. Morris St Campus vs Zionsville Rd) prospective tenants inspect most frequently.',
          es: 'Telemetría de Rendimiento y Arquitectura (Opcional): Métricas agregadas y anónimas que nos ayudan a evaluar qué naves y fichas técnicas inspeccionan con mayor frecuencia los interesados.',
        },
      ],
    },
    {
      id: 'cookie-control',
      title: {
        en: '3. Managing Your Cookie & Storage Preferences',
        es: '3. Gestión de Sus Preferencias de Cookies y Almacenamiento',
      },
      paragraphs: [
        {
          en: 'You can manage your consent preferences at any time through our interactive Cookie Consent banner located at the bottom of the page, or by clicking "Cookie Settings" in our website footer. You may also configure your web browser to reject or clear all cookies.',
          es: 'Usted puede gestionar sus preferencias de consentimiento en cualquier momento a través de nuestro banner interactivo ubicado en la parte inferior, o haciendo clic en "Preferencias de Cookies" en el pie de página. También puede configurar su navegador web para rechazar o eliminar cookies.',
        },
      ],
    },
  ],
};

