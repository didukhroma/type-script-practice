// import './fson'
// console.log('first')
//-----------------------------------------------------------
//INDEX PROPERTIES
//-----------------------------------------------------------
// type StringDictionary = {
//     [key:string]:string
// }

// type Goods = {
//     [key: string]: number,
// }

// const fruits:Goods = {
//     apple: 15,
//     banana: 30,
//     orange: 30,
    
// }

// const frozenGoods:Goods = {
//     iceCream: 25,
//     fish: 30,
//     berry:10
// }

// // TASK 1
// type MixeType = {
//     [key:string]: string|number
// }


// const userInfo:MixeType =  {
//     name: 'Bob',
//     age:23,
//     counry: 'Ukraine'
// }

// const bookDetails:MixeType = {
//     title: "Some book",
//     pageCount: 350

// }

//-----------------------------------------------------------
//GENERICS
//-----------------------------------------------------------
//EXAMPLE
// function identity<T>(arg: T): T{
//     return arg
// }
// let output1 = identity<string>("myString")
// let output2 = identity<number>(100)

// TASK 1
// function reverse<T>(items: T[]): T[] {
//    return items.reverse()
// }

// let numbers = reverse<number>([1, 2, 3, 4, 5])
// console.log(numbers)

// let letters = reverse<string>(['a', 'b', 'c', "d", 'e'])
// console.log(letters)
//-----------------------------------------------------------
//EXTENDS & KEY OF
//-----------------------------------------------------------
// function lengthOfObject<T extends { length: number }>(obj: T): number {
//     return obj.length
// }
//  console.log(lengthOfObject({
//     length: 10,
//      name: "John"
//  }))



// TASK 1
// function getProperty<T,K extends keyof T >(obj:T,key:K):T[K]{
// return obj[key]
// }

// function getProperty2<T,K extends keyof T >(obj:T,key:K):{T[K],groupNumber:number} {
//     return {
//         obj[key],
//         groupNumber: obj.groupNumber
//     }
// }


// let studentName  = {
//     name: "john",
//     age: 25,
//     groupNumber:12
// }
// console.log(getProperty(studentName, 'name'))
// console.log(getProperty2(studentName,'name')) //! !!!
//-----------------------------------------------------------
//PATRIAL <T>
//-----------------------------------------------------------
// type Todo = {
//     title: string;
//     description: string;
//     completed: boolean;

// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
//     return {...todo,...fieldsToUpdate}
// }

// const todo1: Todo = {
//     title: "Learn Typescript",
//     description: "Study the basics of Typescript",
//     completed: false,
// }

// const todo2 = updateTodo(todo1, {
//     description:"Study generics in Typescript"
// })
// console.log(todo2)
// TASK
// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

// type User = {
//     name: string;
//     lastName: string;
//     age: number;
//     hobby: string;
// }

// function updateUser(fieldsToUpdate:Partial<User>) {
//     return {...User,...fieldsToUpdate}
// }
// const User = {
//     name: "John",
//     lastName: "Doe",
//     age: 30,
//     hobby:"JS"
// }
// console.log(User)
// console.log(updateUser({
//     hobby:"HTML"
// }))
// console.log(updateUser({ //!!!!
//     language:"EN"
// }))

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

// type Config = {
//     date: string;
//     part: number;
//     program: string
// }

// const Settings: Config = {
//      date: '10-01',
//     part: 12,
//     program: 'JS'
// }
// function setupConfig(part: Partial<Config>): Config {
//     return {...Settings,...part}
// }
// console.log(setupConfig({part:10}))

//-----------------------------------------------------------
//READONLY
//-----------------------------------------------------------
// type User = {
//     name: string;
//     age: number;
// }

// const john: Readonly<User> = {
//     name: "John",
//     age: 30,
// }
// john.age = 15;

// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]
// numbers.push(6);
// numbers[0] = 0;

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.
// type Arr = number[]

// const array:Arr = [1, 2, 3, 4, 5]

