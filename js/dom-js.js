
// DOM manipulation using JS 

console.log('DOM manipulation using JS');

// const printOutput = () => {
//     const userInput = 
//     document.getElementById('username').value;
//     console.log(userInput);
//     document.getElementById('output').innerHTML = 
//     userInput;
// };

const btn = document.getElementById('printbutton');

btn.addEventListener('click', () => {

    const userInput = document.getElementById('username').value;
    document.getElementById('output').innerHTML = userInput;

});
