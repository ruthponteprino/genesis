const btnMobile = document.querySelector('#mobile-menu')
const menu = document.querySelector('#menu')


btnMobile.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})


const toggleSubmenu = (id) => {
    const submenu = document.getElementById(id);
    submenu.classList.toggle("hidden"); // Alterna entre mostrar y ocultar
};
