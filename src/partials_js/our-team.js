const modalTeam = document.querySelector('.js-underlay');
const teamOpenModal = document.querySelector('.js-our-team');

teamOpenModal.addEventListener('click', openTeam);

function openTeam(event) {
  modalTeam.classList.remove('visually-hidden');
}

window.addEventListener('keydown', closeTeamModalHandler);
modalTeam.addEventListener('click', closeTeamModal);
const modalTeamItself = document.querySelector('.our-team-modal');

function closeTeamModalHandler(e) {
  if (e.code === 'Escape') {
    modalTeam.classList.add('visually-hidden');
  }
}

function closeTeamModal(e) {
  if (e.target === e.currentTarget) {
    modalTeam.classList.add('visually-hidden');
  } else return;
}
