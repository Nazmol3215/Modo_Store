
const scriptURL = 'https://script.google.com/macros/s/AKfycbxUhrXLC1Lh_DdY5GYQE9rGtREocM1mZgUEB2qd66-Uj_sB5bj6m5Bb_O7OhJFUVP7M/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

