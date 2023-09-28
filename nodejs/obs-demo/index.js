
// import { Observable, from, of, filter, map } from 'rxjs';

// const myArr = [10, 20, 30, 40, 50];

// const arrObs = from(myArr);

// // arrObs.subscribe((val) => {
// //     console.log(val);
// // });

// // arrObs
// // .pipe()
// // .subscribe()
// // .unsubscribe();

// arrObs
//     .pipe(
//         filter(val => val % 4 == 0),
//         // code 
//         map(val => val + 2)
//     )
//     .subscribe((val) => {
//         // setTimeout(() => {
//         console.log(val);
//         // }, 2000);
//     })
//     .unsubscribe();



// event loop - callbacks 

// console.log('start');

// const asyncFun = (arg) => {
//     setTimeout(() => {
//         arg(' async ops completed');
//     }, 2000);
// };

// console.log('async ops started');

// asyncFun((result) => {
//     console.log(result);
// });

// console.log('end');


// event loop in node - 
// read file operations 








