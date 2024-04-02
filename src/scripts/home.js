var ProgressBar = require('progressbar.js')
const redimButton = document.getElementById('redim')
const backButton = document.querySelector('.back-button')
const redimContainer = document.querySelector('.redimir-modal-home')
const loading = document.querySelector('.lds-ring')

const pinModal = document.querySelector('.pin')
const creditsNumberModal = document.querySelector('.credits-number')
const creditsTextModal = document.querySelector('.credits-number-text')
const daysModal = document.querySelector('.days')
const imgModal = document.querySelector('.img-modal')
const goButton = document.querySelector('.go')
const successButton = document.querySelector('.redim-success')

document.querySelector('.go').addEventListener('click', function () {
    // Oculta el contenido actual
    pinModal.style.display = 'none'
    creditsNumberModal.style.display = 'none'
    creditsTextModal.style.display = 'none'
    daysModal.style.display = 'none'
    imgModal.style.display = 'none'
    goButton.style.display = 'none'
    backButton.style.display = 'none'
    loading.style.display = 'inline-block'

    // Muestra un spinner de carga (puedes personalizarlo según tus necesidades)
    // Por ejemplo:
    // document.querySelector(".spinner").style.display = "block";

    // Después de 2 segundos, muestra el nuevo contenido
    setTimeout(function () {
        loading.style.display = 'none'
        successButton.style.display = 'flex'
        // document.querySelector(".spinner").style.display = "none";
        // Muestra el nuevo contenido (puedes personalizarlo según tus necesidades)
        // Por ejemplo:
        // document.querySelector(".nuevo-contenido").style.display = "block";
    }, 2000) // 2000 milisegundos = 2 segundos
})

var semiBar = new ProgressBar.SemiCircle('#semi-container', {
    color: '#1D85FF',
    strokeWidth: 2.5,
    trailWidth: 2.5,
    trailColor: '#eaebec',
    easing: 'bounce',
    strokeLinecap: 'round',
})

semiBar.animate(0.75, {
    duration: 3000,
})

function createProgressBar(containerSelector, progress) {
    const bar = new ProgressBar.Line(containerSelector, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#1D85FF',
        trailColor: '#eaebec',
        trailWidth: 4,
        svgStyle: { width: '100%', height: '100%' },
    })

    bar.animate(progress) // Progress value from 0.0 to 1.0
}

// Call the function with different containers and progress values
createProgressBar('.line-container-1', 0.8)
createProgressBar('.line-container-2', 0.4)
createProgressBar('.line-container-3', 0.4)
createProgressBar('.line-container-4', 0.4)
createProgressBar('.line-container-5', 0.4)

redimButton.addEventListener('click', () => {
    redimContainer.style.display = 'flex'
})

backButton.addEventListener('click', () => {
    redimContainer.style.display = 'none'
})
