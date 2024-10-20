import React, {useState} from 'react';

// Form component to add a new To-Do task
// Receives the addTodo function as a prop from the parent (App.js) and sends the new task back on submission
function TodoForm({addTodo}) {
    const [task, setTask] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the page from refreshing on form submit
        if (!task.trim()) return; // Ignore empty task submissions
        addTodo(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input field to type a new task */}
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)} // Update task state as user types
                placeholder="Add a new task"
            />
            {/* Button to submit the form and add the task */}
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
