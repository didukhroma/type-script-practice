console.log('practice')
// ! TASK 1
// Створіть інтерфейс Product, який має наступні властивості та методи:

// id (число)
// name (рядок)
// price (число)
// description (рядок)
// getShortDescription(): string - метод, який повертає короткий опис продукту. (10 символів з властивості description + '...')
// Створіть клас Product, який реалізує інтерфейс Product. Клас повинен мати конструктор для ініціалізації властивостей id, name, price, та description.

// У класі Product реалізуйте метод getShortDescription

// Створіть екземпляр класу Product за допомогою конструктора і виведіть в консоль його властивості та результати виклику методів.

// const iPhone = new Product(1145, 'iPhone 15 ', 47499,"Кожне нове покоління оригінальних смартфонів від творців з Купертіно по-своєму дивує і відкриває перед користувачами низку нових можливостей для творчості, роботи та відпочинку. Яскравіший дисплей, приріст оперативної памʼяті та збільшення базового вбудованого сховища — ми отримали багато цікавого та несподіваного з виходом новинки Епл 2023 року. То ж пропонуємо ближче познайомитись новинкою, та розглянути ключові зміни в дизайні та характеристиках.")

// interface IProduct {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
//      getShortDescription(): string
// }

// class Product implements IProduct {
//     constructor(public id: number, public name: string, public price: number, public description: string) {
//     }
    
//     public getShortDescription(): string {
//         return `${this.description.slice(0,10)}...`
//     }
// }

// const iPhone = new Product(1145, 'iPhone 15 ', 47499, "Кожне нове покоління оригінальних смартфонів від творців з Купертіно по-своєму дивує і відкриває перед користувачами низку нових можливостей для творчості, роботи та відпочинку. Яскравіший дисплей, приріст оперативної памʼяті та збільшення базового вбудованого сховища — ми отримали багато цікавого та несподіваного з виходом новинки Епл 2023 року. То ж пропонуємо ближче познайомитись новинкою, та розглянути ключові зміни в дизайні та характеристиках.")

// console.log(iPhone.getShortDescription())
// ! TASK 2
// Створи клас Electronics який походить від Product та опиши його інтерфейс, додавши властивість brand(ряддок) та метод powerOn() який виводить повідомлення про включення електронічного пристрою.

// Створи клас Clothing  який походить від Product та опиши його інтерфейс, додавши властивість size (ряддок) та метод wear() який виводить повідомлення про надягання одягу.
// interface IElectronics {
//     brand: string;
//     powerOn():void

// }

// class Electronics extends Product implements IElectronics {
//     constructor( id: number,  name: string,  price: number,  description: string, public brand: string) {
//         super(id,name,price,description)
//     }
//      public powerOn(): void {
//         console.log("Power On")
//     }
// }



// interface IClothing {
//     size: string;
//     wear():void

// }

// class Clothing extends Product implements IClothing {
//     constructor( id: number,  name: string,  price: number,  description: string, public size: string) {
//         super(id,name,price,description)
//     }
//      public wear(): void {
//         console.log("Clothes put on")
//     }
// }

// ! TASK 3
console.log('task 3')

// Створи клас Book та опиши його інтерфейс
// title  (рядок)
// author   (рядок)
// isBorrowed (буль) - протектед
// метод markAsBorrowed який встановлює книгу як позичену. - протектед

interface IBook {
    title: string;
    author: string;
    
}

class Book implements IBook {
    public isBorrowed: boolean = false;

    constructor(public title: string, public author: string) { }
    
    public markAsBorrowed(): void {
       this.isBorrowed = true
   }
}

const book = new Book('Three friends', 'Yar')


// Стоври клас Library та опиши його інтерфейс
// books (масив) масив книг в бібілотеці
// метод add() буде додавати книгу в масив (екземпляр класу Book)
// метод borrowBook() для оренди книги який приймає назву книги
// метод getBorrowedBooks повертає масив всіх орендованих книг
// метод getAvailableBooks повертає масив всіх достпуних книг книг

interface ILibrary {
    books: Book[];
    add(book:Book): void;
    borrowBook(title: string): void;
    getBorrowedBooks(): Book[];
    getAvailableBooks():Book[]
}

class Library implements ILibrary {
    public books: Book[] = [];
    
   public add(book: Book): void {
        this.books.push(book)
    };

    public borrowBook(title: string): void {
        const book = this.books.find(({ title: bookTitle }) => bookTitle === title);
        if (!book) { console.log("Book is missing"); return }
        if (book.isBorrowed) { console.log("Book is already borrowed"); return }
        book.markAsBorrowed();

    }



    public getBorrowedBooks(): Book[] {
       return this.books.filter((book)=>book.isBorrowed)

    }
    public getAvailableBooks(): Book[] {
      return this.books.filter((book)=>!book.isBorrowed) 
   }

}


const book1 = new Book('Three friends', 'Yar')
const book2 = new Book('Three friends1', 'Yar1')
const book3= new Book('Three friends2', 'Yar2')

const library = new Library()
library.add(book1)
library.add(book2)
library.add(book3)
library.borrowBook('Three friends')
console.log(library)
console.log(library.getAvailableBooks())
console.log(library.getBorrowedBooks())