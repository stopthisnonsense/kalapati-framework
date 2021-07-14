const rollDice = (number, modifier = 0) => {
	if (number) return Math.ceil(Math.random() * number) + modifier;
	return Math.ceil(Math.random() * 20) + modifier;
};
const multiDice = (numberOfDice, diceSides, modifier = 0) => {
	if (numberOfDice == null) return;
	let finalNumber = 0;

	if (numberOfDice > 0) {
		for (let i = 0; i < numberOfDice; i++) {
			finalNumber += rollDice(diceSides, modifier);
		}
	}
	return finalNumber;
};
const d2 = multiDice(1, 2);
const d4 = multiDice(1, 4);
const d6 = multiDice(1, 6);
const d8 = multiDice(1, 8);
const d10 = multiDice(1, 10);
const d12 = multiDice(1, 12);
const d20 = multiDice(1, 20);
const d100 = multiDice(1, 100);

export { multiDice, rollDice, d2, d4, d6, d8, d10, d12, d20, d100 };
