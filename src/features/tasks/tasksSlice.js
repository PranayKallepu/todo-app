import { createSlice } from '@reduxjs/toolkit';

// Creating a slice for tasks management with Redux Toolkit
const tasksSlice = createSlice({
    name: 'tasks', 
    initialState: [], // Initialize
    reducers: {
        // Reducer for adding a new task
        addTask: (state, action) => {
            // Push a new task object with unique id, text from action payload, and completed status as false
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        // Reducer for deleting a task by its id
        deleteTask: (state, action) => {
            // Return a new state array excluding the task with the specified id
            return state.filter(task => task.id !== action.payload);
        },
        // Reducer for toggling the completion status of a task
        toggleComplete: (state, action) => {
            // Find the task with the specified id
            const task = state.find(task => task.id === action.payload);
            if (task) {
                // Toggle the completed status of the found task
                task.completed = !task.completed;
            }
        },
        // Reducer for editing a task's text
        editTask: (state, action) => {
            const { id, text } = action.payload; // Destructure id and text from the action payload
            // Find the task with the specified id
            const task = state.find(task => task.id === id);
            if (task) {
                // Checking if text is defined before updating the task's text
                if (text !== undefined) {
                    task.text = text;
                }
            }
        }
    }
});

export const { addTask, deleteTask, toggleComplete, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
