var inputName = document.querySelector('#input-name');
var passwordInput = document.querySelector('#password-input');
const submitBtn = document.getElementById('submit-btn');
const selectEl = document.getElementById('select-el');

var errorEl = document.querySelector('#error')
// if (selectEl.value === 'As a Student') {
//     console.log('it is currently the student input');
// } else {
//     console.log('it is currently the lecturers inpout');
// }
let userData = [
    {
        Name:'Princewill',
        Password:'123456'
    },
  
];

// console.log(userData[0].Name)

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    if (inputName.value === userData[0].Name && passwordInput.value == userData[0].Password) {
        errorEl.innerHTML = 'Invalid input or account not found, please create an account'
        setTimeout( () => {
            errorEl.innerHTML = ''
        }, 3000)
   } else if(inputName.value == ''){
        errorEl.innerHTML = 'Please enter full name'
        setTimeout(() => {
            errorEl.innerHTML = ''
        })
    }else if(passwordInput.value == ''){
        errorEl.innerHTML = 'Please enetr password you use in creating an accpunt'
        setTimeout(() => {
            errorEl.innerHTML = 'Please enetr password you use in creating an accpunt'
        })
    }else{
        alert('sucessfully')
        userData.push(inputName.value);
        userData.push(passwordInput.value);
        console.log(userData)
    }
})