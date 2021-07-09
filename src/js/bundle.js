import { rollDice, d2, d4, d6, d8, d10, d12, d20, d100 } from './modules/dice';
import { goblin } from './modules/monster';
import { paddedArmor } from './modules/armor';
import { club } from './modules/weapons';
import { attack } from './modules/dicerolls';
import { modifier } from './modules/modifiers';

console.log(rollDice(), d2, d4, d6, d10, d12, d20, d100);
console.log(goblin);
console.log(paddedArmor);
console.log(club, club.damage);
console.log(
	attack(goblin, goblin, goblin.str, goblin.ac)
	// modifier(goblin.str)
);

const character = {};
