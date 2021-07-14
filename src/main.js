import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import {
	rollDice,
	d2,
	d4,
	d6,
	d8,
	d10,
	d12,
	d20,
	d100,
} from './js/modules/dice';
import { goblin } from './js/modules/monster';
import { paddedArmor } from './js/modules/armor';
import { club } from './js/modules/weapons';
import { damage } from './js/modules/dicerolls';
// import { modifier } from './js/modules/modifiers';

console.log(rollDice(), d2, d4, d6, d8, d10, d12, d20, d100);
console.log(goblin);
console.log(paddedArmor);
console.log(club, club.damage);
console.log(
	damage(goblin, goblin, goblin.str, goblin.ac)
	// modifier(goblin.str)
);

// const character = {};

createApp(App)
	.use(store)
	.use(router)
	.mount('#app');
