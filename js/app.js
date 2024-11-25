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


const submitBtn = document.querySelector('#enviar-btn');

const validate = (e) => {
    e.preventDefault();
    // Capturar los campos del formulario
    const nombre = document.getElementById('nombre').value.trim()
    const email = document.getElementById('email').value.trim()
    const mensaje = document.getElementById('mensaje').value.trim()

    // Validar nombre
    if (nombre === "" || nombre.length <= 2) {
        alert("El nombre debe tener más de 2 caracteres y no estar vacío.");
        return false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido con '@' y un dominio válido.")
        return false
    }

    // Validar textarea
    if (mensaje === "") {
        alert("El campo de mensaje no puede estar vacío.")
        return false;
    }

    // Si todo está correcto, permitir el envío
    return true;
}

submitBtn.addEventListener('click', validate);
