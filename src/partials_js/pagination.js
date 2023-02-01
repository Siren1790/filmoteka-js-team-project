import { movie } from './api';
import { refs } from './refs';

import { fetchData } from './main';

const HIDE_STYLES = "opacity: 0; position: relative; z-index: -100";
const DEFAULT_STYLES = "opacity: 1; position: relative; z-index: 1";

document.addEventListener('click', (e) => {
  const target = e.target.closest('.item-pagination');
  const isTargetCorrect = target && target.parentElement.classList.contains(refs.paginationWrapperNode.classList.value);

  if (isTargetCorrect) {

    if (target.textContent === '...') return;

    movie.setCurrentPage(parseInt(target.textContent));

    fetchData();
  }
});

const getPrevValues = (currentPage) => {
  if (currentPage >= 5) {
    return ['...', currentPage -2, currentPage -1]
  }
  //
  if (currentPage > 2 && currentPage < 5){
    return ["...", currentPage -1]
  }

  if(currentPage <= 2){
    return['...']
  }

  return [currentPage -2, currentPage -1]
};

const getNextValues = (currentPage) => {
  return [currentPage + 1, currentPage + 2, '...'];
};

const getPaginationValues = (currentPage, total_pages = 1000) => {
  if (currentPage === total_pages || currentPage === 999 || currentPage === 998 || currentPage === 997) {
    refs.nextPaginationNode.style.cssText = HIDE_STYLES
    return ['...', total_pages - 5, total_pages - 4, total_pages - 3, total_pages - 2, total_pages - 1]

  }

  if (currentPage === 1) {
    refs.prevPaginationNode.style.display = 'none';
    return [2, 3, 4, 5, 6, '...'];
  }

  refs.nextPaginationNode.style.cssText = DEFAULT_STYLES;
  refs.prevPaginationNode.style.cssText = DEFAULT_STYLES;
  return [getPrevValues(currentPage), currentPage, getNextValues(currentPage)];
};

const preparePaginationDynamicList = () => {
  const { currentPage, total_pages } = movie;
  refs.paginationWrapperNode.innerHTML = '';

  const paginationValues = getPaginationValues(currentPage, total_pages);
  let nodesArray;

  nodesArray = paginationValues.flat(1).map((value) => {
    return `<li class="item-pagination"><button class="btn-pagination ${currentPage === value ? 'active' : ''}">${value}</button></li>`
  });
  renderPaginationDynamicList(nodesArray);
};

const renderPaginationDynamicList = (nodes) => {
  if (refs.paginationWrapperNode.childNodes.length > 0){
    refs.paginationWrapperNode.innerHTML = null;
  }
  if (nodes.length !== 0){
    refs.paginationWrapperNode.insertAdjacentHTML('afterbegin', nodes.join("").replace(',', '.'))
  }
};

[refs.prevPaginationNode, refs.nextPaginationNode].map((node) => {
  node && node.addEventListener('click', async () => {
    const pageValue = node.classList.value.includes('prev') ? (movie.currentPage -= 1) : (movie.currentPage += 1);

    movie.setCurrentPage(pageValue);

    const data = movie.isSearched ? await movie.fetchSearchMovies() : await movie.fetchTrendingMovies()

    if (data.results.length) {
      fetchData(data.results);
    }
  })
});

[refs.lastPaginationItemNode, refs.firstPaginationItemNode].map((node) => {
  node && node.addEventListener('click', async (e) => {
    movie.setCurrentPage(parseInt(e.target.textContent));

    const data = await movie.fetchTrendingMovies();

    if (data.results.length) {
      fetchData(data.results);
    }
  })
});
// Replace with init method
if(refs.lastPaginationItemNode != null){
  refs.lastPaginationItemNode.innerText  = '1000';
}

export { preparePaginationDynamicList };
