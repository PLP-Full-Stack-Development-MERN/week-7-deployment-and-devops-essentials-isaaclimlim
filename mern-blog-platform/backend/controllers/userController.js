const express = require('express');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//User Authentication
const userSignup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const userLogin = async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: 'User not found' });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user by id

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user by id

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = { userSignup, userLogin, getUsers, getUserById, updateUser, deleteUser };
