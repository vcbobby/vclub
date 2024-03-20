// script.js

import '../assets/cuenta.css'
const datepicker = require('js-datepicker')
document.addEventListener('DOMContentLoaded', function () {
    const botonCargos = document.querySelector('.cargos')
    const botonRedenciones = document.querySelector('.redenciones')
    const contenedorCargos = document.querySelector('.targets-section.cargos')
    const contenedorRedenciones = document.querySelector(
        '.targets-section.redenciones'
    )

    // Mostrar el contenedor de cargos al cargar la página
    contenedorCargos.style.display = 'block'
    botonCargos.style.background = '#1d85ff'
    botonCargos.style.color = '#fff'

    // Evento al hacer clic en el botón de redenciones
    botonRedenciones.addEventListener('click', function () {
        contenedorCargos.style.display = 'none'
        botonCargos.style.background = '#fff'
        botonCargos.style.color = '#d1d1d1'
        botonCargos.style.border = '1px solid #d1d1d1'
        contenedorRedenciones.style.display = 'block'
    })

    // Evento al hacer clic en el botón de cargos
    botonCargos.addEventListener('click', function () {
        contenedorRedenciones.style.display = 'none'
        contenedorCargos.style.display = 'block'
        botonCargos.style.background = '#1d85ff'
        botonCargos.style.color = '#fff'
    })
})

const picker = datepicker('#date', {
    customMonths: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ],
    customDays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
})
