# To-Do App

A simple To-Do list application with CRUD (Create, Read, Update, Delete) functionality, built using a **Node.js/Express** backend and a **React** frontend. This app allows users to manage tasks efficiently by adding, editing, completing, and deleting tasks. The tasks are stored in-memory, making it a lightweight project without persistent storage.

## Features
- **Add tasks**: Users can create new to-do items.
- **Mark as completed**: Users can complete tasks while keeping them in the list.
- **Edit tasks**: Users can update task descriptions.
- **Delete tasks**: Users can remove tasks from the list.
- **Sort tasks**: Open tasks appear at the top (sorted by oldest), and completed tasks are displayed below.

## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **In-Memory Storage**: Tasks are stored temporarily and will reset on server restart.

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/keremaras1/todo-app.git
   cd todo-app

2. **Backend Setup**:
- From the todo-app directory navigate to the server directory, install backend dependencies, and start the backend server:
   ```bash
   cd server
   npm install
   npm run dev # starts server with nodemon

- The backend runs on **http://localhost:5001**.
  
2. **Frontend Setup**:
- From the todo-app directory navigate to the client directory, install frontend dependencies, and start the frontend:
   ```bash
   cd client
   npm install
   npm start

- The frontend runs on **http://localhost:3000**.

## Backend Structure

The backend is designed using **Node.js** and **Express** to manage CRUD operations for the To-Do items. It adheres to RESTful principles, with each route corresponding to specific API functionalities (creating, updating, deleting tasks, etc.).

### Architecture:
- **RESTful API**: Provides endpoints for task management (`/api/todos`).
- **In-Memory Data Storage**: Tasks are stored in-memory as JavaScript objects (non-persistent).

### Key Dependencies:
- **Express**: Handles routing and middleware integration for handling HTTP requests.
- **Cors**: Enables Cross-Origin Resource Sharing, allowing requests from the React frontend.
- **Nodemon** (development): Monitors and automatically restarts the server during development.
- **uuid**: Generates unique IDs for each task, ensuring proper identification across tasks.
  
This backend is lightweight and easy to extend for future database integration.

## Frontend Structure

The frontend is built using **React** to provide a responsive, interactive user interface for managing to-do tasks. The app communicates with the backend API to perform CRUD operations and updates the UI dynamically without page reloads.

### Architecture:
- **Component-Based Structure**: The frontend is structured using reusable React components (e.g., `TodoForm`, `TodoList`, `TodoItem`).
- **State Management**: React’s `useState` and `useEffect` hooks manage tasks and API calls.
- **Axios**: Used for making HTTP requests to the backend API.

### Key Dependencies:
- **React**: A JavaScript library for building the user interface.
- **Axios**: Handles API requests to the backend (fetching, adding, updating, deleting tasks).
- **React-Scripts**: Provides a build toolchain for the React app, managing development and production builds.
- **UUID**: Generates unique task IDs when creating new to-dos, ensuring consistency across components.

### Additional Features:
- **Task Sorting**: Automatically sorts open tasks at the top and completed tasks below.
- **Form Validation**: Basic validation is implemented to prevent empty tasks from being added.

The app is lightweight, easy to extend, and communicates seamlessly with the backend via the API.

## API Endpoints

- **GET `/api/todos`**: Fetch all to-do items.
- **POST `/api/todos`**: Add a new to-do item.
- **PUT `/api/todos/:id`**: Update a task (mark as completed, edit task).
- **DELETE `/api/todos/:id`**: Delete a task.

Each endpoint is designed to handle CRUD operations for managing to-do items.

## Known Limitations
- **In-Memory Storage**: The tasks are stored in-memory and is are not persistent, meaning that all data will be lost when the server restarts.
  
## Future Enhancements
- **Database Integration**: Add support for persistent storage using a database like MongoDB or PostgreSQL.
- **User Authentication**: Implement user authentication to allow different users to manage their own to-do lists.
- **Due Dates and Reminders**: Add functionality for setting due dates and task reminders.
