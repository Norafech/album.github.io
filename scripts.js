// Obtener los elementos de la galería y el modal
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Añadir evento de clic a cada imagen de la galería
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar el modal cuando se hace clic fuera de la imagen
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
