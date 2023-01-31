const closeModalBtn = document.querySelector('#close-button-1');
const divCard = document.querySelector('.js-modal-window');
divCard.addEventListener('click', openModal);

const modal = document.querySelector('.js-markup__modal');

const markup = `<div class="movie-card" id="bright">
            <div class="button-wrapper">
                <div class="button-container">
                    <button class="close-button" id='close-button'>Close</button>
                </div>
                <div class="button-container">
                    <button class="watch-trailer js-watch-trailer" id='watch-trailer'>Watch Trailer</button>
                </div>
            </div>

            <div class="info-wrapper">

                <div class="#">
                    <img class="card-main-poster"
                    src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" />
                </div>

                <div class="info-section">
                    <h1 class="card-movie-title">Brightfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</h1>

                    <table class="card-movie-info">
                        <tr class="row">
                            <td class="row-title">Vote / Votes</td>
                            <td class="row-value" ><span class="votes">7.3</span> <span class="row-slash">/</span> 1260</td>
                        </tr>
                        <tr class="row">
                            <td class="row-title">Popularity</td>
                            <td class="row-value">100.2</td>
                        </tr>
                        <tr class="row">
                            <td class="row-title">Original Title</td>
                            <td class="row-value row-title-original">fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</td>
                        </tr>
                        <tr class="row">
                            <td class="row-title">Genre</td>
                            <td class="row-value">Western</td>
                        </tr>
                    </table>

                    <div class="movie-descr">
                        <p class="movie-descr__about">About</p>
                        <p class="movie-descr__text">
                        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with
                        an Orc to find a weapon everyone is prepared to kill for.
                        </p>
                    </div>

                    <ul class="modal-buttons">
                        <li><button type="button" class="watch-btn js-btn-watched">Add to Watched</button></li>
                        <li><button type="button" class="queue-btn js-btn-queue">Add to Queue</button></li>
                    </ul>

                    <div class="movie-social">
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
            </div>

        </div>`;

function openModal(event) {
  if (event.currentTarget == event.target) return;
  modal.innerHTML = markup;
  modal.classList.remove('visually-hidden');
}

window.addEventListener('keydown', closeModalHandler);
modal.addEventListener('click', closeBDModal);
const modalItself = document.querySelector('.movie-card');

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    modal.classList.add('visually-hidden');
  }
}

function closeBDModal(e) {
  if (e.target === e.currentTarget) {
    modal.classList.add('visually-hidden');
  } else if (e.target.className === 'close-button') {
    modal.classList.add('visually-hidden');
  } else return;
}
