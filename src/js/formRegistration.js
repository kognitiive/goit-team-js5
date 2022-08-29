const basicLightbox = require('basiclightbox');
import { app } from './firebase'
import { Report } from 'notiflix/build/notiflix-report-aio';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const formLink = document.querySelector('.header-regist');

formLink.addEventListener('click', openModal)
const modal = document.querySelector('.modal-registration')
const backdrop = document.querySelector('.window-backdrop')
const instance = basicLightbox.create(document.querySelector('#template-registr'),
    {
        onShow: (instance) => {
            modal.classList.add('active')
            backdrop.classList.add('active')
            window.addEventListener('keydown', onEscCode)
            backdrop.addEventListener('click', onBackdropClose)
            // instance.element().querySelector('.modal-registration').onclick = instance.close
        },

        onClose: (instance) => {
            modal.classList.remove('active')
            backdrop.classList.remove('active')
            window.removeEventListener('keydown', onEscCode)
            backdrop.removeEventListener('click', onBackdropClose)
        }
    }
)



function openModal(e) {
    e.preventDefault()
    instance.show()

    registrationForm = document.querySelector('.regist-form')

    console.log(registrationForm.elements.email)
    registrationForm.addEventListener('submit', createUser)
    function createUser (event){
        event.preventDefault();
        const email = registrationForm.elements.email.value;
        const password = registrationForm.elements.email.value;

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        Report.success(
            'Congratulations!',
            'You have successfully registered!',
            'COOL',
            );
        registrationForm.reset()
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/email-already-in-use"){
            Report.failure(
                'OOPS',
                'There is already a user with this email!',
                'Okay',
                );
        } else {
            Notiflix.Notify.warning(errorMessage);
        }
    });
        }
}

function onEscCode(event) {
    if (event.code === "Escape") {
        instance.close()
        return
    }
}

function onBackdropClose(e) {
    if (e.currentTarget.value === e.target.value) {
        instance.close()
    }
}
