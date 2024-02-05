// let isDone: boolean = true;
// let float: number = 3.14;
// let color: string = 'blue';
// let empty: null = null;
// let notParam: undefined = undefined;
//------------------------------------------------
// const num = 10;
// const str = 'Some string';
// const bool = true;
// const empty = null;
// const notParam = undefined;
//------------------------------------------------
// function foo (num: number, str: string, bool: boolean, empty: null) {
//   // Some logic
// }
// function foo1 (num = 10, str = 'Some string', bool = true, empty = null){
//   // Some logic
// }
//------------------------------------------------
// const obj: object = {};
// const obj1: {} = {};
// let user = {
//   name: "Tom",
//   age: 30
// };
// let user1: { name: string; age: number } = {
//   name: "Tom",
//   age: 30
// };

// let user2: { name: string; age: number } = {
//   age: 30,
// };

// let userNameLikeNumber: { name: string; age: number } = {
//   name: 10,
//   age: 30,
// };
//------------------------------------------------
// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: 'Tom',
//   age: 30,
// };

// let userJack: User = {
//   name: 'Jack',
//   age: 25,
// };
//------------------------------------------------
// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: 'Tom',
//   age: 30,
// };
//------------------------------------------------
// let arrString: number[];

// arrString = ['Text', 1];
//------------------------------------------------
// let matrix: number[][][] = [[[1], [3,4]], [[3], [4]]];

//------------------------------------------------
// let notSure: unknown = 4;
// notSure = 'maybe a string instead';
// notSure = false;
// notSure = 2;

// let num: number;

// num = notSure;
//------------------------------------------------
// type CallbackType = (...nums: number[]) => number;

// function calc(param1: number, param2: number, callback: CallbackType): void {
//   console.log('Result:', callback(param1, param2));
// }

// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);
// type Animal = { id: number; name: string; type: string; age: number; };
// const dog: Pick<Animal, 'name' | 'age'> = { name: 'Rex', age: 5 };