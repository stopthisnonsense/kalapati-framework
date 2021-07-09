import { d4 } from './dice';

class Weapon {}

const club = {
	name: 'Club',
	cost: 1,
	damage: d4,
	weight: 2,
	properties: ['light'],
};

export { club };
