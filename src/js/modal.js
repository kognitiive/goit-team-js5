import modalCard from '../templates/modal.hbs';
import makeMarkupModal from './makeMarkupModal';
import * as basicLightBox from 'basiclightbox';
import { trailer } from './/trailer';

//-------- Масиви для локал сторидж ----

const filterWatched = JSON.parse(localStorage.getItem('watchedFilmsArray'));
const filterQueue = JSON.parse(localStorage.getItem('queueFilmsArray'));
const watchedFilmsArray = filterWatched === null ? [] : filterWatched;
const queueFilmsArray = filterQueue === null ? [] : filterQueue;
//---------
export let eTargetDatasetId = null;

export default async function openModal(e) {
  e.preventDefault();
  const backdrop = document.querySelector('.js-overlay-modal')
  eTargetDatasetId = e.target.dataset.id;
  const data = await makeMarkupModal(e.target.dataset.id)
  const markup = modalCard(data);
  backdrop.innerHTML = ''

  backdrop.insertAdjacentHTML('beforeend', markup)
  const btnW = document.querySelector('#watchedInModal')
  const btnQ = document.querySelector('#queueInModal')
  const modalBtnClose = document.querySelector('.js-modal-close');
  const modal = document.querySelector('.modal');
  const btnModalTrailer = document.querySelector('.button-trailer');
  const instance = basicLightBox.create(document.querySelector('#modal-window'),
    {
      onShow: (instance) => {

          if(filterWatched !== null){
            for (let i = 0; i < filterWatched.length; i+=1){
              if (filterWatched[i].id === Number(e.target.dataset.id)) {
                btnW.textContent= "DELETE OF WATCHED";
              };
          }
          }

          if(filterQueue !== null){
            for (let i = 0; i < filterQueue.length; i+=1){
              if (filterQueue[i].id === Number(e.target.dataset.id)) {
                btnQ.textContent= "DELETE OF QUEUE";
              };
            }
          }

// -------- Код додавання обраних фільмів в локал сторидж ------
    modal.addEventListener('click', addToLocalStorage)
        
    function addToLocalStorage(event) {

          if(event.target.id === 'watchedInModal'){

            if (event.target.textContent === 'DELETE OF WATCHED'){

              for (let i = 0; i < filterWatched.length; i+=1){
                if (filterWatched[i].id === Number(e.target.dataset.id)) {
                  watchedFilmsArray.splice(i, 1)
                  localStorage.setItem("watchedFilmsArray", JSON.stringify(watchedFilmsArray))
                  btnW.textContent= "ADD TO WATCHED";
                };

            }
          } else{
            btnW.textContent = "DELETE OF WATCHED"
            watchedFilmsArray.push(data)
            localStorage.setItem("watchedFilmsArray", JSON.stringify(watchedFilmsArray))
          }
            }

           if(event.target.id === 'queueInModal'){
            if (event.target.textContent === 'DELETE OF QUEUE'){
              
                for (let i = 0; i < filterQueue.length; i+=1){
                  if (filterQueue[i].id === Number(e.target.dataset.id)) {
                    queueFilmsArray.splice(i, 1)
                    localStorage.setItem("queueFilmsArray", JSON.stringify(queueFilmsArray))
                    btnQ.textContent= "ADD TO QUEUE";
                  };
              }
            } else {
              btnQ.textContent = "DELETE OF QUEUE"
              queueFilmsArray.push(data)
              localStorage.setItem("queueFilmsArray", JSON.stringify(queueFilmsArray))
            }
          }
          
        } else {
          btnQ.textContent = "DELETE OF QUEUE"
          queueFilmsArray.push(data)
          localStorage.setItem("queueFilmsArray", JSON.stringify(queueFilmsArray))
        }
        
      }
    }
    //-----------
    backdrop.classList.add('active')
    modal.classList.add('active')
    
    window.addEventListener('keydown', onEscapeButtonClick);
    backdrop.addEventListener('click', onBackDropClick);
    modalBtnClose.addEventListener('click', onModalBtnClose)
  },
  onClose:  (instance) => {
    window.removeEventListener('keydown', onEscapeButtonClick);
    backdrop.removeEventListener('click', onBackDropClick);
    modalBtnClose.removeEventListener('click', onModalBtnClose);
  }
});
btnModalTrailer.addEventListener('click', trailer);//====================
  function onEscapeButtonClick(e) {
    if (e.code === 'Escape') {
      backdrop.classList.remove('active');
      modal.classList.remove('active')
      instance.close();
    }
  }
  function onBackDropClick(e) {
    backdrop.classList.remove('active');
    modal.classList.remove('active')
    instance.close();
  }
  function onModalBtnClose(e) {
  backdrop.classList.remove('active');
  modal.classList.remove('active')
  instance.close();
}

  instance.show();
}
