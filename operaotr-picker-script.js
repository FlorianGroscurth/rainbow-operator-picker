window.addEventListener('DOMContentLoaded', () => {

});

const attacker = [
	'Striker',
	'Deimos',
	'Ram',
	'Brava',
	'Grim',
	'Sens',
	'Osa',
	'Flores',
	'Zero',
	'Ace',
	'Iana',
	'Kali',
	'Amaru',
	'Nokk',
	'Gridlock',
	'Nomad',
	'Maverick',
	'Lion',
	'Finka',
	'Dokkaebi',
	'Zofia',
	'Ying',
	'Jackal',
	'Hibana',
	'Capitao',
	'Blackbeard',
	'Buck',
	'Sledge',
	'Thatcher',
	'Ash',
	'Thermite',
	'Montagne',
	'Twitch',
	'Blitz',
	'IQ',
	'Fuze',
	'Glaz',
];

const defender = [
	'Skopos',
	'Sentry',
	'Tubercolose',
	'Fenrir',
	'Slois',
	'Azami',
	'Thorn',
	'Thunderbird',
	'Aruni',
	'Melusi',
	'Oryx',
	'Wamai',
	'Goyo',
	'Warden',
	'Mozzie',
	'Kaid',
	'Clash',
	'Maestro',
	'Alibi',
	'Vigil',
	'Ela',
	'Lesion',
	'Mira',
	'Echo',
	'Cav',
	'Valkyrie',
	'Frost',
	'Mute',
	'Smoke',
	'Castle',
	'Pulse',
	'Doc',
	'Rook',
	'Jäger',
	'Bandit',
	'Tachanka',
	'Kapkan',
]

function pickOperator(type) {
	let operator = '';
	switch (type) {
		case 'attacker':
			operator = randomElement(attacker)
			break;
		case 'defender':
			operator = randomElement(defender)
			break;

		default:
			break;
	}

	document.querySelector('.output .operator').innerHTML = operator;
}

function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}
