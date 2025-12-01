const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage
let posts = [];
let currentId = 1; // Simple ID counter

// 1. READ ALL POSTS 
app.get("/posts", (req, res) => {
    res.json(posts);
});

// 2. UPLOAD A POST 
app.post("/posts", (req, res) => {
    const post = {
        id: currentId++, // Assign a unique ID to enable editing/deleting later
        title: req.body.title,
        content: req.body.content,
        comments: [] // Initialize empty comments array
    };

    posts.push(post);
    console.log(`Adding post: ${JSON.stringify(post)}`);
    res.status(201).json(post);
});

// 3. EDIT A POST 
// We use PUT and a path parameter :id to identify the post
app.put("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    // Update fields if they exist in the request body
    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;

    res.json(post);
});

// 4. DELETE A POST 
app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).send("Post not found");
    }

    // Remove the post from the array
    posts.splice(postIndex, 1);
    res.status(204).send(); // 204 No Content is standard for successful delete
});

// 5. ADD A COMMENT TO A POST 
app.post("/posts/:id/comments", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    const comment = {
        commentId: Date.now(), // Simple ID for the comment
        text: req.body.text
    };

    post.comments.push(comment);
    res.status(201).json(comment);
});

// 6. READ POST COMMENTS 
app.get("/posts/:id/comments", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.json(post.comments);
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});