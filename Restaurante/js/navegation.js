document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    
    header.insertBefore(navToggle, nav);
    
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('visible');
    });
});