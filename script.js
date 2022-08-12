
const btnEl = document.getElementById("btn")
const formatEl = document.getElementById("format")

const inputFn = document.getElementById("first-name")
const firstNmessage = document.getElementById("firstN-message")

const inputSn = document.getElementById("second-name")
const secondNmessage = document.getElementById("secondN-message")

const emailMessage = document.getElementById("email-message")
const emailEl = document.getElementById("email")

const passMessage = document.getElementById("password-message")
const passEl = document.getElementById("password")



function validateEmail(emailEl){
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (emailEl.value.match(mailFormat)){
        alert("Valied Email address")
        return true
    }
    else {
        formatEl.textContent = "Wrong Email format"
        return false
    }
}


btnEl.addEventListener('click', () => {
       
    if (inputFn.value === '') {
        firstNmessage.textContent = "Enter a valid name"
        inputFn.style.backgroundColor = "rgb(250, 192, 192)"
    }

    if (inputSn.value === '') {
        secondNmessage.textContent = "Enter a valid name"
        inputSn.style.backgroundColor = "rgb(250, 192, 192)"
    }

    if (emailEl.value === ''){
        emailMessage.textContent = "Looks like this is not an email"
        emailEl.style.backgroundColor = "rgb(250, 192, 192)"
    }

    if (passEl.value === '') {
        passMessage.textContent = "Enter a valid Password"
        passEl.style.backgroundColor = "rgb(250, 192, 192)"
    }

    validateEmail(emailEl)

})

    


