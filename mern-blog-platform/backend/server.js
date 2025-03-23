const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('../backend/routes/userRoute.js');
const blogRouter = require('../backend/routes/blogRoute.js');

dotenv.config();
const app = express();
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

// If you're using URL-encoded form data, add this:
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

//Define routes
app.use('/api/auth', userRouter);
app.use('/api/blogs', blogRouter);

const MONGODB = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

//Connect to MongoDB
mongoose.connect(MONGODB)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});