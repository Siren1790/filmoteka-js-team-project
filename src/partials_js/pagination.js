import { preloaderHide, preloaderShow } from './spinner';
import { movie } from './api';
import { refs } from './refs';
import createMarkupCardsFilms from './createMarkupCardsFilms';
import { saveLocalStorageMovies } from './local_storage';

import { fetchData } from './main';

const HIDE_STYLES = 'opacity: 0; position: relative; z-index: -100'; // сховати кнопку
const DEFAULT_STYLES = 'opacity: 1; position: relative; z-index: 1'; // показати кнопку

document.addEventListener('click', e => {
  //реакція на кнопки які нарисовані динамічно
  const target = e.target.closest('.item-pagination');
  const isTargetCorrect =
    target &&
    target.parentElement.classList.contains(
      refs.paginationWrapperNode.classList.value
    );

  if (isTargetCorrect) {
    // нічого не робити, якщо натиснуто на крапки
    if (target.textContent === '...') return;

    movie.setCurrentPage(parseInt(target.textContent)); // тягнемо з кнопки номер
    if (movie.firstRequest) {
      fetchData();
      refs.scrollToTopButton.click();
    } else {
      searchPagination();
      refs.scrollToTopButton.click();
    }
  }
});

const getPrevValues = currentPage => {
  //формуємо другу кнопку
  return ['...', currentPage - 2, currentPage - 1];
};

const getNextValues = (currentPage, total_pages) => {
  //формуємо передостанню кнопку
  return [currentPage + 1, currentPage + 2, '...', total_pages];
};

const getPaginationValues = (currentPage, total_pages) => {
  // формує початковий набір кнопок
  if (currentPage === 1) {
    refs.prevPaginationNode.style.cssText = HIDE_STYLES; // сховати стрілку <--
    refs.nextPaginationNode.style.cssText = DEFAULT_STYLES; // показати стрілку -->
  }
  if (currentPage === total_pages) {
    refs.prevPaginationNode.style.cssText = DEFAULT_STYLES; // показати стрілку <--
    refs.nextPaginationNode.style.cssText = HIDE_STYLES; // сховати стрілку -->
  }
  if (currentPage > 1 && currentPage < total_pages) {
    refs.prevPaginationNode.style.cssText = DEFAULT_STYLES; // показати стрілку <--
    refs.nextPaginationNode.style.cssText = DEFAULT_STYLES; // показати стрілку -->
  }
  if (currentPage === 1 && total_pages > 9)
    return [1, 2, 3, 4, 5, 6, 7, '...', total_pages];
  if (total_pages - currentPage < 4 && total_pages > 9)
    return [
      1,
      '...',
      total_pages - 6,
      total_pages - 5,
      total_pages - 4,
      total_pages - 3,
      total_pages - 2,
      total_pages - 1,
      total_pages,
    ];
  if (currentPage > 1 && currentPage < 5 && total_pages > 9)
    return [1, 2, 3, 4, 5, 6, 7, '...', total_pages];
  if (currentPage > 4 && total_pages > 9)
    return [
      1,
      getPrevValues(currentPage),
      currentPage,
      getNextValues(currentPage, total_pages),
    ];

  if (total_pages > 1 && total_pages < 10) {
    let arr = [];
    for (let i = 1; i <= total_pages; i++) {
      arr[i - 1] = i;
    }
    return arr;
  }
};

const preparePaginationDynamicList = () => {
  // відповірає за формування масиву з кнопками
  const currentPage = movie.getCurrentPage();
  const total_pages = movie.getTotalPages();
  refs.paginationWrapperNode.innerHTML = ''; // очищаємо блок для кнопок пагінації
  if (total_pages === 1) {
    refs.prevPaginationNode.style.cssText = HIDE_STYLES; // сховати стрілку <--
    refs.nextPaginationNode.style.cssText = HIDE_STYLES; // сховати стрілку -->
    return;
  }

  const paginationValues = getPaginationValues(currentPage, total_pages);
  let nodesArray;

  nodesArray = paginationValues.flat(1).map(value => {
    // формує масив кнопок
    return `<li class="item-pagination"><button class="btn-pagination ${
      currentPage === value ? 'active' : ''
    }">${value}</button></li>`;
  });
  renderPaginationDynamicList(nodesArray); // ТУТ МАЛЮЄМО КНОПКИ
};

const renderPaginationDynamicList = nodes => {
  // відповірає за малювання кнопок
  if (refs.paginationWrapperNode.childNodes.length > 0) {
    refs.paginationWrapperNode.innerHTML = null;
  }
  if (nodes.length !== 0) {
    refs.paginationWrapperNode.insertAdjacentHTML(
      'afterbegin',
      nodes.join('').replace(',', '.')
    );
  }
};

// KEYBOARD PAGINATION
window.addEventListener('keydown', onArrowButtons);
function onArrowButtons(event) {
  if (event.code === 'ArrowLeft' && movie.getCurrentPage() > 1){
    movie.currentPage -= 1;
    refs.scrollToTopButton.click();
  }
    
  if (    event.code === 'ArrowRight' && movie.getTotalPages() > movie.getCurrentPage()){
    movie.currentPage += 1;
    refs.scrollToTopButton.click();
  }
    
  if (movie.firstRequest) {
    fetchData();
  } else {
    searchPagination();
  }
}

[refs.prevPaginationNode, refs.nextPaginationNode].map(node => {
  // відповірає за реакцію на стрілки
  node &&
    node.addEventListener('click', async () => {
      const pageValue = node.classList.value.includes('prev')
        ? (movie.currentPage -= 1)
        : (movie.currentPage += 1);

      if (movie.firstRequest) {
        fetchData();
      } else {
        searchPagination();
      }
    });
});

async function searchPagination() {
  //SEARCH PAGINATION
  preloaderShow();
  const moviesSearch = await movie.fetchSearchMovies();
  saveLocalStorageMovies(moviesSearch);
  movie.setCurrentPage(moviesSearch.page);
  let markup = createMarkupCardsFilms(moviesSearch.results);
  refs.mainMarkFilms.innerHTML = markup;
  preparePaginationDynamicList();
  preloaderHide();
}

export { preparePaginationDynamicList };
