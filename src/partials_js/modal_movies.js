import {
  saveLocalStorageToWatched,
  saveLocalStorageToQueue,
} from './local_storage';

const closeModalBtn = document.querySelector('#close-button-1');
const divCard = document.querySelector('.js-modal-window');
divCard.addEventListener('click', openModal);

const modal = document.querySelector('.js-markup__modal');

const markup = `    <div class="movie-card" id="bright">
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
                <div class="title-wrapper">
                    <h1 class="card-movie-title">Bright</h1>
                </div>
    
                <table class="card-movie-info">
                    <tr class="row">
                        <td class="row-title">Vote / Votes</td>
                        <td class="row-value"><span class="votes">7.3</span> / 1260</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Popularity</td>
                        <td class="row-value">100.2</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Original Title</td>
                        <td class="row-value row-title-original">
                            fffffffff  fff</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Genre</td>
                        <td class="row-value genres-row">Western Western Western Western Western Western Western Western</td>
                    </tr>
                </table>
    
                <div class="movie-descr">
                    <p class="movie-descr__about">About</p>
                    <p class="movie-descr__text">
                        Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?
                    </p>
                </div>
    
                <div class="desktop-wrapper">
                <ul class="modal-buttons">
                    <li><button type="button" class="watch-btn js-btn-watched">Add to Watched</button></li>
                    <li><button type="button" class="queue-btn js-btn-queue">Add to Queue</button></li>
                </ul>
    
                </div>
            </div>
        </div>
    
    </div>`;

function addEventListenerToBtn() {
  const watchBtn = modal.querySelector('.watch-btn');
  const queueBtn = modal.querySelector('.queue-btn');
  watchBtn.addEventListener('click', saveLocalStorageToWatched);
  queueBtn.addEventListener('click', saveLocalStorageToQueue);
}

function openModal(event) {
  if (event.currentTarget == event.target) return;
  modal.innerHTML = markup;
  modal.classList.remove('visually-hidden');
  document.body.classList.add('stop-scrolling');
  addEventListenerToBtn();
}

window.addEventListener('keydown', closeModalHandler);
modal.addEventListener('click', closeBDModal);
const modalItself = document.querySelector('.movie-card');

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    modal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');
  }
}

function closeBDModal(e) {
  if (e.target === e.currentTarget) {
    modal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');
  } else if (e.target.className === 'close-button') {
    modal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');
  } else return;
}
