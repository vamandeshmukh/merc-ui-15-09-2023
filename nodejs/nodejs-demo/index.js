
// const express = require('express'); // CommonJS module

import express from 'express'; // ES module

// import object which is default exported 
import { addNums, subNums } from './calc.js';

// // import object which is default exported 
// import addNums from './calc.js';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});

app.get('', (req, res) => {
    const sum = addNums(10, 20);
    const sum2 = subNums(20, 10);
    console.log('welcome');
    res.send(`Welcome to Merc App ${sum} ${sum2}`);
    // res.send(`Welcome to Merc App`);
});

app.post('/abc', (req, res) => {
    console.log(req.body);
    res.send('Done!');
});




// // create a new project -
// // in the project folder in CMD -
// // npm init -y

// // edit package.json
// // create other .js files
// // npm install

// // start the app
// // npm start

// // stop the app
// // Ctrl + C
// // Y

// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json()); // for JSON data
// app.use(express.urlencoded({ extended: true })); // for URL-encoded data

// // app.listen(arg1, arg2);
// // app.listen(port, () => { });

// app.listen(port, () => {
//     console.log(`App is running on http://localhost:${port}`);
// });

// // app.get(arg1, arg2);
// // app.get('', () => { });

// app.get('', (req, res) => {
//     console.log('welcome');
//     res.send('Welcome to Merc App');
// });

// app.get('/about', (req, res) => {
//     console.log('about');
//     res.send('About Merc App');
// });

// app.get('/contact', (req, res) => {
//     console.log('contact');
//     res.send('Contact Merc App');
// });

// app.post('/abc', (req, res) => {
//     console.log(req.body);
//     res.send('Done!');
// });

