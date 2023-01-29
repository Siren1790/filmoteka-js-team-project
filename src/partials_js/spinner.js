
const preloader = document.querySelector('#preloader');

preloader.classList.add('show-preloader');

window.addEventListener('load', function () {
	setTimeout(function(){
    	preloader.classList.remove('show-preloader');
	}, 2000);
});
