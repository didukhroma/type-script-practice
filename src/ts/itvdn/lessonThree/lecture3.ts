// const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const  myCallback = value => {
//     const message = value % 2 === 0 ? 'Even number' : "Odd number";
//     console.log(value + ' - ' + message)
        
// }
//---------------------------------
//FOR EACH
//---------------------------------
// myArray.forEach(myCallback)

// myArray.forEach((value: number, index: number, array: number[]) => {
//     array[index] = value + 1;
    
// })
// console.log(myArray)

// const letters = ['a', 'b', 'c', 'a', 'c', 'a']

// const repeats = {}

// letters.forEach((el: string):void => repeats[el] ? (repeats[el] += 1) : (repeats[el] = 1))

// console.log(repeats)

//---------------------------------
//MAP
//---------------------------------
// const array: number[] = [1, 2, 3, 4, 5]
// const newArray: number[] = array.map(value => {
//     return value * value
// })

// console.log(array)
// console.log(newArray)
//---------------------------------
//FILTER & FIND
//---------------------------------
// const array: number[] = [1, 2, 3, 4, 5, 6]

// const evenNumbers = array.filter(el => el % 2 === 0)

// console.log(array)
// console.log(evenNumbers)

// const usersArray = [
//     { name: 'Andy', role: "client" },
//     { name: 'Stepan', role: "admin" },
//     { name: 'John', role: "client" },
//     { name: 'Nikolas', role: "client" },
// ]

// const user1 = usersArray.filter((user) => user.role === "admin");
// const user2 = usersArray.find((user) => user.role === "admin");

// console.log(user1)
// console.log(user2)
//---------------------------------
//REDUCE
//---------------------------------
// const values: number[] = [10, 2, 3, 4, 5, 6]
// const total: number = values.reduce((acc, el) => (acc += el))
// console.log(total)

// const chars = ['a', 'b', 'c', 'a', 'c', 'a']
// const charsRepeat = chars.reduce((acc, char) => {
//     acc[char] ? (acc[char] += 1) : (acc[char] = 1);
//     return acc;
// }, {})
// console.log(charsRepeat)
//  const usersArray:{name:string,role:string}[] = [
//     { name: 'Andy', role: "client" },
//     { name: 'Stephan', role: "admin" },
//     { name: 'John', role: "client" },
//     { name: 'Nicolas', role: "client" },
// ]

// const res1 = usersArray
//     .filter(user => user.role === 'client')
//     .map(({ name }) => name)
// console.log(res1)

// const res2 = usersArray.reduce((acc, el)=> (el.role === 'client' ? [...acc, el.name] : acc), [])

// console.log(res2)
//---------------------------------
//SPREAD OPERATOR
//---------------------------------
// const dataArray1: number[] = [1, 2, 3]
// const dataArray2: number[] = [100, 200, ...dataArray1]
// console.log(dataArray1);
// console.log(dataArray2);
//---------------------------------
//FOR OF
//---------------------------------
// const numbers = [5, 6, 7, 8, 9]
// for (const num of numbers) {
//     console.log(num)
// }

//------------------------------------------------------------------------
//GENERICS
//------------------------------------------------------------------------
function myFunc<T>(value: T): T {
    return value
}
const value1 = myFunc<string>('test')
const value2 = myFunc<number>(10)
console.log(value1);
console.log(value2)