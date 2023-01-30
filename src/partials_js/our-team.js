// import * as basicLightbox from 'basiclightbox';
// import catharinaUrl from '../images/catharina.jpeg';
// import glebUrl from '../images/gleb.jpeg';
// import hannaaUrl from '../images/hanna.jpeg';
// import olegUrl from '../images/oleg.jpeg';
// import spartakUrl from '../images/spartak.jpeg';
// import spriteUrl from '../images/sprite.svg';

// const markup = `<div class="team-container"><div class="team-card">
//     <img src="${catharinaUrl}" alt="Catharina" class="team-image">
//     <p class="team-name">Catharina</p>
//     <p class="team-role">Developer</p>
//     <a href="#" target="_blank" class="git-link"><svg class="git-logo" width="20" height="20">
//       <use href="${spriteUrl}#github"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${glebUrl}" alt="Gleb" class="team-image">
//     <p class="team-name">Gleb</p>
//     <p class="team-role">Developer</p>
//     <a href="#" target="_blank" class="git-link"><svg class="git-logo" width="20" height="20">
//       <use href="${spriteUrl}#github"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${hannaaUrl}" alt="Hanna" class="team-image">
//     <p class="team-name">Hanna</p>
//     <p class="team-role">Developer</p>
//     <a href="#" target="_blank" class="git-link"><svg class="git-logo" width="20" height="20">
//       <use href="${spriteUrl}#github"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${olegUrl}" alt="Oleg" class="team-image">
//     <p class="team-name">Oleg</p>
//     <p class="team-role">Developer</p>
//     <a href="#" target="_blank" class="git-link"><svg class="git-logo" width="20" height="20">
//       <use href="${spriteUrl}#github"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${spartakUrl}" alt="Spartak" class="team-image">
//     <p class="team-name">Spartak</p>
//     <p class="team-role">Developer</p>
//     <a href="#" target="_blank" class="git-link"><svg class="git-logo" width="20" height="20">
//       <use href="${spriteUrl}#github"></use>
//     </svg></a>
// </div>
// </div></div>`;

// const teamModalCont = document.querySelector('.js-our-team');

// teamModalCont.addEventListener('click', openTeamModal);

// const teamModal = document.querySelector('.js-underlay');

// function openTeamModal(e) {
//   teamModal.show();

//   window.addEventListener('keydown', closeTeamModalHandler);

//   function closeTeamModalHandler(e) {
//     if (e.code === 'Escape') {
//       teamModal.close();
//       window.removeEventListener('keydown', closeTeamModalHandler);
//     }
//   }
// }

// const closeModalBtn = document.querySelector('#close-button-1');
// const divCard = document.querySelector('.js-modal-window');
// console.log(`divCard-ul`, divCard);
// divCard.addEventListener('click', openModal);

// const modal = document.querySelector('.js-markup__modal');

// const markup = `<div class="movie_card" id="bright">
//             <div class="button-container"><button class="close-button" id='close-button'>Close</button></div>
//             <img class="card__main-poster"
//                 src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" />
//             <div class="info_section">

//                 <h1 class="card__movie-title title">Bright</h1>

//                 <table class="card__movie-info">
//                     <tr class="row">
//                         <td class="row-title">Vote / Votes</td>
//                         <td><span class="votes">7.3</span> / 1260</td>
//                     </tr>
//                     <tr class="row">
//                         <td class="row-title">Popularity</td>
//                         <td>100.2</td>
//                     </tr>
//                     <tr class="row">
//                         <td class="row-title">Original Title</td>
//                         <td>A FISTFUL OF LEAD</td>
//                     </tr>
//                     <tr class="row">
//                         <td class="row-title">Genre</td>
//                         <td>Western</td>
//                     </tr>
//                 </table>

//                 <div class="movie_descr">
//                     <p class="movie-descr__about">About</p>
//                     <p class="movie-descr__text">
//                         Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with
//                         an Orc to find a weapon everyone is prepared to kill for.
//                     </p>
//                 </div>

//                 <ul class="modal-buttons">
//                     <li><button type="button" class="watch-btn">Add to Watched</button></li>
//                     <li><button type="button" class="queue-btn">Add to queue</button></li>
//                 </ul>

//                 <div class="movie_social">
//                     <ul class="social-icons">
//                         <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                 class="bi bi-share" viewBox="0 0 16 16">
//                                 <path
//                                     d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
//                             </svg></li>
//                         <li class="heart-box"><svg id="heart" class="icon icon-heart" xmlns="http://www.w3.org/2000/svg"
//                                 width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//                                 <path
//                                     d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
//                             </svg></li>
//                     </ul>
//                 </div>
//             </div>
//             <!-- <button class="close-button" id='close' onClick='closeDialog()'>Close</button> -->
//         </div>`;

// function openModal(event) {
//   if (event.currentTarget == event.target) return;
//   modal.innerHTML = markup;
//   // modal.remove = false;
//   modal.classList.remove('visually-hidden');
// }

const modalTeam = document.querySelector('.js-underlay');
const teamOpenModal = document.querySelector('.js-our-team');

teamOpenModal.addEventListener('click', openTeam);

function openTeam(event) {
  if (event.currentTarget == event.target) return;
  //   modalTeam.innerHTML = markupTeam;
  modalTeam.classList.remove('.visually-hidden');
}

window.addEventListener('keydown', closeTeamModalHandler);
modalTeam.addEventListener('click', closeTeamModal);
const modalTeamItself = document.querySelector('.our-team-modal');

function closeTeamModalHandler(e) {
  if (e.code === 'Escape') {
    modalTeam.classList.add('.visually-hidden');
  }
}

function closeTeamModal(e) {
  if (e.target === e.currentTarget) {
    modalTeam.classList.add('.visually-hidden');
  } else return;
}
