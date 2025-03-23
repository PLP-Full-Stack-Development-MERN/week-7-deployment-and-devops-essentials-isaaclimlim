const express = require('express');
const router = express.Router();
const { userSignup, userLogin, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController.js');

// User routes

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;