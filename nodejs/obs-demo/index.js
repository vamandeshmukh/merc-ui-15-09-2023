
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

// import fs from 'fs';


// // const readFileOps = (filePath, () => { } => { });

// // const readFileOps = ((filepath, () => {}) => {
// //     fs.readFile(filepath, (err, data) => {
// //         if (err)

// //     });
// // });

// console.log('start');

// const readFileOps = ((filepath, callback) => {
//     fs.readFile(filepath, 'utf8', (err, data) => {
//         if (err)
//             callback(err);
//         else
//             callback(data);
//     });
// });

// readFileOps('sample.txt', (err, data) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(data);
// });

// const dataToWrite = 'some more sample text';

// fs.appendFile('sample.txt', dataToWrite, (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Done!');

// });

// // fs.appendFile();

// readFileOps('sample.txt', (err, data) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(data);
// });

import fs from 'fs';

if (fs.existsSync('D:/VamanPro/Codes/merc/merc-ui-15-09-2023/nodejs/obs-demo/'))
    console.log('yes');
else
    console.log('no');

fs.readdir('D:/VamanPro/Codes/merc/merc-ui-15-09-2023/nodejs/obs-demo/',
    (err, files) => {
        if (err)
            console.log(err);
        else
            console.log(files);
    }
);















