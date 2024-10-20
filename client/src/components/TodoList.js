// TodoList.js
// Renders two lists: open tasks and completed tasks, passed from the parent component.
// Uses flexbox for layout and ensures tasks are sorted by their creation date.

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos, toggleComplete, deleteTodo, editTodo}) {
    // First, sort all tasks by from oldest to newest
    const sortedTodos = todos.sort((a, b) => a.createdAt - b.createdAt);

    // Filter open tasks while maintaining the sorted order
    const openTasks = sortedTodos.filter(todo => !todo.completed);

    // Filter completed tasks while maintaining the sorted order
    const completedTasks = sortedTodos.filter(todo => todo.completed);

    return (
        <div>
            {/* Section for Open Tasks ordered from the oldest first*/}
            <h2>Open Tasks</h2>
            {openTasks.length > 0 ? (
                <ul>
                    {/* Map over open tasks and render TodoItem for each */}
                    {openTasks.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    ))}
                </ul>
            ) : (
                <p>No open tasks available</p>
            )}

            {/* Section for Completed Tasks ordered from the oldest first*/}
            <h2>Completed Tasks</h2>
            {completedTasks.length > 0 ? (
                <ul>
                    {/* Map over completed tasks and render TodoItem for each */}
                    {completedTasks.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    ))}
                </ul>
            ) : (
                <p>No completed tasks available</p>
            )}
        </div>
    );
}

export default TodoList;
