const express = require('express');
const Blog = require('../models/Blog.js');

const authenticate = async (req, res) => {
    const { title, content } = req.body;
    try {
        const blog = new Blog({ title, content, author: req.user.id });
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username');
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single blog

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author', 'username');
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a blog
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        if (blog.author.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });
        blog.title = req.body.title;
        blog.content = req.body.content;
        await blog.save();
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        if (blog.author.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });
        await blog.deleteOne();
        res.json({ message: 'Blog deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { authenticate, getBlogs, getBlog, updateBlog, deleteBlog };