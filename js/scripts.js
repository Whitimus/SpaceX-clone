const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobilenav = document.getElementById('mobile--menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
	btn.classList.toggle('nav-open');
	overlay.classList.toggle('overlay__show');
	document.body.classList.toggle('stop-scroll');
	mobilenav.classList.toggle('show-menu');
}

function scrollPage() {
	const scrollPosition = window.scrollY;

	if (scrollPosition > 100 && !scrollStarted) {
		countUp();
		scrollStarted = true;
	} else if (scrollPosition < 100 && scrollStarted) {
		reset();
		scrollStarted = false;
	}
}
function countUp() {
	counters.forEach((counter) => {
		counter.innerText = '0';
		let updateTime = 1;

		const updateCounter = () => {
			//Get count target
			const target = +counter.getAttribute('data-target');
			//Get current counter value
			const currentValue = +counter.innerText;

			// Calculate distance between current value and target
			const distance = target - currentValue;
			//Create an increment
			let increment = target / 100;
			if (increment < 1) {
				increment = 1;
			}

			if (currentValue / target > 0.97) {
				updateTime = 100;
			}

			//If counter value is less than target add increment
			if (currentValue < target) {
				//Round up and set counter value
				counter.innerText = `${Math.min(
					Math.floor(currentValue + increment),
					target
				)}`;

				setTimeout(updateCounter, updateTime);
			}
		};

		updateCounter();
	});
}

function reset() {
	counters.forEach((counter) => (counter.innerText = '0'));
}
