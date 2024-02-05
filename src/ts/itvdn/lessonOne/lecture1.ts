// console.log("hello-world")

//-------------FUNCTIONS
// FUNCTION DECLARATION
// function add2(x: number, y: number): number {
//     return x+y
// }

// const result: number = add2(10, 20)
// const result1: number = add2(10)
//--------------------------------------------------------------------------------------------------
//FUNCTION EXPRESSION
//--------------------------------------------------------------------------------------------------
// let myAdd: (x: number, y: number) => number;
// let myProc: () => void

// function myAddDeclaration(x: number, y: number):number {
//     return x + y;
// }

// myAdd = myAddDeclaration;
// console.log(myAdd(10, 20))

// myProc = function (): void {
//     console.log('first')
// }
// myProc()
//--------------------------------------------------------------------------------------------------
//OPTIONAL PARAMETERS
//--------------------------------------------------------------------------------------------------
// function getFullName(firstName: string, lastName?: string): string {
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return firstName
//     }
// }
    
// const fullName: string = getFullName('Ivan', 'Ivanov')
// const fullName2: string = getFullName('Ivan')
//--------------------------------------------------------------------------------------------------
//DEFAULT PARAMETERS
//--------------------------------------------------------------------------------------------------
// function getDisplayName(firstName: string, lastName: string = 'Ivanov'):string {
//     return 'Display Nma: ' + firstName + ' ' + lastName;
// }

// const fullName3: string = getDisplayName('Ivan', 'Ivanov')
// const fullName4: string = getDisplayName('Ivan')
// const fullName5: string = getDisplayName('Ivan', undefined)
//--------------------------------------------------------------------------------------------------
//REST PARAMETERS
//--------------------------------------------------------------------------------------------------
// function printValue(message: string, ...names: string[]): void {
//     console.log(message)
//     for (let i = 0; i < names.length; i += 1) {
//         console.log(names[i])
//     }
// }
// printValue("sample 1")
// printValue("sample 2","1","2")
// printValue("sample 3","1","2","abc")
//--------------------------------------------------------------------------------------------------
//CONTEXT
//--------------------------------------------------------------------------------------------------
// function test1():void {
//     console.log(this) //window
// }

// test1()

// const someObj = {
//     name: 'test',
//     testFunc: test1 //someObj
// }
// const someInstance = new test1();
// console.log(someInstance)
// function test2(x: number, y: number) {
//     console.log(x + y);
//     console.log(this)
// }

// const someTestObj = {
//     name: 'test object'
// }
// test2.call(someTestObj, 10, 20)
// test2.apply(someTestObj, [10, 20])
// const newFunc = test2.bind(someTestObj, 50)
// newFunc(60)
//--------------------------------------------------------------------------------------------------
//ARROW FUNCTIONS
//--------------------------------------------------------------------------------------------------
// const increment = function (x: number) { return x + 1 }
// const incrementArrow1 = (x:number)=> { return x + 1 }
// const incrementArrow2= (x:number) => x+1
// // const incrementArrow3 = x => x + 1;

// const myFunc = (callback: (x: number) => number): void => { callback(10) }

// myFunc(x=>x+1)
//--------------------------------------------------------------------------------------------------
//ARROW FUNCTIONS CONTEXT
//--------------------------------------------------------------------------------------------------
// function repeatOperation(count: number, callback: () => void): void {
//     console.log('start')
//     for (let i = 0; i < count; i += 1) {
//        callback()
//     }
//     console.log('stop')
// }

// const settings = {
//     displayName: 'test object',
//     test1() {

//         // repeatOperation(3, function () {
//         //     console.log(this.displayName) //undefined
//         // })
//         //-----------------------
//         // const self = this;
//         // repeatOperation(3, function () {
//         //     console.log(self.displayName)
//         // })
//         //-----------------------
//         repeatOperation(3, (function () {
//             console.log(this.displayName)
//         }).bind(this))
//     },
//     test2() {
//         repeatOperation(3, ()=>console.log(this.displayName))
//         }
//     }

// settings.test1()
//      settings.test2()
//--------------------------------------------------------------------------------------------------
//OVERLOADS
//--------------------------------------------------------------------------------------------------
// function showMessage(message: string): void;
// function showMessage(message: number): void;
// function showMessage(message: any): void {
//     switch (typeof message) {
//         case 'number':
//             console.log('Hello world');
//             break;
//         case 'string':
//             console.log(message);
//             break;
//     }
// }

// showMessage(4)
// showMessage('test')
// showMessage(true)