const  formulario = document.getElementsByClassName('form');
const inputs = document.querySelectorAll('#form input');


const expresiones = {
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

//tendre que aprender la expresiones regulares para crear la validacion de fecha de nacimiento
//para dni, cantidad de hijos ***(Katia: Esta info no se utiliza en un form de contacto, porfavor Dani borrar... 
//.................................este comentario una vez sea leído)