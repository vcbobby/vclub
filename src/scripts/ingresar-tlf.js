const phoneInput = document.getElementById('phone-input')
const submitButton = document.getElementById('submit-button')
const errorModal = document.getElementById('error-modal')
const closeModal = document.querySelector('.close')

submitButton.addEventListener('click', () => {
    const phoneNumber = phoneInput.value.replace(/-/g, '') // Elimina los guiones
    if (phoneNumber.length === 10) {
        // Redirige a la siguiente página (reemplaza 'URL_DESTINO' con la URL real)
        window.location.href = '../src/verificar-numero.html'
    } else {
        // Muestra el modal de error
        errorModal.style.display = 'block'
    }
})

closeModal.addEventListener('click', () => {
    // Cierra el modal al hacer clic en la 'X'
    errorModal.style.display = 'none'
})


