document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll suave para el enlace "Volver al inicio"
    const backToTop = document.querySelector('a[href="#inicio"]');
    
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Animación para las secciones
    const sections = document.querySelectorAll('main h2, main h3, main p, main ul');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});