// function returnArr<T extends ReadonlyArray<number>>(arr:T):T{
//     return arr
// }
// console.log(returnArr(array))
// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.
// type Config = {
//     date: string;
//     part: number;
//     program: string
// }

// const Settings: Readonly<Config> = {
//      date: '10-01',
//     part: 12,
//     program: 'JS'
// }

//-----------------------------------------------------------
//PICK <T,K>
//-----------------------------------------------------------
// type Person = {
//     name: string;
//     age: number;
//     address:string
// }

// type PersonSummary = Pick<Person, "name" | "age">

// const johnSummary: PersonSummary = {
//     name: "john",
//     age:30
// }
// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
//  type Person = {
//     name: string;
//     age: number;
//     mail:string
// }

// type Info = Pick<Person, "name" | "mail">

//  const johnSummary: Person = {
//     name: "john",
//      age: 30,
//     mail: "text@text.com"
// }
// function info (user:Person):Info {
//     return {name:user.name,mail:user.mail}
// }
// console.log(info(johnSummary))
// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.
// interface ApiResponse {
//     id: number,
//     title: string,
//     content: string,
//     createdAt: Date
// }
// type ResponseObj = Pick<ApiResponse, "title" | "content">

// // const uiResponse = <T extends ApiResponse>(response: T): ResponseObj => { response.title, response.content }

// function uiResponse<T extends ApiResponse>(response: T): ResponseObj {
//     return { title:response.title, content:response.content }
// }

//-----------------------------------------------------------
//OMIT <T,K>
//-----------------------------------------------------------
//  type Person = {
//     name: string;
//     age: number;
//     address:string
// }

// type PersonWithoutAddress = Omit<Person, "address">

// const johnSummary: PersonWithoutAddress = {
//     name: "john",
//     age:30
// }
// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.
// type User = {
//     name: string;
//     age: number;
//     password:string
// }
// type Info = Omit<User,"password">
//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.
// type API = {
//     id: string;
//     content: string;
//     data:string
// }
// type Info = Omit<API,"data">
//-----------------------------------------------------------
//RECORD <T,K>
//-----------------------------------------------------------
// type CityDatabase = Record<string , number>;

// const database: CityDatabase = {
//     Kyiv: 2884000,
//     Kharkiv: 1441000,
//     Odesa:1015000,
// }
// database.Lviv = 721301
// console.log(database)
// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.
// const usersAge:Record<string,number> = {
//     Alice: 25,
//     Bob: 30,
//     John:40
// }

// Задача 2: Мапа з іменами місяців до кількості днів у них.
// const month:Record<string,number> = {
//     JUN: 31,
//     FEB: 28,
//     MARCH:40
// }

//-----------------------------------------------------------
//INTERFACE AND CLASSES
//-----------------------------------------------------------
// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.
// interface Dish {
//     name: string;
//     price: number;
//     category: "starter" | "main" | "dessert";

// }
// const Menu: Dish[] = [
//     {
//         name: 'milk', price: 100, category: "starter"
//     },
//  {
//         name: 'icecream', price: 100, category: "dessert"
//     },
//  {
//         name: 'frenchfries', price: 200, category: "main"
//     },
//  {
//         name: 'salad', price: 100, category: "starter"
//     }, {
//         name: 'juice', price: 100, category: "starter"
//     },]
// console.table(Menu)
// // const sortedMenu = <T extends Array<Dish>>

// function sortedMenu(arr:Readonly<Dish[]>):Dish[] {
//     return [...arr].sort((a, b) => a.category.localeCompare(b.category))
// }

// console.table(sortedMenu(Menu))
// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

// interface User {
//     name: string;
//     email: string;
//     dateBirth: Date;
// }

// const John = {
//  name: "John",
//     email: "test@test.com",
//     dateBirth: new Date("22 Sep 1988"),
// }

// function checkAdult(user:User):boolean {
//     return (new Date(Date.now()).getFullYear() - user.dateBirth.getFullYear()) > 18
// }
// console.log(checkAdult(John))
