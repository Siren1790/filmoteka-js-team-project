import {movie} from './api';
import { refs } from './refs';
import createMarkupCardsFilms from './createMarkupCardsFilms';

refs.lastPaginationItemNode.addEventListener('click', (e) => {
  movie.fetchTrendingMovies(parseInt(e.target.textContent))
      .then(data => {
        preparePaginationDynamicList();

        return renderMovies(data.results)
      });
})
refs.firstPaginationItemNode.addEventListener('click', () => {
movie.fetchTrendingMovies()
      .then(data => {
        preparePaginationDynamicList();

        return renderMovies(data.results)
      });
})

document.addEventListener('click', (e) => {
  const target = e.target.closest('.item-pagination');
  const isTargetCorrect = target && target.parentElement.classList.contains(refs.paginationWrapperNode.classList.value);

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
    // prevPaginationNode.style.display = none;
    return refs.DEFAULT_START_PAGINATION;
  }

  if (movie.isLastPageActive) {
    // nextPaginationNode.style.display = none;
    return refs.DEFAULT_END_PAGINATION;
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
  if (refs.paginationWrapperNode.childNodes.length > 0){
    refs.paginationWrapperNode.innerHTML = null;
  }

  if (nodes.length !== 0){
    refs.paginationWrapperNode.insertAdjacentHTML('afterbegin', nodes.join("").replace(',', '.'))
  }
}

[refs.prevPaginationNode, refs.nextPaginationNode].map((node) => {
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

  refs.lastPaginationItemNode.textContent = total_pages;

  preparePaginationDynamicList();

  renderMovies(results);
});

const renderMovies = (data) => {
  refs.mainMarkFilms.innerHTML = createMarkupCardsFilms(data);
}