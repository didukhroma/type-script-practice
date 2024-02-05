//Class
// class User {
//     firstName: string | undefined; //properties
//     lastName: string | undefined; //properties
//     //method
//     print(): void {
//         console.log(this.firstName+' '+this.lastName)
//     }

// }

// const user1: User = new User();
// user1.firstName = 'Ivan';
// user1.lastName = "Ivanov"

// const user2: User = new User();
// user2.firstName = 'John';
// user2.lastName = "Doe"

// user1.print()
// user2.print()

// console.log(user1)

//CONSTRUCTOR
// class MyClass {
//     value: string;

//     constructor() {
//         console.log('Constructor MyClass is working');
//         this.value = "Hello world";
//     }
// }

// console.log("Create example of Class")
// const temp = new MyClass();
// console.log(temp.value)

// class Student {
//     firstName: string;
//     age: number;

//     constructor(firstName: string, age: number) {
//         this.firstName = firstName;
//         this.age = age;
//     }

//     print() {
//         console.log(`Student - ${this.firstName}, age - ${this.age} years`)
//     }
// }

// const student1 = new Student("Bob", 25)
// const student2 = new Student("John", 24)

// student1.print()
// student2.print()

// console.log(student1)
//-------------------------------------------------------------------------------
//PUBLIC,PRIVATE,PROTECTED METHOD OR PROPERTIES CLASS
//-------------------------------------------------------------------------------
// enum Position {
//     Junior = 'junior',
//     Middle = "middle",
//     Senior = "senior",
// }

// class Developer {
//     private name: string;
//     private position: Position;
//     private salary: number;

//     constructor(name: string, position: Position) {
//         this.name = name;
//         this.position = position;
//         this.salary = this.countSalary();
//     }

//     private countSalary(): number {
//         switch (this.position) {
//             case Position.Junior:
//                 return 700;
//              case Position.Middle:
//                 return 2000;
//              case Position.Senior:
//                 return 5000;
//         }
    
//     }

//     public setPosition(position: Position): void {
//         this.position = position;
//         this.salary = this.countSalary()
//     }

//     public print(): void {
//         console.log(`employee - ${this.name}, \nposition - ${this.position}, \nsalary - ${this.salary}`)
//     }
// }

// const dev: Developer = new Developer('John', Position.Junior)
// // dev.name = 'Ivan'
// // dev.salary = 'Ivan'
// // dev.position = Position.Senior

// dev.print()
// dev.setPosition(Position.Senior)
// dev.print()
// console.log(dev)

//-------------------------------------------------------------------------------
//READONLY
//-------------------------------------------------------------------------------
// class Dog {
//     public readonly name: string;
//     public readonly numberOfLegs: number = 4;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const dog: Dog = new Dog("White");
// console.log(dog.name)
// console.log(dog.numberOfLegs)

// dog.numberOfLegs = 5
// dog.name = ""

//-------------------------------------------------------------------------------
//PARAMETERS PROPERTY
//-------------------------------------------------------------------------------
// class Person {

//     constructor(public name: string, private age: number) {
//     }

//     print() {
        
//         console.log(this.name+' '+this.age)
//     }
// }

// const person: Person = new Person("Bob", 25)
// person.print();
// person.name = 'Ivan';
// person.print();
//-------------------------------------------------------------------------------
//ACCESSORS
//-------------------------------------------------------------------------------
// class Rectangle {
//     private _width: number = 1 ;
//     private _height: number = 1;

//     public getWidth(): number {
//         return this._width
//     }

//      public setWidth(value:number): void {
//          this._width = value <= 0 ? 1 : value;
//     }

//     get height(): number{
//         return this._height;
//     }

//      set height(value:number) {
//          this._height = value <= 0 ? 1 : value;
//     }

//     public calculateArea(): number {
//         return this._height * this._width
//     }
// }

// const rectangle: Rectangle = new Rectangle();

// rectangle.setWidth(100)
// console.log(rectangle.getWidth())

// rectangle.height = -20;
// console.log(rectangle.height)

// const rectangleArea = rectangle.calculateArea()
// console.log('rectangleArea--',rectangleArea)
//-------------------------------------------------------------------------------
//STATIC
//-------------------------------------------------------------------------------
// console.log(Math.PI)
// console.log(Math.random())

// class Database {
//     private static readonly instance: Database = new Database()
    
//     private constructor() {
//         console.log('Call constructor')
//     }

//     public static getInstance(): Database {
//         return Database.instance
//     }

//     public getData(): void {
//         console.log('Received data from Database')
//     }

//     public setData(): void {
//         console.log('Data saved to Database')
//     }
// }

// // const database:Database = new Database()
// const db = Database.getInstance()
// db.getData()
// db.setData()

// const db2 = Database.getInstance()
// console.log(db === db2)
//-------------------------------------------------------------------------------
//INHERITANCE
//-------------------------------------------------------------------------------
// console.log('first')
// class Base {
//     private value1: string;
//     public value2: string;
//     protected value3: string;

//     constructor() {
//         this.value1 = 'private value 1';
//         this.value2 = 'public value 2';
//         this.value3 = 'protected value 3';
//     }

//     private method1(): void {
//         console.log('private method 1 call.')
//     }
//     public method2(): void {
//         console.log('public method 1 call.')
//     }
//     protected method3(): void {
//         console.log('protected method 1 call.')
//     }
// }

// class Derived extends Base {
//     constructor() {
//         super();

//         console.log('public property =' + this.value2)
//         console.log('protected property =' + this.value3)

//         this.method2();
//         this.method3();
//     }
// }

