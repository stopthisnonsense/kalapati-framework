class Armor {
	constructor(name, type, cost, ac, str, disadvantage, weight) {
		this.name = name;
		this.type = type;
		this.cost = cost;
		this.ac = ac;
		this.str = str;
		this.disadvantage = disadvantage;
		this.weight = weight;
	}
}

const paddedArmor = new Armor('Padded Armor', 'light', 5, 11, null, true, 8);

export { paddedArmor };
