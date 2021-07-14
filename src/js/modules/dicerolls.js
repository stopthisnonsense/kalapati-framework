import { d4, d20 } from './dice';
import { modifier } from './modifiers';
const attack = (attacker, target, attackModifier = 10, ac = 10) => {
	if ((attacker, target == null)) return;
	let roll = d20 + modifier(attackModifier);
	if (roll >= ac) {
		console.log(
			`${attacker.name} hit ${target.name}! raw roll: ${roll} against AC ${ac}`
		);
		return true;
	}
	console.log(
		`${attacker.name} missed ${target.name}! raw roll: ${roll} against AC ${ac}`
	);
	return false;
};
// console.log(attack());
const damage = (
	attacker,
	target,
	attackModifier = 10,
	damageModifier = 0,
	ac = 10,
	weapon = d4
) => {
	if ((attacker, target, target.hp == null)) return;
	const attackRoll = attack(attacker, target, attackModifier, ac);
	const damageNumber = weapon + damageModifier;

	if (attackRoll == false) return;

	target.hp - damageNumber;
	console.log(`${target.name}'s hp is now ${target.hp}`);
	console.log(target);
	return `${target.name} lost ${damageNumber}hp`;
};
export { attack, damage };
