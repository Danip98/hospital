document.addEventListener('DOMContentLoaded', function() {
    // Abrir y cerrar el menú desplegable
    const menuButton = document.querySelector('.mobile-menu-button');
    const dropdown = document.querySelector('.dropdown');
    const backdrop = document.querySelector('.dropdown-backdrop');
    const closeButtons = document.querySelectorAll('.close-button');

    menuButton.addEventListener('click', function() {
        dropdown.style.transform = 'translateX(0)';
        backdrop.style.opacity = '1';
        backdrop.style.pointerEvents = 'auto';
    });

    backdrop.addEventListener('click', function() {
        dropdown.style.transform = 'translateX(-100%)';
        backdrop.style.opacity = '0';
        backdrop.style.pointerEvents = 'none';
    });

    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            dropdown.style.transform = 'translateX(-100%)';
            backdrop.style.opacity = '0';
            backdrop.style.pointerEvents = 'none';
        });
    });
});


const valCarousel = document.querySelector(".val_carousel");
const valItems = document.querySelectorAll(".val_item");

let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % valItems.length;
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * 100;
  valCarousel.style.transform = `translateX(${translateValue}%)`;
}

// Configura un temporizador para cambiar automáticamente las imágenes
setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos (ajusta según tus preferencias)
