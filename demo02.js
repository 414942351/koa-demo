//基础类型
// let isDone: boolean = false;
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
// let myName: string = 'bob';
// let myName: string = `Gene`;
// let age: number = 37;
// let sentence: string = `Hello, my name is ${ myName }.
// I'll be ${ age + 1 } years old next month.`;
// let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];
// let x: [string, number];
// x = ['wocao', 1];
// x = [1, 'wocao']; //error 
// console.log(x[0].substr(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
