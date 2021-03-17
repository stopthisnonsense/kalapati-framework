'use strict';

const load = () => {
	const clickerButton = document.getElementById('clicker');
	const numbers = {
		clicks: 0,
		x: 0,
		y: 0,
	};
	clickerButton.addEventListener('click', () => {
		numbers.x += 1 + numbers.y;
		numbers.clicks += 1;
		if (numbers.clicks % 10 == 0) {
			numbers.y += 1;
			console.log(`number Y is: ${numbers.y}`);
		}
		console.log(numbers.x);
		// alert('it work!');
	});
};
load();
