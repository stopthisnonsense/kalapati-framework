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
class Monster {
	constructor(
		name,
		ac,
		hp,
		speed,
		str,
		dex,
		con,
		int,
		wis,
		cha,
		skills,
		senses,
		languages,
		challenge
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
