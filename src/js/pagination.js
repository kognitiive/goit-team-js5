import Pagination from 'tui-pagination';
import Notiflix from 'notiflix';
import { onLoadMore } from '..//index';
import { refs } from '..//index';
import { backendRequest } from '..//js/backendRequest';

export const paginat = {
  contain: document.querySelector('#tui-pagination-container'),
  options: {
    totalItems: 1000,//вставити загальну кількіть отриманих фільмів
    itemsPerPage: 20,//тут вставити кількіть фільмів на сторінці 
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
            paginat.options.totalItems / paginat.options.itemsPerPage +
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
    pagination.on('afterMove', event => {
      // if (backendRequest.totalItems <= 20) {
      //   this.contain.classList.add('is-hidden');
      //   return;
      // }
      this.options.totalItems = backendRequest.totalItems;
      this.options.totalPages = Math.ceil(
        this.options.totalItems / this.options.itemsPerPage
      );
      // console.log('totP:',this.options.totalItems, this.options.totalPages);
      // console.log('itemsPerPage1:', this.options.itemsPerPage);
      Notiflix.Loading.dots('Loading...');
      backendRequest.pageNumber = event.page;
      Notiflix.Loading.remove(350);
      onLoadMore();//функція, яка рендерить сторінку
      hidefirstAndLastPages(backendRequest.pageNumber, this.options.totalPages);
    });
  },
};
paginat.pagMake();

function hidefirstAndLastPages(page, totalPage) {
  document.querySelector('.tui-first').classList.remove('is-hidden');
  document.querySelector('.tui-last').classList.remove('is-hidden');
  if (page < 4) {
    // console.log('page:', page);
    document.querySelector('.tui-first').classList.add('is-hidden');
  }
  if (page > totalPage - 3) {
    document.querySelector('.tui-last').classList.add('is-hidden');
  }
  if (totalPage < 6) {
    // console.log('totalPage:', page, '/', totalPage);
    document.querySelector('.tui-first').classList.add('is-hidden');
    document.querySelector('.tui-last').classList.add('is-hidden');
  }
}
