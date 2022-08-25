import Pagination from 'tui-pagination';
import Notiflix from 'notiflix';
Notiflix.Loading.init({ svgColor: $accent-color });

export const paginat = {
  contain: document.querySelector('#tui-pagination-container'),
  options: {
    totalItems: '', // присвоїти значення з респонса
    itemsPerPage: 20, //можливо зробити одну константу на всі запити
    visiblePages: 5,
    centerAlign: true,
    totalPages: '',
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton: type => {
        let template = '';

        if (type.type === 'first') {
          template =
            '<a href="#" class=" tui-page-btn tui-first">' +
            '<span class="tui-ico-first">1</span>' +
            '</a>';
        }
        if (type.type === 'prev') {
          template =
            '<a href="#" class="arrow tui-page-btn tui-prev tui-first-child">' +
            '<span class="material-icons">arrow_back</span>' +
            '</a>';
        }

        if (type.type === 'next') {
          template =
            '<a href="#" class="arrow tui-page-btn tui-next">' +
            '<span class="material-icons">arrow_forward</span>' +
            '</a>';
        }

        if (type.type === 'last') {
          template =
            '<a href="#" class=" tui-page-btn tui-last">' +
            '<span class="tui-ico-last">' +
            Math.ceil(
              paginat.options.totalItems / paginat.options.itemsPerPage
            ) +
            '</span>' +
            '</a>';
        }

        return template;
      },
      disabledMoveButton:
        '<span class=" is-hidden tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip dots">' +
        '<span class="material-icons">more_horiz</span>' +
        '</a>',
    },
  },
  pagMake: function () {
    const pagination = new Pagination(this.contain, this.options);
    if (this.options.totalItems <= this.options.itemsPerPage) {
      //якщо всі елементи вміщаються на одній сторінці, то паг-ція не потрібна
      this.contain.classList.add('is-hidden');
      return;
    }
    hidefirstAndLastPages(1, this.options.totalPages);
    Notiflix.Loading.dots('Loading...'); // нотіфлікси можна і в іншу функцію забрати
    Notiflix.Loading.remove(350);
    pagination.on('afterMove', event => {
      Notiflix.Loading.dots('Loading...');
      backendRequest.pageNumber = event.page; // передаємо значення вибраної сторінки в fetch-функцію
      onLoadMore();
      Notiflix.Loading.remove(350);
      hidefirstAndLastPages(event.page, this.options.totalPages);
    });
  },

  pagUnsubscribe: function () {
    pagination.off('afterMove', pagMake);
  },
  // або ця, здається працюють обидві, хоча pagination.off не знайшов в документації
  pagReset: function () {
    pagination.reset(pagMake);
  },
};
// paginat.pagMake();

// керує видимістю крайніх елементів, усуває їх задвоєння
function hidefirstAndLastPages(page, totalPage) {
  document.querySelector('.tui-first').classList.remove('is-hidden');
  document.querySelector('.tui-last').classList.remove('is-hidden');
  if (page < 4) {
    document.querySelector('.tui-first').classList.add('is-hidden');
  }
  if (page > totalPage - 3) {
    document.querySelector('.tui-last').classList.add('is-hidden');
  }
  if (totalPage < 6) {
    document.querySelector('.tui-first').classList.add('is-hidden');
    document.querySelector('.tui-last').classList.add('is-hidden');
  }
}
