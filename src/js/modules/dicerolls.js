import { d4, d20 } from './dice';
import { modifier } from './modifiers';
const attack = (attacker, target, attackModifier = 10, ac = 10) => {
	let roll = d20 + modifier(attackModifier);
	if (roll >= ac) {
		console.log(
			`${attacker.name} hit ${target.name}! raw roll: ${roll} against AC ${ac}`
		);
		return true;
	} else {
		console.log(
			`${attacker.name} missed ${target.name}! raw roll: ${roll} against AC ${ac}`
		);
		return false;
	}
};

const damage = (
	attacker,
	target,
	attackModifier = 10,
	ac = 10,
	weapon = d4
) => {
	let attackRoll = attack(attacker, target, attackModifier, ac);
	if (attackRoll == true) {
		let damageNumber = weapon;
		if (typeof target.hp == 'number') {
			target.hp - damageNumber;
			console.log(`${target.name}'s hp is now ${target.hp}`);
			console.log(target);
			return `${target.name} lost ${damageNumber}hp`;
		}
	}
	return;
};
export { attack, damage };
