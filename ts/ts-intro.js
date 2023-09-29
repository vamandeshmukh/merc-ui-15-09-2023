// install TS 
// npm install typescript --location=global
// Check the version 
// tsc -v
// Run TS code 
// tsc ts-intro.ts 
// Run JS 
// node ts-intro.js 
// console.log('ts intro');
// // const salary: number = 'abc';
// const salary: number = 10;
// console.log(salary);
// // const addNums = (num, num2) => {
// //     return num + num2;
// // };
// const addNums = (num: number, num2: number): number => {
//     return num + num2;
// };
// // const addNums = (num: number, num2: number): void  => {
// //     // return num + num2;
// //     console.log(num + num2);
// // };
// // const addNums = (num: number, num2: number): number => {
// //     return 'a string value';
// // };
// addNums(10, 20);
// Datatypes in TS 
// Basic types 
// Advanced types 
// Basic types - Boolean Number String Array Any Tuple Enum Void
// let income: number;
// let firstName: string;
// let isMarried: boolean;
// let someVar: any;
// array 
// const myArr: number[] = [10, 20, 30];
// const myArr: number[] = [10, 'abc', 30];
// tuple 
// let employee: [number, string] = [101, 'Sonu'];
// let employee: [number, string] = [101, false];
// let employee: [number, string] = [101, 'Sonu', 90000];
// // let someVar: any = 'abc';
// let someVar: any = 10;
// console.log(someVar);
// someVar = 'abc';
// console.log(someVar);
// let num = 10;
// console.log(num);
// num = 'abc';
// console.log(num);
// enum 
// enum Color { red, yellow, blue };
// const color: Color = Color.yellow;
// console.log(color);
// // union types 
// let someVar: number | string = 10;
// // any 
// // let someVar: any = 10;
// someVar = 'abc';
// someVar = false;
// // Optional Parameters
// const fun = (a: number, b?: number) => {
//     console.log(a);
//     console.log(b);
// };
// fun(10, 20);
// fun(10);
// Default Parameters
// // Optional Parameters
// const fun = (a: number = 2, b: number = 3) => {
//     console.log(a);
//     console.log(b);
// };
// fun(10, 20, 30);
// fun(10, 20);
// fun(10);
// fun();
// function greet(greeting: string, ...names: string[]) {
//     return greeting + " " + names.join(", ") + "!";
// }
// const m1: string = greet("Hello", "Steve", "Bill"); 	// returns "Hello Steve, Bill!"
// const m2: string = greet("Hello");					// returns "Hello !"
// console.log(m1);
// console.log(m2);
// let numOrStr: number | string;
// let anyVal: any;
// function fun(a: number, b?: number) { };
// function fun2(a: number = 1, b: number = 2) { };
// function fun3(a: number, ...b: number[]) { };
// fun3(10);
// fun3(10, 20);
// fun3(10, 20, 30, 40, 50);
// let person: { name: string, age: number } = {
//     name: 'Hari',
//     age: 25
// };
// person = {};			// error - Type '{}' is missing the following properties
// // from type '{ name: string; age: number; }': name, age 
// person = {			// this works
//     name: 'Krish',
//     age: 20
// };
// person = {			// this works
//     name: false,
//     age: 20
// };
var num;
num = 10;
console.log(num);
















