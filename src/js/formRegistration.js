const basicLightbox = require('basiclightbox');
import { app } from './firebase'
import { Report } from 'notiflix/build/notiflix-report-aio';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const formLink = document.querySelector('.header-regist');
const instance = basicLightbox.create(
    `<div class='modal'><form class='regist-form' autocomplete="off"><label><span class="regist-label">Email</span><input class='regist-input' type="email" name="email" ></input></label><label><span class="regist-label">Password</span><input class='regist-input' type="text" name="password"></input></label><button type='submit' class='regist-btn'>Registration</button>
    </form></div>`, {
    onShow: () => {
        window.addEventListener('keydown', onEscCode)

    },

    onClose: () => {
        window.removeEventListener('keydown', onEscCode)
    }
}
)
formLink.addEventListener('click', openModal)

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
