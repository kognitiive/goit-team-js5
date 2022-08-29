const basicLightbox = require('basiclightbox');

const formLink = document.querySelector('.header-regist');

formLink.addEventListener('click', openModal)

const instance = basicLightbox.create(
    `<div class='registration-backdrop'>
    <div class='modal'>
    <form class='regist-form' autocomplete="off">
        <h1 class='regist-title'>Please, fill in all fields</h1>
            <label>
                <span class="regist-label">Email</span>
                <input class='regist-input' type="email" name="email" ></input>
            </label>
            <label>
                <span class="regist-label">Password</span>
                <input class='regist-input' type="text" name="password"></input>
            </label>
            <button type='submit' class='regist-btn'>Registration</button>
    </form>
    </div>`,
    {
        onShow: () => {
            refs = {
                submitBtn: document.querySelector('.regist-btn'),
                backdrop: document.querySelector('.registration-backdrop'),
                modal: document.querySelector('.modal')
             }
            window.addEventListener('keydown', onEscCode)
            refs.modal.classList.add('active')
            refs.backdrop.classList.add('active')
        },

        onClose: () => {
            refs.modal.classList.remove('active')
            refs.backdrop.classList.remove('active')
            window.removeEventListener('keydown', onEscCode)
        }
    }
)

function openModal(e) {
    e.preventDefault()
    return instance.show()
}

function onEscCode(event) {
    if (event.code === "Escape") {
        instance.close()
        return
    }
}
