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


/*
const toggleSubmenu = (id) => {
    const submenu = document.getElementById(id);
    submenu.classList.toggle("hidden"); // Alterna entre mostrar y ocultar
};
*/




