// -- Comentarios Bilingües: Bilingual Comments --

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. TRANSLATIONS DICTIONARY / DICCIONARIO DE TRADUCCIONES
    // ==========================================
    const translations = {
        // --- Navigation ---
        "nav-home": { es: "Inicio", en: "Home" },
        "nav-about": { es: "Acerca de", en: "About" },
        "nav-exp": { es: "Experiencias", en: "Experience" },
        "nav-edu": { es: "Educación", en: "Education" },
        "nav-skills": { es: "Habilidades", en: "Skills" },
        "nav-proj": { es: "Proyectos", en: "Projects" },
        "nav-contact": { es: "Contacto", en: "Contact" },

        // --- Hero Section ---
        "hero-intro": { es: "¡Hola, soy Nahuel Gonzalez!", en: "Hi, I'm Nahuel Gonzalez!" },
        "hero-title": { 
            es: "Construyendo soluciones en la <span class='highlight'>intersección de la Tecnología y el Análisis.</span>", 
            en: "Building solutions at the <span class='highlight'>intersection of Technology and Analysis.</span>" 
        },
        "hero-descriptor": { es: "Desarrollo | Tecnología | Análisis | Diseño UX/UI", en: "Development | Technology | Analysis | UX/UI Design" },
        "cta-contact": { es: "Contáctame", en: "Contact Me" },
        "cta-cv": { es: "Descargar CV <i class='fas fa-download'></i>", en: "Download CV <i class='fas fa-download'></i>" },

        // --- About Section (Nota: Usamos <strong> en lugar de asteriscos) ---
        "about-title": { es: "Acerca de Mí", en: "About Me" },
        "about-p1": { 
            es: "Soy un profesional impulsado por la <strong>tecnología, el análisis de procesos y la búsqueda de la excelencia</strong> en el servicio. Mi trayectoria combina años de experiencia en roles altamente regulados, donde la precisión, el cumplimiento normativo y la atención al cliente corporativo fueron pilares, con una formación intensiva en desarrollo de software y diseño UX/UI.", 
            en: "I am a professional driven by <strong>technology, process analysis, and the pursuit of service excellence</strong>. My background combines years of experience in highly regulated roles—where precision, compliance, and corporate client service were pillars—with intensive training in software development and UX/UI design." 
        },
        "about-p2": { 
            es: "Valoro la <strong>responsabilidad</strong> y la <strong>mejora continua</strong> como motores para el crecimiento personal y profesional, siempre buscando cómo la tecnología puede <strong>optimizar procesos</strong> y generar experiencias de usuario más intuitivas. Creo firmemente en el <strong>trabajo en equipo</strong> colaborativo como clave para resolver problemas complejos.", 
            en: "I value <strong>responsibility</strong> and <strong>continuous improvement</strong> as engines for personal and professional growth, always seeking how technology can <strong>optimize processes</strong> and generate more intuitive user experiences. I firmly believe in collaborative <strong>teamwork</strong> as the key to solving complex problems." 
        },
        "about-p3": { 
            es: "Fuera del ámbito profesional, encuentro equilibrio en la <strong>tranquilidad</strong>, disfrutando de una <strong>buena comida</strong>, y manteniendo mi mente activa con la <strong>tecnología</strong> en general y los <strong>videojuegos</strong>. Esta curiosidad innata por cómo funcionan las cosas me impulsa a seguir aprendiendo y aplicando soluciones innovadoras en cada proyecto.", 
            en: "Outside the professional sphere, I find balance in <strong>tranquility</strong>, enjoying <strong>good food</strong>, and keeping my mind active with <strong>technology</strong> in general and <strong>video games</strong>. This innate curiosity about how things work drives me to keep learning and applying innovative solutions in every project." 
        },

        // --- Experience Section ---
        "exp-title": { es: "Experiencia Laboral", en: "Work Experience" },
        
        "exp-desc-pwc": {
            es: "Brindé soporte a clientes de Estados Unidos en temas fiscales relacionados con el Formulario K1, gestionando cuentas, verificando datos y resolviendo consultas con altos estándares de precisión y cumplimiento normativo. Mantener la calidad en CRM fue clave para cumplir métricas y garantizar una experiencia consistente. Durante mi gestión logré reducir los tiempos promedio de respuesta en torno al 20%, manteniendo simultáneamente un índice de satisfacción del 95%. Este rol reforzó mis habilidades analíticas, de comunicación y de adaptación en un entorno híbrido y altamente dinámico.",
            en: "Provided support to US clients on tax issues related to Form K1, managing accounts, verifying data, and resolving queries with high standards of accuracy and compliance. Maintaining quality in CRM was key to meeting metrics and ensuring a consistent experience. During my tenure, I managed to reduce average response times by around 20%, simultaneously maintaining a 95% satisfaction rate. This role reinforced my analytical, communication, and adaptability skills in a hybrid and highly dynamic environment."
        },
        "exp-desc-sancor": {
            es: "Gestión integral en la evaluación y tramitación de siniestros, coordinando con peritos e investigadores y aplicando criterios técnicos y legales para la resolución efectiva de reclamos. Supervisé pagos a proveedores, control de facturación y optimización de procesos financieros. Lideré iniciativas de digitalización y gestión documental, asegurando el cumplimiento de políticas contables y la organización eficiente de archivos e inventarios.",
            en: "Comprehensive management in the evaluation and processing of claims, coordinating with adjusters and investigators and applying technical and legal criteria for effective claim resolution. Supervised payments to suppliers, billing control, and financial process optimization. Led digitization and document management initiatives, ensuring compliance with accounting policies and efficient organization of files and inventories."
        },
        "exp-desc-escribania": {
            es: "Gestioné documentación legal, redacté certificaciones y aseguré el cumplimiento de normativas bancarias y regulatorias. El rol requirió un alto nivel de precisión, confidencialidad y responsabilidad, garantizando la correcta tramitación de procesos legales.",
            en: "Managed legal documentation, drafted certifications, and ensured compliance with banking and regulatory standards. The role required a high level of precision, confidentiality, and responsibility, guaranteeing the correct processing of legal procedures."
        },
        "exp-desc-al": {
            es: "Brindé apoyo legal-administrativo en expedientes judiciales, organicé documentación jurídica y colaboré con equipos legales en la tramitación de procesos. La atención al detalle y el manejo de normativa regulatoria fueron esenciales en mi trabajo diario.",
            en: "Provided legal-administrative support in court files, organized legal documentation, and collaborated with legal teams in processing cases. Attention to detail and handling of regulatory standards were essential in my daily work."
        },

        // --- Education Section ---
        "edu-title": { es: "Educación y Certificaciones", en: "Education & Certifications" },
        "edu-subtitle": { es: "Educación Formal", en: "Formal Education" },
        "cert-subtitle": { es: "Certificaciones", en: "Certifications" },

        "edu-desc-dh": {
            es: "Formación intensiva en desarrollo de software orientada a programación, bases de datos, arquitectura web, UX/UI y metodologías ágiles. El programa se centró en la creación de soluciones digitales modernas con enfoque en escalabilidad, diseño y resolución de problemas complejos.",
            en: "Intensive training in software development oriented towards programming, databases, web architecture, UX/UI, and agile methodologies. The program focused on creating modern digital solutions with a focus on scalability, design, and complex problem-solving."
        },
        "edu-desc-coder": {
            es: "Especialización práctica en diseño y construcción de sitios web modernos con HTML, CSS y JavaScript. Enfoque en usabilidad, experiencia de usuario y diseño responsivo.",
            en: "Practical specialization in the design and construction of modern websites with HTML, CSS, and JavaScript. Focus on usability, user experience, and responsive design."
        },
        "edu-desc-uade": {
            es: "Estudios en diseño gráfico, comunicación visual, creatividad aplicada y producción audiovisual. Formación estética, conceptual y técnica dentro de entornos digitales.",
            en: "Studies in graphic design, visual communication, applied creativity, and audiovisual production. Aesthetic, conceptual, and technical training within digital environments."
        },
        "cert-desc-microsoft": {
            es: "Conjunto de certificaciones que abarcan seguridad en la nube, administración de sistemas, desarrollo de software, análisis de datos, IA generativa y productividad con Microsoft Copilot. El foco está en la aplicación práctica de la IA y la tecnología para resolver problemas de negocio y mejorar procesos.",
            en: "Set of certifications covering cloud security, systems administration, software development, data analysis, generative AI, and productivity with Microsoft Copilot. The focus is on the practical application of AI and technology to solve business problems and improve processes."
        },
        "cert-desc-sap": {
            es: "Certificaciones en Foundations of Business Analysis y SAP Professional Fundamentals, que cubren análisis y optimización de procesos, levantamiento de requerimientos, toma de decisiones basada en datos y comprensión del ecosistema SAP y la transformación digital.",
            en: "Certifications in Foundations of Business Analysis and SAP Professional Fundamentals, covering process analysis and optimization, requirements gathering, data-driven decision making, and understanding the SAP ecosystem and digital transformation."
        },
        "cert-desc-ef": {
            es: "Certificación internacional de inglés nivel C2, que acredita dominio avanzado del idioma en contextos profesionales e internacionales, incluyendo comunicación oral y escrita, redacción técnico-profesional, presentaciones y negociación en inglés.",
            en: "International English C2 level certification, accrediting advanced command of the language in professional and international contexts, including oral and written communication, technical-professional writing, presentations, and negotiation in English."
        },

        // --- Skills Section ---
        "skills-title": { es: "Habilidades", en: "Skills" },
        "skills-prof": { es: "Profesionales y Gestión", en: "Professional & Management" },
        "skills-tech": { es: "Tecnología y Desarrollo", en: "Technology & Development" },

        // --- Projects Section ---
        "projects-title": { es: "Proyectos Destacados", en: "Featured Projects" },
        "projects-subtitle": { es: "Explora algunos de los desarrollos en los que estoy trabajando actualmente.", en: "Explore some of the developments I am currently working on." },
        "status-wip": { es: "En Construcción", en: "Work in Progress" },
        
        "proj-desc-portfolio": {
            es: "Diseño y desarrollo de este sitio web personal para presentar mi perfil profesional. Enfocado en diseño responsivo, modo oscuro/claro y accesibilidad.",
            en: "Design and development of this personal website to present my professional profile. Focused on responsive design, dark/light mode, and accessibility."
        },
        "proj-desc-system": {
            es: "Aplicación web para la administración de procesos internos y gestión documental. Solución orientada a optimizar flujos de trabajo administrativos.",
            en: "Web application for the administration of internal processes and document management. Solution oriented to optimize administrative workflows."
        },
        "proj-desc-dash": {
            es: "Interfaz de visualización de datos para el análisis de métricas financieras y KPIs. Enfoque en la claridad visual y la toma de decisiones basada en datos.",
            en: "Data visualization interface for analyzing financial metrics and KPIs. Focus on visual clarity and data-driven decision making."
        },
        "proj-desc-app": {
            es: "Plataforma conceptual para conectar usuarios con proveedores de servicios locales. Proyecto académico enfocado en la experiencia de usuario (UX).",
            en: "Conceptual platform to connect users with local service providers. Academic project focused on user experience (UX)."
        },

        // --- Contact Section & Footer ---
        "contact-title": { es: "Contacto", en: "Contact" },
        "contact-subtitle": { es: "¡Hablemos!", en: "Let's Talk!" },
        "contact-desc": { 
            es: "Estoy interesado en nuevas oportunidades laborales y colaboraciones. Si tienes alguna pregunta o simplemente quieres saludar, no dudes en escribirme.", 
            en: "I am interested in new job opportunities and collaborations. If you have any questions or just want to say hi, feel free to write to me." 
        },
        "form-name": { es: "Nombre", en: "Name" },
        "form-email": { es: "Email", en: "Email" },
        "form-message": { es: "Mensaje", en: "Message" },
        "form-btn": { es: "Enviar Mensaje", en: "Send Message" },
        "footer-rights": { es: "Todos los derechos reservados.", en: "All rights reserved." }
    };

    // ==========================================
    // 2. THEME LOGIC / LÓGICA DEL TEMA
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    } else {
        themeToggle.querySelector('i').className = 'fas fa-moon';
    }
    
    themeToggle.addEventListener('click', () => {
        const isLightTheme = body.classList.toggle('light-theme');
        if (isLightTheme) {
            localStorage.setItem('theme', 'light');
            themeToggle.querySelector('i').className = 'fas fa-sun';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.querySelector('i').className = 'fas fa-moon';
        }
    });

    // ==========================================
    // 3. LANGUAGE LOGIC / LÓGICA DEL IDIOMA
    // ==========================================
    const langToggle = document.getElementById('lang-toggle');
    const langFlags = document.querySelectorAll('.lang-flag');
    let currentLang = 'es'; 

    const updateLangDisplay = (lang) => {
        // Update Flag / Actualizar Bandera
        langFlags.forEach(flag => {
            if (flag.getAttribute('data-lang') === lang) {
                flag.classList.remove('hidden');
            } else {
                flag.classList.add('hidden');
            }
        });

        // Update Text Content / Actualizar Contenido de Texto
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[key] && translations[key][lang]) {
                // Check if the content contains HTML tags (like <span> or <strong>)
                if (translations[key][lang].includes('<')) {
                    element.innerHTML = translations[key][lang];
                } else {
                    element.textContent = translations[key][lang];
                }
            }
        });
    };

    langToggle.addEventListener('click', () => {
        currentLang = (currentLang === 'es' ? 'en' : 'es');
        updateLangDisplay(currentLang);
        document.documentElement.lang = currentLang;
    });

    // ==========================================
    // 4. MOBILE MENU / MENÚ MÓVIL
    // ==========================================
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = hamburgerMenu.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    document.querySelectorAll('.nav__item a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                hamburgerMenu.querySelector('i').className = 'fas fa-bars';
            }
        });
    });
});