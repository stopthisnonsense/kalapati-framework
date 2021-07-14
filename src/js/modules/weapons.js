import { d4 } from './dice';

class Weapon {
	constructor(name, cost, damage = d4, weight, properties = []) {
		if ((name, cost, damage, weight == null)) return;
		this.name = name;
		this.cost = cost;
		this.damage = damage;
		this.weight = weight;
		this.properties = properties;
	}
}

const club = new Weapon('Club', 1, d4, 2, ['light']);

export { club };
