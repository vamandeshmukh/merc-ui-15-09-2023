
// document.write('Hello world!');
// console.log('Hello');
// console.log(10 + 20);

/*
console.log();
console.log();
*/

// Hello.java 
// Hello.class

// HTML - renders text and media in browser 
// CSS - style HTML 
// JS - programming logic in HTML / interactivity in HTML 

// JS Learning 
// datatypes, declartion of variables, operators, keywords, 
// loops, if else, functions, objects 
// error handling 

// variable declaration in JS 

// java 
// int num = 10;

// JS 
// let num = false;
// const num2 = 20;

// console.log(num);
// console.log(num2);

// Datatypes in JS 
// primitive types - number, boolean, string 
// reference types - array, obejct, function, class, ... 

// let someVar;
// console.log(someVar);
// console.log(typeof (someVar));

// someVar = 10;
// console.log(someVar);
// console.log(typeof (someVar));

// someVar = 20;
// console.log(someVar);
// console.log(typeof (someVar));

// someVar = 'abc';
// console.log(someVar);
// console.log(typeof (someVar));

// someVar = false;
// console.log(someVar);
// console.log(typeof (someVar));

// someVar = 30;
// console.log(someVar);
// console.log(typeof (someVar));

// num = 10; // do not use this 
// var num2 = 20; // do not use this 
// const num3 = 30; // use this a default choice 
// let num4 = 40; // use this when needed 

// const num = 10;
// console.log(num);
// num = 20; // error 
// console.log(num);

// string literals in JS 

// let firstName = 'Sonu';
// // let firstName = "Sonu";
// // let firstName = `Sonu`;

// let message = 'Hi ' + firstName + '!';
// let message2 = `Hi ${firstName}!`;

// console.log(message);

// Operators in JS 

// console.log(10 + 20);
// console.log(10 - 20);
// console.log(10 / 20);
// console.log(10 * 20);
// console.log(10 % 3);

// == !=  > >= < <= 
// === !== 

// console.log(10 == '10');
// console.log(10 === '10');

// console.log('10' + 5);
// console.log(10 + '5');
// console.log('10' - 5);
// console.log(10 - '5');
// console.log(10 + 'a');
// console.log(10 - 'a');


// Array in JS 

// const myArray = [10, 'abc', false];

// console.log(myArray);
// console.log(myArray[0]);

// // Object in JS 
// const empData = {
//     eid: 101,
//     firstName: 'Sonu',
//     isMarried: false,
//     phones: [9876, 6789],
//     address: {
//         city: 'Hyderabad',
//         pin: 500001
//     },
//     bio: '@sonu123'
// };

// // console.log(empData);
// console.log(empData.firstName);
// console.log(empData.address.city);


// Functions in JS 
// function, method, hook, routine, subroutine, ... 

// Old JS function 
// function fun2 () {};

// function myFunction() {
//     console.log('myFunction called');
// };

// myFunction();

// Modern JS arrow function 
// const fun = () => {};

// const fun = () => {
//     console.log('fun called');
//  };

//  fun();

// const addNums = (a, b) => {
//     console.log(a + b);
// };

// addNums(); // 
// addNums(10); // 
// addNums(10, 20); // 30 
// addNums(10, 20, 30); // 

// Function hoisting 

// fun(); // works 

// function fun() {
//     console.log('fun called');
// };

// fun(); // error

// const fun = () => {
//     console.log('fun called');
// };

// Variable hoisting 

// console.log(num);

// num = 10;
// var num = 10;
// const num = 10;
// let num = 10;


// const empData = {
//     eid: 101,
//     firstName: 'Sonu',
//     printFirstName: function () {
//         console.log(this.firstName);
//     }
// };

// const empData = {
//     eid: 101,
//     firstName: 'Sonu',
//     printFirstName: () => {
//         console.log(this.firstName);
//     }
// };

// empData.printFirstName();

// truthy falsy 
// falsy - false, 0, '', undefined, null 
// truthy - any other value 

// let firstName = 1; // 

// if (firstName) {
//     console.log('truthy');
// }
// else {
//     console.log('falsy');
// }

// copy by value (primitive types)

// let num = 10;
// let num2 = num;

// console.log(num); // 10
// console.log(num2); // 10

// num = 15;

// console.log(num); // 15 
// console.log(num2); // 10


// num2 = 20;

// console.log(num); // 15 
// console.log(num2); // 20

// copy by reference (objects and arrays)

// const empData = {
//     firstName: 'Sonu',
//     salary: 90000
// };

// const data2 = empData;

// console.log(empData);
// console.log(data2);

// empData.firstName = 'Monu';

// console.log(empData);
// console.log(data2);

// data2.salary = 'abc';

// console.log(empData);
// console.log(data2);


// Execution context in JS 

// Global execution context 
// Function execution context 


// function fun() {
//     console.log('fun called');
//     fun2();
// };

// function fun2() {
//     console.log('fun2 called')
// };

// fun();

// Special operators 

// typeof 
// delete
// ,
// instanceof
// 'condition' ? val1 : val2

// const num = 11;
// const result = num == 10 ? 'yes' : 'no';
// console.log(result);



