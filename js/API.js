document.addEventListener("DOMContentLoaded", function () {
    const autoridadesContainer = document.querySelector('.autoridades');

    // Cargos predefinidos para las autoridades
    const cargos = ['Director Ejecutivo', 'Director Asociado', 'Director Asociado', 'Director Asociado'];

    // Elimina todas las autoridades existentes si las hay
    while (autoridadesContainer.firstChild) {
        autoridadesContainer.removeChild(autoridadesContainer.firstChild);
    }

    // Realiza una solicitud a la API "RandomUser.me" para obtener 4 autoridades
    fetch('https://randomuser.me/api/?results=4')
        .then(response => response.json())
        .then(data => {
            const autoridades = data.results;

            // Itera a través de las autoridades y cargos y crea elementos HTML para cada uno
            autoridades.forEach((autoridad, index) => {
                const autoridadDiv = document.createElement('div');
                autoridadDiv.classList.add('autoridad');

                const imagenAutoridad = document.createElement('img');
                imagenAutoridad.src = autoridad.picture.large;
                imagenAutoridad.alt = `${autoridad.name.first} ${autoridad.name.last}`;
                imagenAutoridad.classList.add('imagen-autoridad');

                const nombreCompleto = document.createElement('h4');
                nombreCompleto.textContent = `${autoridad.name.first} ${autoridad.name.last}, Edad: ${autoridad.dob.age}`;
                nombreCompleto.classList.add('nombre-autoridad');

                const cargo = document.createElement('p');
                cargo.textContent = `Cargo: ${cargos[index]}`;
                cargo.classList.add('cargo');

                // Agrega la imagen, nombre, edad y cargo al contenedor de autoridades
                autoridadDiv.appendChild(imagenAutoridad);
                autoridadDiv.appendChild(nombreCompleto);
                autoridadDiv.appendChild(cargo);
                autoridadesContainer.appendChild(autoridadDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar las autoridades: ' + error);
        });
});
