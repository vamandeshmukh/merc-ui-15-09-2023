
console.log('ts-classes.ts');

// // TS / JS Object 
// const empData = { eid: number = 101, firstName: string = 'Sonu' };

// class definition 
class Book {

    // properties / fields 
    name: string;
    author: string;

    // constructor 
    constructor(name: string, author: string) {
        this.name = name;
        this.author = author;

    }
    // methods 
    show() {
        console.log(`Book name: ${this.name}`);
        console.log(`Author: ${this.author}`);
    }
}
const book1 = new Book('Happy Days', 'Sonu Singh');
book1.show();
const book2 = new Book();
book2.show();

class Fiction extends Book {

    price: number;

    constructor(name: string, author: string, price: number) {
        super(name, author);
        this.price = price;
    }

    show() {
        console.log(`Book name: ${this.name}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price ${this.price}`);
    }
}

const fictionBook = new Fiction('The New India', 'Some Writer', 999);
fictionBook.show();

class NonFiction extends Book {

}

const nonFictionBook = new NonFiction('Some Book Title', 'Some Other Writer');

nonFictionBook.show();








