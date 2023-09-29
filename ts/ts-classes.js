var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Fiction = /** @class */ (function (_super) {
    __extends(Fiction, _super);
    function Fiction(name, author, price) {
        var _this = _super.call(this, name, author) || this;
        _this.price = price;
        return _this;
    }
    Fiction.prototype.show = function () {
        console.log("Book name: ".concat(this.name));
        console.log("Author: ".concat(this.author));
        console.log("Price ".concat(this.price));
    };
    return Fiction;
}(Book));
var fictionBook = new Fiction('The New India', 'Some Writer', 999);
fictionBook.show();
var NonFiction = /** @class */ (function (_super) {
    __extends(NonFiction, _super);
    function NonFiction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NonFiction;
}(Book));
var nonFictionBook = new NonFiction('Some Book Title', 'Some Other Writer');
nonFictionBook.show();
