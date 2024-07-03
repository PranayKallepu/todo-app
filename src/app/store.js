import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import { debounce } from 'lodash';

// Load state from local storage 
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        if (serializedState === null) {
            return undefined;
        }
        return {
            tasks: JSON.parse(serializedState)
        };
    } catch (err) {
        console.error('Error loading tasks from localStorage:', err);
        return undefined;
    }
};

//configure the store
const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
    preloadedState: loadState() // Initialize with the loaded state
});

// Debounce the storage to avoid too frequent updates
const saveState = debounce(() => {
    try {
        const serializedState = JSON.stringify(store.getState().tasks);
        localStorage.setItem('tasks', serializedState);
    } catch (err) {
        console.error('Error saving tasks to localStorage:', err);
    }
}, 1000);

// Subscribe to store changes
store.subscribe(() => {
    saveState();
});

export default store;
