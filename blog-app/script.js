
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


// const blogUrl = 'https://jsonplaceholder.typicode.com/posts/';

const blogUrl = 'http://localhost:1234';

const commentsUrl = 'https://jsonplaceholder.typicode.com/comments/';
const writersUrl = 'https://jsonplaceholder.typicode.com/users/';

// fetch all blogs list 

fetch(`${blogUrl}/get-all-blogs`)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        let blogList = '';
        data.forEach(element => {
            blogList += `<a href="./blog-details.html?blog-id=${element.id}">${element.title}</a><br />`;
        });
        document.getElementById('all-blogs').innerHTML = blogList;
    })
    .catch((error) => {
        console.log(error);
    });


// fetch individual blog 
let blogId = new URLSearchParams(window.location.search).get('blog-id');

if (!blogId)
    blogId = Math.floor(Math.random() * 100);

console.log(blogId);
fetch(`${blogUrl}/get-blog-by-id/${blogId}`)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById('blog-title').innerHTML = data.title;
        let tempData = '';
        data.title.split('').forEach((elem) => {
            tempData += `<span>${data.body}</span>`;
            console.log(elem);
        })
        document.getElementById('blog-body').innerHTML = tempData;

        // fetch comments 

        fetch(`${commentsUrl}?postId=${data.id}`)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                document.getElementById('comments-count').innerHTML = `${data.length} comments:`;
                let commentList = '';
                data.forEach(element => {
                    commentList += `<p>${element.name}</p><p>${element.body}</p><hr/>`;
                });
                document.getElementById('comment-list').innerHTML = commentList;
            })
            .catch((error) => {
                console.log(error);
            });

        // fetch writer data  

        fetch(`${writersUrl}/${data.userId}`)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                document.getElementById('writer-details').innerHTML =
                    `<p>Posted by: ${data.name}</p><p><a href="mailto:${data.email}">${data.email}</a></p>`;
            })
            .catch((error) => {
                console.log(error);
            });


    })
    .catch((error) => {
        console.log(error);
    });

// write blog 

const saveBlog = () => {
    const blogData = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    };

    console.log(blogData);

    fetch(`${blogUrl}/write-blog`, {
        method: 'POST',
        body: JSON.stringify(blogData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('write-blog-form').reset();
            alert(`${data.title} published successfully!`);
        });
};



// writer-details

