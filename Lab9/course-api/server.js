const express = require('express');
const mongoose = require('mongoose');
const courseRouter = require('./routes/courseRouter');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/lab9')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/api/courses', courseRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});