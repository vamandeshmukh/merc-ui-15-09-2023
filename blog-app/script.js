
console.log('blog app');


// Fetch data from a service and consume it and render it on HTML page 


const url = 'https://jsonplaceholder.typicode.com/posts/22';

fetch(url)
    .then((resp) => {
        console.log(resp);
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById('blog-title').innerHTML = data.title;
        document.getElementById('blog-body').innerHTML = data.body;
    })
    .catch();



