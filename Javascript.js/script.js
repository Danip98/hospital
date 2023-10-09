document.addEventListener('DOMContentLoaded', function () {
    // Abrir y cerrar el menú desplegable
    const menuButton = document.querySelector('.mobile-menu-button');
    const dropdown = document.querySelector('.dropdown');
    const backdrop = document.querySelector('.dropdown-backdrop');
    const closeButtons = document.querySelectorAll('.close-button');

    menuButton.addEventListener('click', function () {
        dropdown.style.transform = 'translateX(0)';
        backdrop.style.opacity = '1';
        backdrop.style.pointerEvents = 'auto';
    });

    backdrop.addEventListener('click', function () {
        dropdown.style.transform = 'translateX(-100%)';
        backdrop.style.opacity = '0';
        backdrop.style.pointerEvents = 'none';
    });

    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            dropdown.style.transform = 'translateX(-100%)';
            backdrop.style.opacity = '0';
            backdrop.style.pointerEvents = 'none';
        });
    });
});


