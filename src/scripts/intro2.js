const verify = document.getElementById('submit-button-code')

verify.addEventListener('click', function () {
    // Muestra el modal
    const modal2 = document.getElementById('intro2')
    modal2.style.display = 'block'

    // Oculta el modal después de 3 segundos
    setTimeout(function () {
        modal2.style.display = 'none'
    }, 1000)
})
