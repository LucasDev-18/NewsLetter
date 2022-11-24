const form = document.getElementById("form")
const email = document.getElementById("email")
const btn = document.getElementById("emailinput")

form.addEventListener('submit', (e) => {

  e.preventDefault() 
  checkEmail()
})


function checkEmail(Email) {
  const emailValue = email.value


  if (emailValue === "") {
    setFail("Por favor, insira eu Email")
  } else {
    setSucess("Obrigado! A partir de hoje você receberá emails diários")
  }
}

function setFail(message) {
  const failText = document.querySelector('.invalidText')
  failText.innerText = message
  failText.classList.add("falha")
}

function setSucess(message) {
  const sucessText = document.querySelector('.validText')
  sucessText.innerText = message
  sucessText.classList.add("sucesso")
}

/*function setErrorFor(input, message) {
 const formControl = input.parentElement
 const small = formControl.querySelector('small')
 
 small.innerText = message
 formControl.className = "form-control error"
}*/
