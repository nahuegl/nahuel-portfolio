// -- Comentarios Bilingües: Bilingual Comments --

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Toggle Logic ---
    // --- Lógica del Interruptor de Tema ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Load theme preference from localStorage or default to 'dark'
    // Cargar la preferencia de tema desde localStorage o usar 'dark' por defecto
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.querySelector('i').className = 'fas fa-sun'; // Change icon to sun
    } else {
        themeToggle.querySelector('i').className = 'fas fa-moon'; // Change icon to moon
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

    // --- Language Toggle Logic ---
    // --- Lógica del Interruptor de Idioma ---
    const langToggle = document.getElementById('lang-toggle');
    const langFlags = document.querySelectorAll('.lang-flag');
    
    // Default language is 'es' (Spanish)
    // El idioma por defecto es 'es' (Español)
    let currentLang = 'es'; 
    
    // Function to update the displayed language flag
    // Función para actualizar la bandera de idioma mostrada
    const updateLangDisplay = (lang) => {
        langFlags.forEach(flag => {
            if (flag.getAttribute('data-lang') === lang) {
                flag.classList.remove('hidden');
            } else {
                flag.classList.add('hidden');
            }
        });
    };

    langToggle.addEventListener('click', () => {
        // Toggle language
        // Alternar idioma
        currentLang = (currentLang === 'es' ? 'en' : 'es');
        
        // Update display and potentially the entire page content (later implementation)
        // Actualizar la visualización y potencialmente todo el contenido de la página (implementación posterior)
        updateLangDisplay(currentLang);
        
        // **To Do:** Implement a function here to change ALL text content on the page
        // **Pendiente:** Implementar una función aquí para cambiar TODO el contenido de texto en la página
        console.log('Language changed to: ' + currentLang);
        document.documentElement.lang = currentLang;
    });
    
    // Initial display update
    // Actualización de visualización inicial
    updateLangDisplay(currentLang);


    // --- Hamburger Menu Logic (Responsive) ---
    // --- Lógica del Menú Hamburguesa (Responsivo) ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = hamburgerMenu.querySelector('i');
        // Toggle between 'bars' and 'times' icon
        // Alternar entre el ícono 'bars' y 'times'
        if (navMenu.classList.contains('open')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close menu when a navigation link is clicked (for mobile view)
    // Cerrar menú cuando se hace clic en un enlace de navegación (para vista móvil)
    document.querySelectorAll('.nav__item a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                hamburgerMenu.querySelector('i').className = 'fas fa-bars';
            }
        });
    });

});