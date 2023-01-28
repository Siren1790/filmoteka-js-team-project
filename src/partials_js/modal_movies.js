// heart icon

let heartOn = document.querySelector('#heart');

heartOn.addEventListener(
  'click',
  () => (heartOn.style.backgroundColor = '#f8d792e5')
);

// modal - do later

// window.addEventListener('keydown', closeModalHandler);

// function closeModalHandler(e) {
//   if (e.code === 'Escape') {
//     modal.close();
//     window.removeEventListener('keydown', closeModalHandler);
//   }
// }
