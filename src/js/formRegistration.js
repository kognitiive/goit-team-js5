const basicLightbox = require('basiclightbox');

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
    return instance.show()
    console.log(5);
}

function onEscCode(event) {
    if (event.code === "Escape") {
        instance.close()
        return
    }
}