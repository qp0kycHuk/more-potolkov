import fancybox from "./fancybox";
import inputmask from "./inputmask";
import scrollTo from "./scrollTo";
import mobile from "./mobile";
import qwizFiles from "./qwizFiles";
import toggle from 'npm-kit-toggle';
import tab from 'npm-kit-tab';
import ripple from 'npm-kit-ripple';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper';


import '../scss/index.scss';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy]);
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper
window.ripple = ripple
window.addEventListener('load', () => loadHandler())

// new Swiper('',{
// 	slidesPerView
// })

function loadHandler() {
	qwizFiles.init()
	fancybox.init()
	scrollTo.init()
	mobile.init()
	toggle.init()
	tab.init()
	ripple.init()
	inputmask.init(document)

	ripple.attach('.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')
}


