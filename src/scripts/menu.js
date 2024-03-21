const newsElement = document.getElementById('news')
const text = newsElement.querySelector('.news-text')
// Selecciona la imagen con la clase 'news-img' dentro del contenedor 'news'
const newsImage = newsElement.querySelector('.news-img')
const newsIcon = newsElement.querySelector('.icon-news') // Asegúrate de seleccionar el icono correctamente
const options = document.querySelector('.item-options')

// Crea una variable para rastrear si el elemento ha sido clickeado
let isClicked = false

const menuDisplay = document.getElementById('menu')
const modalDisplay = document.querySelector('.menu-dropdown')

let isDisplay = false

menuDisplay.addEventListener('click', function () {
    if (!isDisplay) {
        modalDisplay.style.display = 'block'
        isDisplay = true
    } else {
        modalDisplay.style.display = 'none'
        isDisplay = false
    }
})

// Luego, añade un event listener para el evento 'click'
newsElement.addEventListener('click', function () {
    if (!isClicked) {
        // Cambia el color del texto
        text.style.color = 'rgba(29, 133, 255, 1)'

        // Cambia el color del borde
        newsElement.style.border = '1px solid rgba(29, 133, 255, 1)'

        // Cambia el estilo del contenedor
        newsElement.style.borderRadius = '12px'
        newsElement.style.padding = '5px 0 5px 20px'
        newsElement.style.width = '95%'
        newsElement.style.marginLeft = '-20px'

        // Cambia las imágenes
        newsImage.src = './assets/imgs/menos.svg'
        newsIcon.src = './assets/imgs/newsBlue.svg'
        options.style.display = 'block'

        // Actualiza el estado de isClicked
        isClicked = true
    } else {
        // Revierte los cambios aquí. Asegúrate de cambiar los valores a lo que eran originalmente
        text.style.color = '#828282'
        newsElement.style.border = 'none'
        newsElement.style.borderRadius = 'none'
        newsElement.style.padding = '0'
        // newsElement.style.width = 'original-width'
        newsElement.style.marginLeft = '0'
        newsImage.src = './assets/imgs/mas.svg'
        newsIcon.src = './assets/imgs/news.svg'
        options.style.display = 'none'

        // Actualiza el estado de isClicked
        isClicked = false
    }
})
