// Необходимо создать класс User

// статическое свойство
// - roles (массив со значениями admin, manager, user)

// свойства
// - name
// - lastname
// - role

// методы
// - get_info (вывести в консоль строку '<Имя> <Фамилия> (<роль>)')
// - change_role (принимает в качестве аргумента новую роль и задает ее,
// если она входит в список допустимых ролей из статического свойства roles.)

// class User {
// 	static roles = ['admin', 'manager', 'user'];

// 	constructor(name, lastname, role) {
// 		this.name = name;
// 		this.lastname = lastname;
// 		this.role = role;
// 	}
// 	get_info() {
// 		return `Имя: ${this.name}, Фамилия: ${this.lastname} роль: ${this.role}`;
// 	}
// 	change_role(new_role) {
// 		for (let i = 0; i < User.roles.length; i++) {
// 			if (User.roles[i] === new_role) {
// 				this.role = new_role;
// 				return;
// 			}
// 		}
// 		console.log(`Укажите одну из следующих: ${User.roles}`);
// 	}
// }

// const user_1 = new User('Anton', 'Kulikov', 'manager');

// console.log(user_1.role);
// user_1.change_role('admin');
// console.log(user_1.role);
// user_1.change_role('FE');
