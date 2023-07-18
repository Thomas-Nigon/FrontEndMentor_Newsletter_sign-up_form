const form = document.querySelector('form')
const mailInput = document.querySelector('input')
const state_1 = document.querySelector('#state_1')
const state_2 = document.querySelector('#state_2')
const warning = document.querySelector('#warningMessage')
const remindMail = document.querySelector('#remindMail')
const dismiss = document.querySelector('#dismissButton')
var inputField = '';
var userMail = ''

function activeMailInput(e){
  console.log(e)
  mailInput.removeAttribute('class');
  mailInput.classList.add('activeState')
  mailInput.value = '';
}
function checkValidity(inputField) {
  inputField = mailInput.value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(inputField)
  if (!inputField.match(mailformat)) {
    mailInput.removeAttribute('class');
    mailInput.classList.add('errorState')
    warning.classList.remove('hidden')
  } else {
    mailInput.removeAttribute('class');
    mailInput.classList.add('activeState')
    warning.classList.add('hidden')
    userMail = inputField;
  }
}
function outOfInput(e){
   const outsideClick = !mailInput.contains(event.target);
    if (outsideClick){
      mailInput.classList.remove('activeState');
      mailInput.classList.add('defaultState')
    } 
} 
function sendForm(e) {
  e.preventDefault();
  if (form.checkValidity){
    state_2.classList.remove('hidden')
    state_1.classList.add('hidden')
    dismiss.classList.remove('hidden')
    remindMail.textContent = userMail;
  } else { console.log('invalid email')}
}
function dismissFunction() {
  dismiss.classList.add('hidden')
  state_2.classList.add('hidden')
  state_1.classList.remove('hidden')
}


mailInput.addEventListener('click', activeMailInput)
mailInput.addEventListener('keyup', checkValidity)
form.addEventListener('submit', sendForm)
document.addEventListener('click', outOfInput)
dismiss.addEventListener('click', dismissFunction)
