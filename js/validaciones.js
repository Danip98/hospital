document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector('.form');

    formulario.addEventListener('submit', function (event) {
        let isValid = true;

        // Validación del campo de nombre
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        // Permitimos letras, espacios en blanco y caracteres acentuados en el nombre
        const namePattern = /^[a-zA-Z\sÀ-ÿ]*$/;
        if (!namePattern.test(nameInput.value)) {
            nameError.textContent = "Ingresa un nombre válido sin números ni caracteres especiales.";
            nameInput.classList.add("error-border");
            isValid = false;
        } else {
            nameError.textContent = "";
            nameInput.classList.remove("error-border");
        }

        // Validación del campo de apellido
        const apellidoInput = document.getElementById('apellido');
        const apellidoError = document.getElementById('apellidoError');
        // Permitimos letras, espacios en blanco y caracteres acentuados en el apellido
        const apellidoPattern = /^[a-zA-Z\sÀ-ÿ]*$/;
        if (!apellidoPattern.test(apellidoInput.value)) {
            apellidoError.textContent = "Ingresa un apellido válido sin números ni caracteres especiales.";
            apellidoInput.classList.add("error-border");
            isValid = false;
        } else {
            apellidoError.textContent = "";
            apellidoInput.classList.remove("error-border");
        }

        // Validación del campo de teléfono
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phonePattern = /^\d{7,14}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = "Ingresa un número de teléfono válido.";
            phoneInput.classList.add("error-border");
            isValid = false;
        } else {
            phoneError.textContent = "";
            phoneInput.classList.remove("error-border");
        }

        // Validación del campo de correo electrónico
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Ingresa una dirección de correo electrónico válida.";
            emailInput.classList.add("error-border");
            isValid = false;
        } else {
            emailError.textContent = "";
            emailInput.classList.remove("error-border");
        }
        // Validación del campo de comentarios
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (messageInput.value.trim() === '') {
            messageError.textContent = "Por favor, ingrese sus comentarios.";
            messageInput.classList.add("error-border");
            isValid = false;
        } else {
            messageError.textContent = "";
            messageInput.classList.remove("error-border");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});