document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.galeria img');
    const largeImage = document.getElementById('imagen-grande');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            largeImage.src = this.src;
            largeImage.alt = this.alt;
            
            // Efecto de transición
            largeImage.style.opacity = 0;
            setTimeout(() => {
                largeImage.style.opacity = 1;
            }, 100);
        });
    });
});