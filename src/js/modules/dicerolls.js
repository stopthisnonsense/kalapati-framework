import {
	multiDice,
	rollDice,
	d2,
	d4,
	d6,
	d8,
	d10,
	d12,
	d20,
	d100,
} from './dice';
import { modifier } from './modifiers';
const attack = (attacker, target, attackModifier = 10, ac = 10) => {
	let roll = d20 + modifier(attackModifier);
	if (roll >= ac) {
		return `${attacker.name} hit ${target.name}! raw roll: ${roll} against AC ${ac}`;
	} else {
		return `${attacker.name} missed ${target.name}! raw roll: ${roll} against AC ${ac}`;
	}
};

export { attack };
