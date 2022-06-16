const users = [
	{
		id: 1,
		email: 'al.capone@reqres.in',
		first_name: 'Al',
		last_name: 'Capone',
		info: 'Aмериканский гангстер',
		avatar:
			'https://upload.wikimedia.org/wikipedia/commons/f/f3/Al_Capone_in_1930.jpg',
	},
	{
		id: 2,
		email: 'pablo.escobar@reqres.in',
		first_name: 'Pablo',
		last_name: 'Escobar',
		info: 'Kолумбийский наркобарон и террорист',
		avatar:
			'https://s.yimg.com/ny/api/res/1.2/ICiiMGk5OzaZ2UW4FqTjLw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTk2MQ--/http://globalfinance.zenfs.com/en_us/Finance/US_AFTP_SILICONALLEY_H_LIVE/Legendary_drug_lord_Pablo_Escobar-47623b9389719aa3e943aadc6de914ff',
	},
	{
		id: 3,
		email: 'vito.genovese@reqres.in',
		first_name: 'Vito',
		last_name: 'Genovese',
		info: 'Mладший босс',
		avatar:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Vito_Genovese_NYWTS.jpg/1200px-Vito_Genovese_NYWTS.jpg',
	},
	{
		id: 4,
		email: 'laki.luciano@reqres.in',
		first_name: 'Laki',
		last_name: 'Luciano',
		info: 'Лидер организованной преступности',
		avatar:
			'https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.XXX.57880710.7055475/1705696.jpg',
	},
	{
		id: 5,
		email: 'carlo.gambino@reqres.in',
		first_name: 'Carlo',
		last_name: 'Gambino',
		info: 'Гангстер американской Коза Ностры ',
		avatar:
			'https://s5o.ru/storage/simple/ru/ugc/0e/45/ff/d5/ruu6fd0cd38ac.jpg',
	},
	{
		id: 6,
		email: 'meyer.lansky@reqres.in',
		first_name: 'Meyer   ',
		last_name: 'Lansky',
		info: 'Представитель еврейских преступных группировок',
		avatar:
			'https://upload.wikimedia.org/wikipedia/commons/d/dc/Meyer_Lansky_NYWTS_1_retouched.jpg',
	},
	{
		id: 7,
		email: 'joseph.bonanno@reqres.in',
		first_name: 'Joseph',
		last_name: 'Bonanno',
		info: 'Криминальный авторитет',
		avatar:
			'https://cs10.pikabu.ru/post_img/2018/04/12/11/1523558852158998487.png',
	},
	{
		id: 8,
		email: 'albert.anastasia@reqres.in',
		first_name: 'Albert',
		last_name: 'Anastasia',
		info: 'Киллер и криминальный авторитет',
		avatar:
			'https://st03.kakprosto.ru/tumb/680/images/article/2019/5/2/332626_5cca9e19758d75cca9e197590e.jpeg',
	},
	{
		id: 9,
		email: 'vincent.gigante@reqres.in',
		first_name: 'Vincent',
		last_name: 'Gigante',
		info: 'Босс преступного клана Дженовезе',
		avatar:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_Gigante_NYWTS.jpg/1200px-Vincent_Gigante_NYWTS.jpg',
	},
	{
		id: 10,
		email: 'john.gotti@reqres.in',
		first_name: 'John',
		last_name: 'Gotti',
		info: 'Босс семьи Гамбино',
		avatar: 'https://www.peoples.ru/state/criminal/mafia/gotti/gotti_1.jpg',
	},
];

const rootElem = document.querySelector('#root');

users.forEach(function ({ id, email, first_name, last_name, info, avatar }) {
	const container = document.createElement('div');
	const container1 = document.createElement('div');
	const container2 = document.createElement('div');
	const idElem = document.createElement('li');
	const emailElem = document.createElement('a');
	const first_nameElem = document.createElement('li');
	const last_nameElem = document.createElement('li');
	const infoElem = document.createElement('li');
	const avatarElem = document.createElement('img');

	idElem.innerText = `id: ${id}`;
	emailElem.innerText = `Email: ${email}`;
	first_nameElem.innerText = `First name: ${first_name}`;
	last_nameElem.innerText = `Last name: ${last_name}`;
	infoElem.innerText = `Info: ${info}`;

	avatarElem.setAttribute('src', avatar);
	avatarElem.setAttribute('alt', 'photo of worker');
	emailElem.setAttribute('href', `mailto: ${email}`);

	container.classList.add('info');
	container1.classList.add('avatar');
	container2.classList.add('text');
	idElem.classList.add('id');
	// emailElem.classList.add('email');
	first_nameElem.classList.add('first_name');
	last_nameElem.classList.add('last_name');
	infoElem.classList.add('inf');

	container1.append(avatarElem);
	container2.append(idElem, emailElem, first_nameElem, last_nameElem, infoElem);
	container.append(container2, container1);

	rootElem.append(container);
});
