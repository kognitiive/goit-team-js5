import axios from 'axios';
import modalCard from '../templates/modal.hbs';
import { BasicLightBox } from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import modal from './modal';

const modalWindow = document.querySelector('.modal__content');
const modalButton = document.querySelectorAll('.js-open-modal');
 modalButton.forEach(item => item.addEventListener('click', openModal));

async function makeMarkupModal(id) {
   const data = await axios.get()
 }

function openModal(e) {
  e.preventDefault();

}