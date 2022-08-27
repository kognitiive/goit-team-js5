export const refs = {
    openLink: document.querySelector('.footer__link'),
    closeBtn: document.querySelector('.window-svg--close'),
}

function openModalWindow() { }

function closeModalWindow() { }

refs.openLink.addEventListener('click', openModalWindow())
refs.closeBtn.addEventListener('click', closeModalWindow())

