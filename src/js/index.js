import fancybox from "./fancybox";
import inputmask from "./inputmask";
import scrollTo from "./scrollTo";
import mobile from "./mobile";
import qwizFiles from "./qwizFiles";
import toggle from 'npm-kit-toggle';
import tab from 'npm-kit-tab';
import ripple from 'npm-kit-ripple';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper';
import { throttle } from 'throttle-debounce';
import { WOW } from 'wowjs'

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

	new WOW({
		animateClass: 'animate__animated'
	}).init()

	const throttledMousemoveHandler = throttle(1000 / 30, mousemoveHandler)
	document.addEventListener('mousemove', throttledMousemoveHandler)
}

function mousemoveHandler(event) {
	if (!event.target.closest('.image-scale')) return;
	const $block = event.target.closest('.image-scale')
	const rect = $block.getBoundingClientRect()
	const offsetX = rect.width * 0.2;
	const offsetY = rect.height * 0.2;

	const [x, y] = [event.clientX - rect.left, event.clientY - rect.top]
	const [xPercent, yPercent] =
		[
			100 * (x - offsetX) / (rect.width - offsetX * 2),
			100 * (y - offsetY) / (rect.height - offsetY * 2)
		]
			.map((p) => Math.min(p, 100))
			.map((p) => Math.max(p, 0))

	$block.style.setProperty('--x-percent', xPercent)
	$block.style.setProperty('--y-percent', yPercent)
}

