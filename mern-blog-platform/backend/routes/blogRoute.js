const express = require('express');
const router = express.Router();
const { authenticate, getBlogs, getBlog, updateBlog, deleteBlog } = require('../controllers/blogController.js');

// Blog routes

router.post('/', authenticate);
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;