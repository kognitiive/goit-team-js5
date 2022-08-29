const basicLightbox = require('basiclightbox');

const formLink = document.querySelector('.header-regist');

formLink.addEventListener('click', openModal)

const instance = basicLightbox.create(
    `<div class='modal'><form class='regist-form' autocomplete="off"><h1 class='regist-title'>Please, fill in all fields</h1><label><span class="regist-label">Email</span><input class='regist-input' type="email" name="email" ></input></label><label><span class="regist-label">Password</span><input class='regist-input' type="text" name="password"></input></label><button type='submit' class='regist-btn'>Registration</button>
    </form></div>`,
    {
        onShow: () => {
            window.addEventListener('keydown', onEscCode)
        },

        onClose: () => {
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
