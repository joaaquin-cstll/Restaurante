document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'img/Carne.png',
        'img/Risotto.png',
        'img/Tarta.png'
    ];
    
    const main = document.querySelector('main');
    const carousel = document.createElement('div');
    carousel.className = 'carousel';
    
    const imgElement = document.createElement('img');
    imgElement.src = images[0];
    imgElement.alt = 'Imagen del restaurante';
    
    carousel.appendChild(imgElement);
    main.insertBefore(carousel, main.firstChild);
    
    let currentIndex = 0;
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }
    
    setInterval(nextImage, 3000);
});