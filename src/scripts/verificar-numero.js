const backButton = document.getElementById('back-button')
const errorModalCode = document.getElementById('error-modal-code')
const closeModalCode = document.querySelector('.close')
const codeInput = document.getElementById('code-input')
const submitButtonCode = document.getElementById('submit-button-code')

backButton.addEventListener('click', () => {
    // Vuelve a la página anterior
    window.history.back()
})

submitButtonCode.addEventListener('click', () => {
    const codeNumber = codeInput.value.replace(/-/g, '') // Elimina los guiones
    if (codeNumber.length === 10) {
        // Redirige a la siguiente página (reemplaza 'URL_DESTINO' con la URL real)
        window.location.href = '../src/home.html'
    } else {
        // Muestra el modal de error
        errorModalCode.style.display = 'block'
    }
})

closeModalCode.addEventListener('click', () => {
    // Cierra el modal al hacer clic en la 'X'
    errorModalCode.style.display = 'none'
})
