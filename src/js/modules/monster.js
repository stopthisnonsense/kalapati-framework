import { multiDice } from './dice';
class Monster {
	constructor(
		name = 'generic',
		ac = 10,
		hp = multiDice(1, 4),
		speed = 30,
		str = 10,
		dex = 10,
		con = 10,
		int = 10,
		wis = 10,
		cha = 10,
		skills = {},
		senses = {},
		languages = [],
		challenge = 1
	) {
		this.name = name;
		this.ac = ac;
		this.hp = hp;
		this.speed = speed;
		this.str = str;
		this.dex = dex;
		this.con = con;
		this.int = int;
		this.wis = wis;
		this.cha = cha;
		this.skills = skills;
		this.senses = senses;
		this.languages = languages;
		this.challenge = challenge;
	}
}

const goblin = new Monster(
	'goblin',
	15,
	multiDice(2, 6),
	30,
	15,
	14,
	14,
	12,
	10,
	9,
	{ stealth: 6 },
	{ darkvision: 60, perception: 9 },
	['Common', 'Goblin'],
	1 / 4
);

export { goblin };
