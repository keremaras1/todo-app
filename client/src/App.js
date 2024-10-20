// App.js
// Main component that renders the To-Do List app, manages state, and handles task-related actions (add, edit, toggle, delete).

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

function App() {
    const [todos, setTodos] = useState([]);

    // Function to fetch all To-Do items from the backend and store them in the state
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('/api/todos');  // Fetch the To-Do items
                setTodos(response.data);  // Set the todos state
            } catch (error) {
                console.error('Error fetching To-Do List:', error);
            }
        })();  // This immediately invokes the async function
    }, []);


    // Function to add a new To-Do item
    const addTodo = async (task) => {
        try {
            const newTodo = {task, completed: false};
            const response = await axios.post('/api/todos', newTodo);
            setTodos([...todos, response.data]);
        } catch (error) {
            console.error('Error adding new task:', error);
        }
    };

    // Function to delete a To-Do item
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/api/todos/${id}`);  // Delete from backend
            setTodos(todos.filter((todo) => todo.id !== id));  // Filter out the deleted task
        } catch (error) {
            console.error("Error deleting task", error);
        }
    };

    // Function to edit the text of an existing item
    const editTodo = async (id, newTask) => {
        try {
            const updatedTodo = todos.find((todo) => todo.id === id);
            const newTodo = {...updatedTodo, task: newTask};  // Update the task description
            await axios.put(`/api/todos/${id}`, newTodo);  // Send the edited task with to the backend
            setTodos(todos.map((todo) => (todo.id === id ? newTodo : todo)));  // Update state
        } catch (error) {
            console.error('Error editing task description:', error);
        }
    };

    // Function to mark a list item as complete or incomplete
    const toggleComplete = async (id) => {
        try {
            const updatedTodo = todos.find((todo) => todo.id === id);
            const newTodo = {...updatedTodo, completed: !updatedTodo.completed};  // Toggle completion
            await axios.put(`/api/todos/${id}`, newTodo);  // Send updated item with new status to the backend
            setTodos(todos.map((todo) => (todo.id === id ? newTodo : todo)));  // Update state
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    return (
        <div className="App">
            <h1>My To-Do List</h1>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </div>
    );
}

export default App;
