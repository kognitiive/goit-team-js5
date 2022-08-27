// import modal from './templates/modal.hbs';
// // Змінна для фільму, який відкритий в модалці
// let curFilm;

export default function makeMarkupModal(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=39e7639bbdd6f3ff4985c89cb032db66`)
    .then(response => console.log(response.json()));

}

//  function openModal(e) {
//    e.preventDefault();
//    console.log(e.target);
//   fetchModalCard(e.target.dataset.id)
//     .then(data => {
//       if (e.target.nodeName !== 'IMG') return;

//        const markup = modalCard(data);
//        console.log(data);
//        // const modal = basicLightbox.create(markup);

//       // modal.show();
//      });
//  }