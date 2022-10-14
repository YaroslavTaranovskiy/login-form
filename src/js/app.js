import { authWithEmailAndPassword } from "./authform";


const authForm = document.getElementById('auth-form');

authForm.addEventListener('submit', authFormHandler)

function authFormHandler(event) {
    event.preventDefault()

    const email = event.target.querySelector('#email').value;
    const password = event.target.querySelector('#password').value;
    
    // console.log(email, password);
    authWithEmailAndPassword(email, password)
}