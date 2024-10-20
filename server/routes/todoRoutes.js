// todoRoutes.js
// Defines API routes for managing our To-Do List using CRUD operations (Create, Read, Update, Delete)

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let todos = [];

// READ (HTTP GET) route: Returns the To-Do List
router.get('/todos', (req, res) => {
    res.json(todos);
});

// CREATE (HTTP POST) route: Create and add new list item
router.post('/todos', (req, res) => {
    const newItem = {
        id: uuidv4(),  // Generate a unique UUID for the task to avoid possible collisions while accessing our list
        task: req.body.task, // Task description of list item
        completed: req.body.completed || false, // Task completion status
        createdAt: req.body.createdAt || Date.now()  // Use task creation date to appropriately sort open and completed tasks
    };
    todos.push(newItem);
    res.status(201).json(newItem);
});

// DELETE (HTTP DELETE) route: Remove item from the list entirely, without marking it as completed
router.delete( '/todos/:id', (req, res) => {
    const { id } = req.params;
    const newTodos = todos.filter((todo) => todo.id !== id); // Filter out the requested item from the list

    if (newTodos.length !== todos.length) {
        todos = newTodos;
        res.status(204).send();  // Respond with no content after deletion to indicate success
    } else {
        res.status(404).json({ message: "Task not found in list!" });
    }
});

// UPDATE (HTTP PUT) route: Update task description or mark task as complete
router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        todo.task = req.body.task || todo.task;  // Update task description if provided
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;  // Update completed status if provided
        res.json(todo);  // Respond with updated task
    } else {
        res.status(404).json({ message: "Task not found!" });
    }
});

module.exports = router; // Export the router to be used in server.js