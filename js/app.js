// MENU MOVILE

const btnMobile = document.querySelector('#mobile-menu')
const menu = document.querySelector('#menu')


btnMobile.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})


const toggleSubmenu = (id) => {
    const submenu = document.getElementById(id);
    submenu.classList.toggle("hidden"); // Alterna entre mostrar y ocultar
};



// FRASES ALEATORIAS

let frases = ["Por favor, salgan y traten de cambiar el maldito mundo. Acaben con los géneros. Ropan el sexo. Cortocircuiten el control", "Los libros son puertos de entrada para percibir la experiencia de la vida de manera diferente, y eso es lo más poderoso que hay: eso es alquimia.", "Incluso si el mundo exterior se está destruyendo y fragmentando y paranoico y temeroso, el trabajo del artista es abrazar y sostener a la gente y decirles: Está bien, estén seguros aquí.", "Todos los grandes artistas ilustran su enfoque de la vida en las obras que realizan."]

let fraseAleatoria = () => {

    let indiceAleatorio = Math.floor(Math.random() * frases.length)

    let fraseSeleccionada = frases[indiceAleatorio]

    const divFrase = document.querySelector("#div-frase")
    divFrase.innerHTML = `<q>${fraseSeleccionada}</q>`

}



// Llamar a la función para mostrar la frase aleatoria al cargar la página
document.addEventListener("DOMContentLoaded", fraseAleatoria);