document.addEventListener('DOMContentLoaded', function () {
    const botonAccion = document.querySelector('.accion')

    const botonTerror = document.querySelector('.terror')
    const botonShooter = document.querySelector('.shooter')
    const botonEducativo = document.querySelector('.educativo')
    const botonInfantil = document.querySelector('.infantil')
    const contenedorAccion = document.querySelector('.targets-section.accion')
    const contenedorTerror = document.querySelector('.targets-section.terror')
    const contenedorShooter = document.querySelector('.targets-section.shooter')
    const contenedorInfantil = document.querySelector(
        '.targets-section.infantil'
    )
    const contenedorEducativo = document.querySelector(
        '.targets-section.educativo'
    )

    // Mostrar el contenedor de cargos al cargar la página
    contenedorAccion.style.display = 'block'
    botonAccion.style.background = '#1d85ff'
    botonAccion.style.color = '#fff'

    // Evento al hacer clic en el botón de terror
    botonTerror.addEventListener('click', function () {
        contenedorAccion.style.display = 'none'
        botonAccion.style.background = '#fff'
        botonAccion.style.color = '#d1d1d1'
        botonAccion.style.border = '1px solid #d1d1d1'
        contenedorEducativo.style.display = 'none'
        botonEducativo.style.background = '#fff'
        botonEducativo.style.color = '#d1d1d1'
        botonEducativo.style.border = '1px solid #d1d1d1'
        contenedorShooter.style.display = 'none'
        botonShooter.style.background = '#fff'
        botonShooter.style.color = '#d1d1d1'
        botonShooter.style.border = '1px solid #d1d1d1'
        contenedorInfantil.style.display = 'none'
        botonInfantil.style.background = '#fff'
        botonInfantil.style.color = '#d1d1d1'
        botonInfantil.style.border = '1px solid #d1d1d1'
        contenedorTerror.style.display = 'block'
        botonTerror.style.background = '#1d85ff'
        botonTerror.style.color = '#fff'
    })

    // Evento al hacer clic en el botón de Accion
    botonAccion.addEventListener('click', function () {
        contenedorShooter.style.display = 'none'
        botonShooter.style.background = '#fff'
        botonShooter.style.color = '#d1d1d1'
        botonShooter.style.border = '1px solid #d1d1d1'
        contenedorEducativo.style.display = 'none'
        botonEducativo.style.background = '#fff'
        botonEducativo.style.color = '#d1d1d1'
        botonEducativo.style.border = '1px solid #d1d1d1'
        contenedorTerror.style.display = 'none'
        botonTerror.style.background = '#fff'
        botonTerror.style.color = '#d1d1d1'
        botonTerror.style.border = '1px solid #d1d1d1'
        contenedorInfantil.style.display = 'none'
        botonInfantil.style.background = '#fff'
        botonInfantil.style.color = '#d1d1d1'
        botonInfantil.style.border = '1px solid #d1d1d1'
        contenedorAccion.style.display = 'block'
        botonAccion.style.background = '#1d85ff'
        botonAccion.style.color = '#fff'
    })

    // Evento al hacer clic en el botón de Shooter
    botonShooter.addEventListener('click', function () {
        contenedorAccion.style.display = 'none'
        botonAccion.style.background = '#fff'
        botonAccion.style.color = '#d1d1d1'
        botonAccion.style.border = '1px solid #d1d1d1'
        contenedorEducativo.style.display = 'none'
        botonEducativo.style.background = '#fff'
        botonEducativo.style.color = '#d1d1d1'
        botonEducativo.style.border = '1px solid #d1d1d1'
        contenedorTerror.style.display = 'none'
        botonTerror.style.background = '#fff'
        botonTerror.style.color = '#d1d1d1'
        botonTerror.style.border = '1px solid #d1d1d1'
        contenedorInfantil.style.display = 'none'
        botonInfantil.style.background = '#fff'
        botonInfantil.style.color = '#d1d1d1'
        botonInfantil.style.border = '1px solid #d1d1d1'
        contenedorShooter.style.display = 'block'
        botonShooter.style.background = '#1d85ff'
        botonShooter.style.color = '#fff'
    })

    // Evento al hacer clic en el botón de Infantil
    botonInfantil.addEventListener('click', function () {
        contenedorAccion.style.display = 'none'
        botonAccion.style.background = '#fff'
        botonAccion.style.color = '#d1d1d1'
        botonAccion.style.border = '1px solid #d1d1d1'
        contenedorEducativo.style.display = 'none'
        botonEducativo.style.background = '#fff'
        botonEducativo.style.color = '#d1d1d1'
        botonEducativo.style.border = '1px solid #d1d1d1'
        contenedorTerror.style.display = 'none'
        botonTerror.style.background = '#fff'
        botonTerror.style.color = '#d1d1d1'
        botonTerror.style.border = '1px solid #d1d1d1'
        contenedorShooter.style.display = 'none'
        botonShooter.style.background = '#fff'
        botonShooter.style.color = '#d1d1d1'
        botonShooter.style.border = '1px solid #d1d1d1'
        contenedorInfantil.style.display = 'block'
        botonInfantil.style.background = '#1d85ff'
        botonInfantil.style.color = '#fff'
    })

    // Evento al hacer clic en el botón de Educativo
    botonEducativo.addEventListener('click', function () {
        contenedorAccion.style.display = 'none'
        botonAccion.style.background = '#fff'
        botonAccion.style.color = '#d1d1d1'
        botonAccion.style.border = '1px solid #d1d1d1'
        contenedorInfantil.style.display = 'none'
        botonInfantil.style.background = '#fff'
        botonInfantil.style.color = '#d1d1d1'
        botonInfantil.style.border = '1px solid #d1d1d1'
        contenedorTerror.style.display = 'none'
        botonTerror.style.background = '#fff'
        botonTerror.style.color = '#d1d1d1'
        botonTerror.style.border = '1px solid #d1d1d1'
        contenedorShooter.style.display = 'none'
        botonShooter.style.background = '#fff'
        botonShooter.style.color = '#d1d1d1'
        botonShooter.style.border = '1px solid #d1d1d1'
        contenedorEducativo.style.display = 'block'
        botonEducativo.style.background = '#1d85ff'
        botonEducativo.style.color = '#fff'
    })
})
