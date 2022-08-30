import * as basicLightbox from 'basiclightbox';
import { fetchTrailers } from './fetchTrailer';
import { eTargetDatasetId } from './modal';
export async function trailer() {

const film = await fetchTrailers(eTargetDatasetId);

trailerRender(film.data);
}

export function trailerRender(data) {
  
  const instance = basicLightbox.create(
    `<div class="modal-trailer__backdrop">
          <iframe class="iframe" width="900" height="580" frameborder="0" allowfullscreen allow='autoplay'
            src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" >
          </iframe>
    </div>`,
    {
      onShow: instance => {
        instance.element().onclick = instance.close;
        document.addEventListener('keydown', onEscClose);
      },
    },
    {
      onClose: instance => {
        document.removeEventListener('keydown', onEscClose);
      },
    }
  );
  function onEscClose(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
    instance.show();
}
