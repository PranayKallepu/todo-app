import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { deleteTask, toggleComplete, editTask } from '../features/tasks/tasksSlice'; 
import { MdDeleteForever } from "react-icons/md"; //delete icon 
import { FaEdit } from "react-icons/fa";         // edit icon
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks); // Access tasks array from the Redux store
    const dispatch = useDispatch(); // Get the dispatch function from react-redux
    const [searchTerm, setSearchTerm] = useState(''); // State for storing the search term

    // Function to get a random color for task border
    const getRandomColor = () => {
        const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    // Handle editing a task
    const handleEdit = (task) => {
        const newText = prompt('Edit task:', task.text); // Prompt the user to edit the task text
        if (newText !== null) {
            if (newText.trim() !== '') {
                dispatch(editTask({ id: task.id, text: newText.trim() })); // Dispatch the editTask action with the new text
            }
        }
    };

    // Handle deleting a task
    const handleDelete = (taskId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            dispatch(deleteTask(taskId)); // Dispatch the deleteTask action with the task ID
        }
    };

    // Handle toggling the completion status of a task
    const handleToggleComplete = (taskId) => {
        dispatch(toggleComplete(taskId)); // Dispatch the toggleComplete action with the task ID
    };

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // Update the search term state
    };

    // Filter tasks based on search term
    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='task-list-card'>
            <div className='search'>
                <input
                    type='search'
                    placeholder='Search tasks..'
                    value={searchTerm}
                    onChange={handleSearchChange} // Update search term on input change
                />
                <FaSearch className='search-logo' /> {/* Search icon */}
            </div>
            {filteredTasks.length === 0 ? (
                <div className='no-tasks-card'>
                    <img alt='no-tasks' src='/images/no-tasks.webp' /> 
                    <h2>No tasks available</h2> {/* No tasks message */}
                </div>
            ) : (
                <ul>
                    {filteredTasks.map((task, index) => (
                        <li key={task.id}>
                            <input
                                className='checkbox-input'
                                id={`check-${task.id}`}
                                type='checkbox'
                                checked={task.completed}
                                onChange={() => handleToggleComplete(task.id)} // Toggle task completion status
                            />
                            <div className='label-container' style={{ textDecoration: task.completed ? 'line-through' : 'none', borderColor: getRandomColor() }}>
                                <label className='checkbox-label' htmlFor={`check-${task.id}`}>
                                    {index + 1}. {task.text} {/* Display task text with index */}
                                </label>
                                <FaEdit className='button edit-button' onClick={() => handleEdit(task)} /> {/* Edit button */}
                                <MdDeleteForever className='button delete-button' onClick={() => handleDelete(task.id)} /> {/* Delete button */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList; 
