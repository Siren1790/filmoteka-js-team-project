// heart icon

let heartOn = document.querySelector('#heart');

heartOn.addEventListener(
  'click',
  () => (heartOn.style.backgroundColor = '#f8d792e5')
);

// modal - do later

import * as basicLightbox from 'basiclightbox';
// import modalURL from '../partials_html/modal.html';

const markup = `<div class="backdrop-modal is-open">
    
<a href="#">
        <div class="movie_card" id="bright">
            <div class="button-container"><button class="close-button" id='close-button'>Close</button></div>
            <img class="card__main-poster"
                src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" />
            <div class="info_section">
        
                <h1 class="card__movie-title title">Bright</h1>
        
                <table class="card__movie-info">
                    <tr class="row">
                        <td class="row-title">Vote / Votes</td>
                        <td><span class="votes">7.3</span> / 1260</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Popularity</td>
                        <td>100.2</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Original Title</td>
                        <td>A FISTFUL OF LEAD</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Genre</td>
                        <td>Western</td>
                    </tr>
                </table>
        
                <div class="movie_descr">
                    <p class="movie-descr__about">About</p>
                    <p class="movie-descr__text">
                        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with
                        an Orc to find a weapon everyone is prepared to kill for.
                    </p>
                </div>
        
                <ul class="modal-buttons">
                    <li><button type="button" class="watch-btn">Add to Watched</button></li>
                    <li><button type="button" class="queue-btn">Add to queue</button></li>
                </ul>
        
                <div class="movie_social">
                    <ul class="social-icons">
                        <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-share" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                            </svg></li>
                        <li class="heart-box"><svg id="heart" class="icon icon-heart" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg></li>
                    </ul>
                </div>
            </div>
            <!-- <button class="close-button" id='close' onClick='closeDialog()'>Close</button> -->
        </div>
</a>
</div>`;
const container = document.querySelector('#');

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}