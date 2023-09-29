
// // console.log('ts-classes.ts');

// // // // TS / JS Object 
// // // const empData = { eid: number = 101, firstName: string = 'Sonu' };

// // // class definition 
// // class Book {

// //     // properties / fields 
// //     name: string;
// //     author: string;
// //     public isbn: string;
// //     private publisher: string;
// //     protected sellPrice: number;

// //     // constructor 
// //     constructor(name: string, author: string) {
// //         this.name = name;
// //         this.author = author;

// //     }
// //     // methods 
// //     show() {
// //         console.log(`Book name: ${this.name}`);
// //         console.log(`Author: ${this.author}`);
// //     }
// // }
// // const book1 = new Book('Happy Days', 'Sonu Singh');
// // book1.show();
// // const book2 = new Book();
// // book2.show();

// // class Fiction extends Book {

// //     price: number;

// //     constructor(name: string, author: string, price: number) {
// //         super(name, author);
// //         this.price = price;
// //     }

// //     show() {
// //         console.log(`Book name: ${this.name}`);
// //         console.log(`Author: ${this.author}`);
// //         console.log(`Price ${this.price}`);
// //     }
// // }

// // const fictionBook = new Fiction('The New India', 'Some Writer', 999);
// // fictionBook.show();

// // class NonFiction extends Book {

// // }

// // const nonFictionBook = new NonFiction('Some Book Title', 'Some Other Writer');

// // nonFictionBook.show();


// class Book {
//     public title: string;
//     public author: string;
//     public static publisher: string;
// }

// const book1 = new Book();

// book1.author

// Book.publisher



// // abstract

// const addNums = (a: number, b: number): number =>  // what ?
// {
//     return a + b; // how?
// };


// abstract class Employee {

//     writeCode(): void {
//         console.log('Write code properly...');
//     };

//     abstract writeDocs(): void;
// }

// class ContractualEmployee extends Employee {

//     writeDocs(): void {
//         console.log('Write documentaiton properly');
//     }
// }

// const obj = new ContractualEmployee();

// obj.writeDocs();






// objects 


// let book1: { name: string, author: string, price: number } = {
//     name: 'Harry Potter and the Sorcerer’s Stone',
//     author: 'J.K. Rowling',
//     price: 2451
//  };

//  let book2: { name: string, author: string, price: number } = {
//     name: 'Eat Pray Love',
//     author: 'Elizabeth Gilbert',
//     price: 458
//  };


// type Book = { name: string, author: string, price: number };

// // class Bk { name: string; author: string; price: number }

// let book1: Book = {
//     name: 'Harry Potter and the Sorcerer’s Stone',
//     author: 'J.K. Rowling',
//     price: 2451
// };

// let book2: Book = {
//     name: 'Eat Pray Love',
//     author: 'Elizabeth Gilbert',
//     price: 458
// };







