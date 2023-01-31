import {movie} from './api';
import { refs } from './refs';
import createMarkupCardsFilms from './createMarkupCardsFilms';

import { fetchData } from './main';

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
  // 
  if (currentPage > 2 && currentPage < 5){
    return ["...", currentPage -1]
  }

  if(currentPage <= 2){
    return[]
  }

  return [currentPage -2, currentPage -1]
};
const getNextValues = (currentPage) => {
  return [currentPage + 1, currentPage + 2, '...'];
}
const getPaginationValues = (currentPage, total_pages) => {
  // if (movie.isFirstPageActive) {
    if(currentPage == 1){
    return [2, 3, 4, 5, 6];
  }

  if (currentPage == total_pages) {
    // return DEFAULT_END_PAGINATION;
    return [total_pages - 5, total_pages - 4, total_pages - 3, total_pages - 2, total_pages - 1]
  }
  return [getPrevValues(currentPage), currentPage, getNextValues(currentPage)];
}
const preparePaginationDynamicList = () => {
  refs.paginationWrapperNode.innerHTML = '';
  // const { currentPage, total_pages} = movie;
  currentPage = movie.getCurrentPage();
  total_pages = movie.getTotalPages();
  console.log(total_pages);
  refs.lastPaginationItemNode.textContent = total_pages;
  const paginationValues = getPaginationValues(currentPage, total_pages);
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
  // node && node.addEventListener('click', async () => {
    node.addEventListener('click', async () => {
    const pageValue = node.classList.value.includes('prev') ?
      (movie.currentPage -= 1) : (movie.currentPage += 1);
     
          if(movie.firstRequest){
            // movie.setCurrentPage(event.target.textContent);
            fetchData();
          } else{
            // movie.setCurrentPage(event.target.textContent);
            const xxx = await movie.fetchSearchMovies();
            createMarkupCardsFilms(xxx.results);
          }
        })
})


export {preparePaginationDynamicList};