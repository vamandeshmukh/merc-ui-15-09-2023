
// Asynchronous JS 

// console.log('One');

// setTimeout(() => {
//     console.log('Two');
// }, 2000);

// console.log('Three');

// const fun = (arg) => {
//     const num = arg * 2;
//     console.log(num); 
// };

// fun(10);  // anonymous 

// const a = 20; // named 
// fun(a);

// Function as arguments to another function 
// In JS, a function can take another function as argument 

const fun = (arg) => {
    console.log('fun function called');
    arg();
};

fun(() => { console.log('anonymous function called'); }); // like line 17

const namedFunction = () => { console.log('named function called') };
fun(namedFunction); // like line 20

