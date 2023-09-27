
import express from 'express';
const app = express();
const port = 1234;

app.use(express.json());

app.listen(port, () => {
    // code 
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('get-blog-by-id', (req, res) => {
    // code 
});

app.get('get-blog-by-title', (req, res) => {
    // code 
});

app.get('get-all-blogs', (req, res) => {
    // code 
});

app.post('write-blog', (req, res) => {
    // code 
});


