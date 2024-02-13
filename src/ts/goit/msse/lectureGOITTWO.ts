console.log('lecture two')
//! GENERICS

// const arr: Array<number> = [1, 2, 3];
// const arr1: Array<number | string> = ['1', 2, '3'];
// const arr2: Array<number | string | boolean> = ['1', 2, '3',true];

//? before generic
// functions
// function logSomeValue(data:number | string):number | string {
//     console.log(data);
//     return data;
// }

// function logSomeValue<T>(data:T):T {
//     console.log(data);
//     return data;
// }

// logSomeValue<number>(10);
// logSomeValue<string>('10');
// logSomeValue<boolean>(true);

//! INTERFACE

// type User = {
//     name: string;
//     age: number;
//     city: string;
// }

// const Alice: User = {
//     name: "Alice",
//     age: 18,
//     city:"Lviv"
// }

// interface IUser {
//     name: string;
//     age: number;
//     city: string;
// }

// const Alice: IUser = {
//     name: "Alice",
//     age: 18,
//     city:"Lviv"
// }
// console.log(Alice)

// interface IUser {
//     hobby: "JS" | "TS"
// }

// const User: IUser = {
//     hobby: 'TS'
// }
// const hobby:User = "TS" //! error

// type IUser =  {
//     hobby: "JS" | "TS"
// }
// const hobby:IUser = "TS" //! error

// ! INTERFACE INCREASE
// interface IUser {
//     name: string;
//     age: number;
// }
// interface IUser {
//     city:string
// }
// interface IUser {
//     hobby:string
// }
// const user: IUser = {
//     name: "Alice",
//     age: 18,
//     city: "Lviv",
//     hobby:"JS"
// }
// ! ADVANCED TYPES
// ? TYPE OF
// let value: string | number = "hello";
// console.log(typeof value)
// ? IN
//? INSTANCE OF

//? IS
// interface IBird {
//     fly(): void;
//     layEggs(): void;
// }
// interface IFish {
//     swim(): void;
//     layEggs(): void;
// }
// const bird: IBird = {
//     fly() { },
//      layEggs(){}
// }


// function isBird(animal: IBird | IFish): animal is IBird {
// return 'fly' in animal
// }

// isBird(bird)
//? AS
// let someValue: any = 'Hello world'

// const strLength:number = (someValue as string).length

// console.log(someValue.length)

// let value: unknown = 10;

// ! PRACTICE
// // ! TASK 1
    
// const numbers : number[]= [1, 2, 3, 4, 5]
// const words: string[] = ['1',"2",'3','4','5']

// const reverseArray = <T>(array: T[]): T[] => array.reverse()

// console.log(reverseArray(numbers))
// console.log(reverseArray(words))

// ! TASK 2
// interface IPerson {
//     name: string;
//     age: number;
// }

// interface IAddress {
//     city: string;
//     zipCode: number;
// }

// const person:IPerson = { name: "John", age: 30 }
// const address:IAddress = { city: "Lviv", zipCode: 80600 }


// function mergeObject<A extends IPerson,B extends IAddress>(obj1:A, obj2:B): A & B {
//     return {...obj1,...obj2}
// }

// console.log(mergeObject(person,address))
// !CLASS
// class User {
//     private email: string;
//     protected city: string;

//     constructor(
//         public  name: string,
//         public age: number,
//         email: string,
//         city:string

        
//     ) {

//     }
// }

// class Student extends User {
//      constructor(
//         public name: string,
//         public age: number,
//         email: string,
//         city:string

        
//      ) {
//          super(name,age,email,city)
//     }



//     // getUserInfo():void {
//     //     console.log(this.name,this.age,this.email,this.city)
//     // }

   

//     get userName():string {
//         return this.name
//     };

//       set userName(newName: string) {
//          this.name = newName
//     }
// }

// const alice = new Student("Alice", 18, "test@test.com", "lviv")

// // alice.getUserInfo()
// alice.userName('Kate')
// console.log(alice.userName)

// -----------------------------------------
// interface IUser {
//     name: string;
//     age: number;
//     getUserInfo():string
// }

// abstract class Form {
//      constructor(public name: string, public age: number) { }

//     getUserInfo(): string {
//         return `My name is ${this.name}, my age is ${this.age}`
//     }

// }


// class User implements IUser {
//     constructor(public name: string, public age: number) { }

//     getUserInfo(): string {
//         return `My name is ${this.name}, my age is ${this.age}`
//     }
// }

// class AUser extends Form {
//     constructor(name: string, age: number) { 
//          super(name,age)
//      }

// }

// const Alice = new User('Alice', 18)
console.log(Alice)