
import { refs } from "./refs";

const preloaderHide = () => {
	refs.preloader.classList.remove('show-preloader');
}

const preloaderShow = () => {
	refs.preloader.classList.add('show-preloader');
}

export { preloaderHide, preloaderShow }

