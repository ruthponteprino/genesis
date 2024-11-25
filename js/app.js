// MENU MOVILE

const btnMobile = document.querySelector('#mobile-menu')
const menu = document.querySelector('#menu')


btnMobile.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})


const btnMovil = document.querySelector('.btn-movil')
const musicSubmenu = document.querySelector('#music-submenu')

btnMovil.addEventListener('mouseover', () => {
    musicSubmenu.classList.remove('hidden')
})

// VALIDACION DE FORMULARIO
const formulario = document.querySelector('#mi-formulario');

const validar = () => {
    let esValido = true;

    // Capturar los campos del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // Capturar los contenedores de error
    const errorNombre = document.getElementById('error-nombre');
    const errorEmail = document.getElementById('error-email');
    const errorMensaje = document.getElementById('error-mensaje');

    // Validar nombre
    if (nombre.value.trim() === "" || nombre.value.trim().length <= 2) {
        errorNombre.innerText = "El nombre debe tener más de 2 caracteres y no estar vacío.";
        esValido = false;
    } else {
        errorNombre.innerText = "";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        errorEmail.innerText = "Por favor, ingresa un email válido."
        esValido = false;
    } else {
        errorEmail.innerText = ""
    }

    // Validar mensaje
    if (mensaje.value.trim() === "") {
        errorMensaje.innerText = "El campo de mensaje no puede estar vacío."
        esValido = false;
    } else {
        errorMensaje.innerText = "";
    }

    return esValido;
}

formulario.addEventListener('submit', function (e) {
    if (!validar()) {
        // Si hay errores, detener el envío
        e.preventDefault();
    } else {
        alert('El formulario ha sido enviado exitosamente!')
    }
});

