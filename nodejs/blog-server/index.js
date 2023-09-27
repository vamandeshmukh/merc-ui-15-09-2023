import cors from 'cors';
import express from 'express';
import { blogData } from './blog-data.js';

const app = express();
const port = 1234;

app.use(express.json());
// app.use(cors({ origin: true, allowedHeaders: true })); // allow this 
app.use(cors()); // allow this 
app.options('*', cors()); // allow this 

app.listen(port, () => {
    // code 
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/get-blog-by-id/:blogid', (req, res) => {
    const blogId = req.params.blogid;
    const blog = blogData.find(b => b.id == blogId);
    console.log(blog);
    if (blog)
        res.status(200).send(blog);
    else
        res.status(404).send({ message: `Blog with blgoId ${blogId} not found!` });
});

app.get('/get-blog-by-title/:title', (req, res) => {
    const blogTitle = req.params.title;
    const blog = blogData.find(b => {
        return b.title.match(blogTitle);
    });
    console.log(blog);
    if (blog)
        res.status(200).send(blog);
    else
        res.status(404).send({ message: `Blog with title ${blogTitle} not found!` });
});


app.get('/get-all-blogs', (req, res) => {
    console.log(blogData.length);
    if (blogData.length > 0)
        res.status(200).send(blogData);
    else
        res.status(404).send({ message: `Blogs not found!` });
});

app.post('/write-blog', (req, res) => {
    console.log(blogData);
    const blogSize = blogData.length;
    const newBlog = { id: blogSize + 1, title: req.body.title, body: req.body.body, writerId: req.body.writerId };
    blogData.push(newBlog);
    if (blogData.length === blogSize + 1)
        res.status(201).send(newBlog);
    console.log(blogData);
});


