import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux to dispatch actions
import { addTask } from '../features/tasks/tasksSlice'; 
import { IoIosAddCircle } from "react-icons/io"; // add button icon
import { MdLibraryAddCheck } from "react-icons/md"; // added popup icon

const TaskInput = () => {
    const [task, setTask] = useState(''); // State for storing the task input
    const dispatch = useDispatch(); 
    const [added, setAdded] = useState(false); // State for showing the added task confirmation

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) { // Check if the task input is not empty
            dispatch(addTask(task)); // Dispatch the addTask action with the task input
            setTask(''); // Clear the task input field
            setAdded(true); 
        }
        // Hide the added task confirmation for 2 seconds
        setTimeout(() => {
            setAdded(false);
        }, 2000);
    };

    return (
        <div>
            <form style={{ textAlign: 'center', marginTop: '10px' }} onSubmit={handleSubmit}>
                <input
                    className='input'
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)} // Update the task state on input change
                    placeholder="Enter a task.."
                />
                <button className='add-button' type="submit">Add <IoIosAddCircle /></button> 
            </form>
            {added && <div className='pop-up'><MdLibraryAddCheck />Task Added..!</div>} 
        </div>
    );
};

export default TaskInput; 