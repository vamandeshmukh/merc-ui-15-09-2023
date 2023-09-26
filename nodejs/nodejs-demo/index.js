// create a new project -
// in the project folder in CMD - 
// npm init -y

// edit package.json 
// create other .js files 
// npm install 

// start the app  
// npm start 

// stop the app 
// Ctrl + C 

// import express from 'express';
const express = require('express');
const app = express();

const port = 3000;

// app.listen(arg1, arg2);
// app.listen(port, () => { });

app.listen(port, () => {
    console.log(`App is running on ${port}.`);
});

// app.get(arg1, arg2);
// app.get('', () => { });

app.get('', (req, res) => {
    console.log('welcome');
    res.send('Welcome to Merc App');
});


