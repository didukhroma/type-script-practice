console.log('LECTURE ONE')

// PRACTICE
//TASK 1
// enum Colors  {
//     Red = '#ff0000',
//     Green = '#00ff00',
//     Blue = "#0000ff",
// }

// function getColorHex(color: keyof typeof  Colors):string {
//     return Colors[color]
// }

// console.log(getColorHex('Green'))
// console.log(getColorHex('green'))


// //TASK 2
// function createPerson(name: string, age: number):[string,number] {
//     return[name,age]
//  }

// console.log(createPerson("Alice",20))
//TASK 3
// type Student = {
//     name?: string,
//     grades: number[]
// }

// const alice = {
//     name: "Alice",
//     grades:[11,12,6],
// }

// function calculateAverage(student:Student):number {

//     return student.grades.reduce((acc:number, el:number,i:number,arr:number[]):number => {
//         acc += el;
// return arr.length - 1 === i ? acc / arr.length : acc
//     })
// }
// console.log(calculateAverage(alice))
//TASK 4
// enum StatusDelivery {
//     PROCESS = 'In process',
//     SENT = "Sent",
//     DELIVERED = "Delivered"


// }

// type OrderItem = {
//     id: string,
//     name: string,
//     price: number,
// }
    
// type Order = {
//     number: string,
//     items: OrderItem[],
//     status: StatusDelivery
// }

// const exampleOrder: Order = {
//     number:"12345",
//     items: [
//         { id: '1', name: "Laptop", price: 800 },
//         { id: '2', name: "Mouse", price: 30 },
//         {id:'3',name:"Keyboard",price:50},
//     ],
//     status:StatusDelivery.PROCESS

// }

// function calculateTotal(items: OrderItem[]): number {
//     return items.reduce((acc:number,{price}:OrderItem)=>acc+price,0)

// }

// function printStatus({number,status,items}:Order):void {
//     console.log(`order - ${number},  ${status}, total price ${calculateTotal(items)}`)
    
// }
// printStatus(exampleOrder)

// class Key {
//     private signature:number = Math.random();

//     getSignature():number {
//         return this.signature;
//     }
// }

// class Person {
//     constructor(private key:Key) {

//     }
//     getKey():Key {
//         return this.key;
//     }
// }

// abstract class House {
//     protected door: boolean=false;
//     protected tenants: Person[] = [];

//     constructor(protected key:Key) {}

//     public abstract openDoor(key: Key): void
    
//     comeIn(person: Person): void {
//         this.door && this.tenants.push(person)
//     }

// }

// class MyHouse extends House{
  
//      openDoor(key:Key) {
//     key.getSignature() === this.key.getSignature() && (this.door = true)
//     }
// }

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);
