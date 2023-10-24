const formulario = document.querySelector('.form');
const nameInput = document.getElementById('name');
const apellidoInput = document.getElementById('apellido');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

formulario.addEventListener('submit', function (event) {
  let isValid = true;

  // Validación del campo de nombre
  if (!/^[a-zA-Z\sÀ-ÿ]*$/.test(nameInput.value)) {
    alert('Por favor, ingresa un nombre válido sin números ni caracteres especiales.');
    isValid = false;
  }

  // Validación del campo de apellido
  if (!/^[a-zA-Z\sÀ-ÿ]*$/.test(apellidoInput.value)) {
    alert('Por favor, ingresa un apellido válido sin números ni caracteres especiales.');
    isValid = false;
  }

  // Validación del campo de teléfono
  const phonePattern = /^\d{7,14}$/;
  if (!phonePattern.test(phoneInput.value)) {
    alert('Por favor, ingresa un número de teléfono válido.');
    isValid = false;
  }

  // Validación del campo de correo electrónico
  const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
    alert('Por favor, ingresa una dirección de correo electrónico válida.');
    isValid = false;
  }

  // Validación del campo de comentarios (para que no envie msj vacio)
  if (messageInput.value.trim() === '') {
    alert('Por favor, ingresa tus comentarios.');
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    // Si el formulario es válido, redirige a la página de índice
    window.location.href = 'index.html'; 
  }
});
