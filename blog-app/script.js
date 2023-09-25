
console.log('blog app');

// home page - welcome 
// blogs list 
// individual blog post 
// write new blog 

// Fetch data from a service and consume it and render it on HTML page 

const url = 'https://jsonplaceholder.typicode.com/posts/22';

fetch(url)
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


// axios

