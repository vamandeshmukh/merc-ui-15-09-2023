
// Destructuring in JS 

// const nums = [10, 20, 30, 40, 50];

// // let a = nums[0];
// // let b = nums[1];

// // let a, b;
// // [, a, b] = nums; // destructuring assignment 

// let [a, b] = nums;

// console.log(nums);
// console.log(a);
// console.log(b);

// spread operator ... 

// const nums = [10, 20, 30, 40, 50];
// const nums2 = [...nums, 60, 70, 80];

// console.log(nums2);

// const str = 'Hello';
// const s2a = [...str];
// console.log(s2a);

// const nums = [10, 20, 30, 40, 50];

// let [a, b, ...nums2] = nums;

// console.log(nums2);

// const addNums = (...nums) => {
//     console.log(nums);
// };

// addNums(10, 20, 30);


// for of loop 

// const nums = [10, 20, 30, 40, 50];

// console.log(nums);

// for (let i = 0; i < nums.length; i++)
//     console.log(nums[i]);

// for (const elem in nums)
//     console.log(elem);

// for (const elem of nums)
//     console.log(elem);

// array methods 

// nums.forEach((elem) => {
//     console.log(elem);
// });

//  nums.pop();
//  nums.push();
//  nums.otherMethods();

// object methods 

const empData = {
    eid: 101,
    firstName: 'Sonu',
    isMarried: false,
    phones: [9876, 6789],
    address: {
        city: 'Hyderabad',
        pin: 500001
    },
    bio: '@sonu123'
};

// console.log(Object.keys(empData));
// console.log(Object.values(empData));
// console.log(Object.keys(empData));
// console.log(Object.entries(empData));


// function fun () {
//     // body 
// };

// // IIFE 

// // ()();

// (function () {
//     console.log('IIFE called');
// })();

// function syntaxes 

// const fun = () => { };
// const fun2 = (a) => { console.log(a); };
// const fun3 = a => { console.log(a); };
// const fun4 = a => console.log(a);

// const calcGst = (amount) => { return amount * 1.18; };
// const calcGst2 = amount => { return amount * 1.18; };
// const calcGst3 = amount => amount * 1.18;

// console.log(calcGst3(100));

// map reduce filter sort 

// const nums = [2, 6, 3, 8, 4, 9];
// console.log(nums.length);
// console.log(nums);

// const nums2 = nums.map(() => {});
// const nums2 = nums.map((elem) => { return elem * 2; });

// map 
// const nums2 = nums.map(elem => elem * 2);
// console.log(nums2);

// filter 
// const nums3 = nums.filter(elem => elem % 2 == 0);
// console.log(nums3);

// sort 
// const nums4 = nums.sort();
// console.log(nums4);

// reduce 
// const nums5 = nums.reduce((sum, elem) => sum + elem, 0);
// console.log(nums5);

// function chaining 
// pure function - predictable 


const nums = [2, 6, 3, 8, 4, 9];
console.log(nums);

const result = nums
    .filter(elem => elem % 2 == 0)
    .map(elem => elem * 2)
    .sort();

console.log(result);





