// Назначаю константы для отслеживания элементов документа
const target = document.querySelector("footer");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;


// При скроле на сайте запускает функцию подсчета проскроленыз пикселей
window.onscroll = function() {scrollFunction()};


// При скроле более 2500 пиксейлей заменяет класс у кнопки наверх и делает её видимой, если открутить назад, то кнопка скрывается
function scrollFunction() {
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}


// Функция скрола наверх страницы при клике на кнопку
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);