// const derived:Derived = new Derived()
//
// class Shape {
//     private name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
//     public getInfo(): string {
//        return `This is ${this.name}`
//     }
// }

// class Rect extends Shape {
//     private width: number;
//     private height: number;

//     constructor(width: number, height: number) {
//         super("Rectangle");
//         this.width = width;
//         this.height = height;
        
//     }
//     public getInfo(): string {
//         const baseInfo = super.getInfo();
//         return `${baseInfo} Height = ${this.height}, Width = ${this.width}`
//     }
// }

// const newRect: Shape = new Rect(100, 200)
// console.log(newRect.getInfo())

// class Circle extends Shape {
//     private radius: number;

//     constructor(radius: number) {
//         super("Circle");
//         this.radius = radius;
//     }
//      public getInfo(): string {
//         const baseInfo = super.getInfo();
//         return `${baseInfo} Radius = ${this.radius}`
//     }
// }

// const shapes: Shape[] = [];
// shapes.push(new Rect(100, 200))
// shapes.push(new Circle(100))
// shapes.push(new Circle(43))
// shapes.push(new Rect(10, 20))

// // shapes.push({
// //     name: 'foo',
// //     getInfo: () => {
// //         return 'bar'
// //     }
// // })

// for (let i = 0; i < shapes.length; i += 1) {
//     const info: string = shapes[i].getInfo();
//     console.log(info)
// }
//-------------------------------------------------------------------------------
//ABSTRACT
//-------------------------------------------------------------------------------
// abstract class Animal {
//     constructor(public name: string) { }
    
//     abstract makeSound():void;

//     public move(): void {
//     console.log(this.name + " is going")
//     }
// }

// class Cat extends Animal {
//     constructor() {
//         super('Cat')
//     }
//     makeSound(): void {
//         console.log('Miy miy')
//     }
// }

// class Cow extends Animal {
//     constructor() {
//         super('Cow')
//     }
//     makeSound(): void {
//         console.log('My-y-y-y-y-y')
//     }
// }

// const murzik: Animal = new Cat();
// murzik.makeSound();
// murzik.move();

// const milka: Animal = new Cow();
// milka.makeSound();
// milka.move();
//-------------------------------------------------------------------------------
//INTERFACE
//-------------------------------------------------------------------------------

// interface Report {
//     name: string;
//     build: () => string;
// }

// class DailyReport implements Report {
//     toJSON() {
//         throw new Error("Method not implemented.");
//     }
//     name:string = 'Daily Report';
    
//     build(): string {
//         return 'some daily report';
//     }
// }
// function printValue(obj: { name: string }):void {
//     console.log(obj.name)
// }
// const myObj1 = { value: 10, name: "Hello world" }
// printValue(myObj1)

// // const myObj2 = { value: 10, name2: "Hello world" }  //! error
// // printValue(myObj2) //! error

// interface NamedValue {
//     name: string;
// }

// function printValue2(obj: NamedValue):void {
//     console.log(obj.name)
// }
// printValue2(myObj1)
// // printValue2(myObj2)//! error
//-------------------------------------------------------------------------------
//INTERFACE OPTIONAL PROPERTIES
//-------------------------------------------------------------------------------
// interface RectangleShape {
//     name?: string;
//     width: number;
//     height: number;
// }

// function drawRectangle(rect: RectangleShape): void {
//     if (rect.name) {
//         console.log('Name - ' + rect.name)
//     }
//     console.log(rect.width + 'x' + rect.height)
// }

// const rect1 = {
//     name: "Rectangle 1",
//     width: 100,
//     height: 75,

// }

// const rect2 = {
//     width: 55,
//     height: 33,

// }
// const rect3 = {
//     name: "Rectangle 1",
//     width: 100,

// }
// drawRectangle(rect1)
// drawRectangle(rect2)
// drawRectangle(rect3)//!error
//-------------------------------------------------------------------------------
//INTERFACE READONLY
//-------------------------------------------------------------------------------
// interface Point {
//    readonly x: number;
//    readonly y: number;
// }

// const point: Point = { x: 10, y: 10 }
// point.x = 20//!error
// point.y = 20//!error
//-------------------------------------------------------------------------------
//INTERFACE FUNCTION
//-------------------------------------------------------------------------------
// interface MyFunc {
//     (value: string): boolean;
// }
// let myFunc1: MyFunc

// myFunc1 = function (value: string): boolean {
//     return false
// }

// const myFunc2:MyFunc = function (data: string): boolean {
//     return false
// }
//-------------------------------------------------------------------------------
//INTERFACE IMPLEMENTING
//-------------------------------------------------------------------------------
// interface Report {
//     name: string;
//     build: () => string;
// }
// class DailyReport implements Report {
//     name: string = 'Daily Report';
//     build(): string {
//         return 'some daily report data'
//     }
// }
// class WeaklyReport implements Report {
//     name: string = 'Weakly Report';
//     build(): string {
//         return 'some weakly report data'
//     }
// }

// const r1: Report = new DailyReport();
// const r2: Report = new WeaklyReport();

// console.log(r1.build())
// console.log(r2.build())

// Завдання 2
// Створити поняття абстрактного батьківського класу Car. Від нього створити 3 похідні класи (марки
// автомобілів) із застосуванням методу super(). У класах використовувати модифікатори як у
// батьківському класі, і у похідних. Створити від похідних класів мінімум по 2 екземпляри (моделі
// автомобілів). Методи у похідних класах повинні виводити на екран усі властивості (опис
// автомобіля). Подумайте, які властивості у похідних класах мають бути public, які – private та
// protected.
abstract class Car {
    
}