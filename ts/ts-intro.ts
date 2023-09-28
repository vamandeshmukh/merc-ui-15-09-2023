// install TS 
// npm install typescript --location=global
// Check the version 
// tsc -v
// Run TS code 
// tsc ts-intro.ts 
// Run JS 
// node ts-intro.js 

console.log('ts intro');

// const salary: number = 'abc';
const salary: number = 10;
console.log(salary);

// const addNums = (num, num2) => {
//     return num + num2;
// };

const addNums = (num: number, num2: number): number => {
    return num + num2;
};

// const addNums = (num: number, num2: number): number => {
//     // return num + num2;
//     console.log(num + num2);
// };

// const addNums = (num: number, num2: number): number => {
//     return 'a string value';
// };

addNums(10, 20);





