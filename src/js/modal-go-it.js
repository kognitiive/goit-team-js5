const basicLightbox = require('basiclightbox');
const openLink = document.querySelector('.footer__link')
const refs = {
    closeBtn: document.querySelector('.window-btn'),
    backdrop: document.querySelector('.window-backdrop'),
    modal: document.querySelector('.window')
}

const instance = basicLightbox.create(
    document.querySelector('#template'),
    {
        onShow: () => {
            window.addEventListener('keydown', onEscCode)
            refs.modal.classList.add('active')
            refs.backdrop.classList.add('active')
            refs.closeBtn.addEventListener('click', onBtnClose)
            refs.backdrop.addEventListener('click', onBackdropClose)
        },

        onClose: () => {
            refs.modal.classList.remove('active')
            refs.backdrop.classList.remove('active')
            window.removeEventListener('keydown', onEscCode)
            refs.closeBtn.removeEventListener('click', onBtnClose)
            refs.backdrop.removeEventListener('click', onBackdropClose)
        }
    }
)
openLink.addEventListener('click', openModal)
function openModal(e) {
    e.preventDefault()
    return instance.show()
}
function onEscCode(event) {
    if (event.code === "Escape") {
      return instance.close()
        
    }
}
function onBackdropClose(e) {
    if (e.currentTarget === e.target) {
      return instance.close()
    }
}

function onBtnClose(e) {
    return instance.close()
}