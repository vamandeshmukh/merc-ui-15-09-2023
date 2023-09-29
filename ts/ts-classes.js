console.log('ts-classes.ts');
// // TS / JS Object 
// const empData = { eid: number = 101, firstName: string = 'Sonu' };
// class definition 
var Book = /** @class */ (function () {
    // constructor 
    function Book(name, author) {
        this.name = name;
        this.author = author;
    }
    // methods 
    Book.prototype.show = function () {
        console.log("Book name: ".concat(this.name));
        console.log("Author: ".concat(this.author));
    };
    return Book;
}());
var book1 = new Book('Happy Days', 'Sonu Singh');
book1.show();
var book2 = new Book();
book2.show();
