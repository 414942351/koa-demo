// function greeter(person: array) {
//     return "Hello, " + person;
// }

// var user = [0, 1, 2];

// document.body.innerHTML = greeter(user);


// interface Person {
// 	firstName: string;
// 	lastName: string;
// }
// function greeter(person: Person) {
// 	return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = { firstName: "jane", lastName: "User" };
// document.body.innerHTML = greeter(user);

// 在构造函数的参数上使用public等同于创建了同名的成员变量。

class Student {
	fullName: string;
	constructor(public firstName, public middleInitial, public lastName) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}
interface Person {
	firstName: string;
	lastName: string;
}
function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M", "User");
document.body.innerHTML = greeter(user);




















