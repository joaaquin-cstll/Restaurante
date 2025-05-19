document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const fecha = document.getElementById('fecha').value;
        const personas = document.getElementById('personas').value;
        
        if (!nombre || !email || !fecha || !personas) {
            alert('Por favor complete todos los campos obligatorios');
            return;
        }
        
        // Validación de email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor ingrese un correo electrónico válido');
            return;
        }
        
        // Validación de fecha futura
        const today = new Date();
        const selectedDate = new Date(fecha);
        
        if (selectedDate < today) {
            alert('Por favor seleccione una fecha futura');
            return;
        }
        
        // Si todo está bien, mostrar mensaje de éxito
        alert(`¡Reserva confirmada, ${nombre}! Te esperamos el ${fecha}.`);
        form.reset();
    });
});