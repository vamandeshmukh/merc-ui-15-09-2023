
import express from 'express';
import { blogData } from './blog-data.js';

const app = express();
const port = 1234;

app.use(express.json());

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

