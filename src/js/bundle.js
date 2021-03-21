'use strict';

const load = () => {
	const clickerButton = document.getElementById('clicker');
	const numbers = {
		clicks: 0,
		x: 0,
		y: 0,
		z: 0,
	};
	const infoUpdate = () => {
		for (const divId in numbers) {
			let div = divId;

			div = document.getElementById(div);
			if (div) {
				div.innerHTML = `${divId} = ${numbers[divId]}`;
			}
		}
	};

	clickerButton.addEventListener('click', () => {
		numbers.clicks += 1;
		numbers.x = round(
			numbers.clicks + 0.01 * round(numbers.y * (0.01 * numbers.z))
		);
		if (numbers.clicks % 10 == 0) {
			numbers.y += 1;
			console.log(`number Y is: ${numbers.y}`);
		}
		if (numbers.y % 10 == 0 && numbers.clicks % 10 == 0) {
			numbers.z += 1;
			console.log(`number Z is: ${numbers.z}`);
		}
		console.log(numbers.x);
		infoUpdate();
		// alert('it work!');
	});
	setInterval(() => {
		numbers.clicks++;
		numbers.x = round(
			numbers.clicks + 0.01 * round(numbers.y * (0.01 * numbers.z))
		);
		if (numbers.clicks % 10 == 0) {
			numbers.y += 1;
			console.log(`number Y is: ${numbers.y}`);
		}
		if (numbers.y % 10 == 0 && numbers.clicks % 10 == 0) {
			numbers.z += 1;
			console.log(`number Z is: ${numbers.z}`);
		}
		infoUpdate();
	}, 1000);

	function round(value, decimals = 2) {
		return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
	}
};
load();
