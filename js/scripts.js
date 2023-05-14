const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobilenav = document.getElementById('mobile--menu');

btn.addEventListener('click', navToggle);

function navToggle() {
	btn.classList.toggle('nav-open');
	overlay.classList.toggle('overlay__show');
	document.body.classList.toggle('stop-scroll');
	mobilenav.classList.toggle('show-menu');
}
