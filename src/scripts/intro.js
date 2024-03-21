window.onload = function () {
    // Muestra el modal
    const modal = document.getElementById('intro1')
    modal.style.display = 'block'

    // Oculta el modal después de 1 segundo
    setTimeout(function () {
        modal.style.display = 'none'
    }, 1000)

    // Muestra el modal
    const modal2 = document.getElementById('intro2')
    modal2.style.display = 'block'

    // Oculta el modal después de 3 segundos
    setTimeout(function () {
        modal2.style.display = 'none'
    }, 3000)
}
