const basicLightbox = require('basiclightbox');
const refs = {
    openLink: document.querySelector('.footer__link'),
    closeBtn: document.querySelector('.window-btn'),
    backdrop: document.querySelector('.window-backdrop'),
}

const instance = basicLightbox.create(
    document.querySelector('#template'),
    {
        onShow: () => {
            window.addEventListener('keydown', onEscCode)
            instance.element().querySelector('.window-btn').onclick = instance.close
        },

        onClose: () => {
            window.removeEventListener('keydown', onEscCode)
        }
    }
)
refs.openLink.addEventListener('click', openModal)
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
