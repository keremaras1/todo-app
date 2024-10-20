// TodoItem.js
// Renders a single To-Do item along with its checkbox, task description, and action buttons (edit, delete).
// Supports editing task descriptions and marking tasks as complete/incomplete.

import React, {useState} from 'react';

function TodoItem({todo, id, toggleComplete, deleteTodo, editTodo}) {
    const [isEditing, setIsEditing] = useState(false);  // Track whether the task is being edited
    const [newTask, setNewTask] = useState(todo.task);  // Store the new task description

    // Function to handle the "Save" action after editing
    const handleSave = () => {
        editTodo(id, newTask);
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            <div className="todo-content">
                {/* Checkbox to toggle the completion status */}
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(id)}
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                ) : (
                    <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.task}
                    </span>
                )}
                {/* If editing, show Save and Cancel buttons, otherwise show Edit and Delete */}
                {isEditing ? (
                    <>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => deleteTodo(id)}>Delete</button>
                    </>
                )}
            </div>
        </li>
    );
}

export default TodoItem;
