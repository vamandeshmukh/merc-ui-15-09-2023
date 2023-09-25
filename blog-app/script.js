
console.log('blog app');

// ===========================================
// Assignment:

// Create a blogging app using HTML, CSS, JS 
// pages - 
// home page - welcome 
// blogs list 
// individual blog post 
// write new blog 

// API guide - 
// https://jsonplaceholder.typicode.com/guide/ 
// ===========================================


// Fetch data from a service and consume it and render it on HTML page 

const url = 'https://jsonplaceholder.typicode.com/posts/';

// fetch all blogs list 

fetch(url)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        let blogList = '';
        data.forEach(element => {
            blogList += `<p>${element.title}</p>`;
            blogList += `<a href="./blog-details.html?blog-id=${element.id}">${element.title}</a>`;
        });
        document.getElementById('all-blogs').innerHTML = blogList;
    })
    .catch((error) => {
        console.log(error);
    });


// fetch individual blog 
fetch(url + '22')
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById('blog-title').innerHTML = data.title;
        document.getElementById('blog-body').innerHTML = data.body;
    })
    .catch((error) => {
        console.log(error);
    });




