
import { Movie } from './partials_js/api';
import { Genres } from './partials_js/genres';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';

const mainMarkFilms = document.querySelector('.list-films');
const paginationWrapperNode = document.querySelector('.render-pagination-list');
const lastPaginationItemNode = document.querySelector('.last-page');

const prevPaginationNode = document.querySelector('.btn-arrow-prev');
const nextPaginationNode = document.querySelector('.btn-arrow-next');

const DEFAULT_START_PAGINATION = [2,3,4,5,6];
const DEFAULT_END_PAGINATION = [1995,1996,1997,1998,1999];

const movie = new Movie({
  searchValue: '',
});

document.addEventListener('click', (e) => {
  const target = e.target.closest('.item-pagination');
  const isTargetCorrect = target && target.parentElement.classList.contains(paginationWrapperNode.classList.value);

  if (isTargetCorrect) {
    if(target.textContent === '...') return;

    movie.fetchTrendingMovies(parseInt(target.textContent))
      .then(data => {
        preparePaginationDynamicList();

        return renderMovies(data.results)
      });
  }
});

const getPrevValues = (currentPage) => {
  if (currentPage >= 5) {
    return ['...', currentPage -2, currentPage -1]
  }

  return [currentPage -2, currentPage -1]
};

const getNextValues = (currentPage) => {
  return [currentPage + 1, currentPage + 2, '...'];
}

const getPaginationValues = (currentPage = 1) => {
  if (movie.isFirstPageActive) {
    return DEFAULT_START_PAGINATION;
  }

  if (movie.isLastPageActive) {
    return DEFAULT_END_PAGINATION;
  }

  return [getPrevValues(currentPage), currentPage, getNextValues(currentPage)];
}

const preparePaginationDynamicList = () => {
  const { currentPage } = movie;
  const paginationValues = getPaginationValues(currentPage);
  let nodesArray;

  nodesArray = paginationValues.flat(1).map((value) => {
    return `<li class="item-pagination"><button class="btn-pagination ${currentPage === value ? 'active' : ''}">${value}</button></li>`
  });

  renderPaginationDynamicList(nodesArray);
}

const renderPaginationDynamicList = (nodes) => {
  if (paginationWrapperNode.childNodes.length > 0){
    paginationWrapperNode.innerHTML = null;
  }

  if (nodes.length !== 0){
    paginationWrapperNode.insertAdjacentHTML('afterbegin', nodes.join("").replace(',', '.'))
  }
}

[prevPaginationNode, nextPaginationNode].map((node) => {
  node && node.addEventListener('click', () => {
    const pageValue = node.classList.value.includes('prev') ?
      (movie.currentPage -= 1) : (movie.currentPage += 1);

    movie.fetchTrendingMovies(pageValue)
      .then(data => {
        preparePaginationDynamicList();

        return renderMovies(data.results)
      });
  })
})


movie.init().then(data => {
  const { results, total_pages } = data;

  lastPaginationItemNode.textContent = total_pages;

  preparePaginationDynamicList();

  renderMovies(results);
});

const renderMovies = (data) => {
  mainMarkFilms.innerHTML = createMarkupCardsFilms(data);
}