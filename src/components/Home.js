import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // to access the Redux store

const Home = () => {
    const tasks = useSelector((state) => state.tasks);
    const count = tasks ? tasks.length : 0; // Calculate the number of tasks
    const navigate = useNavigate();
    const userName = localStorage.getItem('name');

    if (!userName) {
        navigate('/'); // Redirect to the start page if no name is found in localStorage
    }

    // Function to format the current date
    const formatDate = () => {
        const date = new Date();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options); // Format date as dd/mm/yyyy
        const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
        return `${formattedDate} ${dayOfWeek}`;
    };

    return (
        <div className="App">
            <h1 style={{ textAlign: 'center', color: 'black' }}>Todos</h1>
            <div className='details-card'>
                <div className='details-box'>
                    <div>
                        <h2>Hello {userName}</h2> {/* Display the user's name */}
                        <div className='tasks-count'>Today you have <span>{count}</span> tasks</div>
                    </div>
                    <div>
                        <h2>Today</h2>
                        <div style={{ fontSize: '12px', color: 'gray' }}>{formatDate()}</div> {/* Display the formatted date */}
                    </div>
                </div>
                <TaskInput /> {/* Render the TaskInput component */}
            </div>
            <TaskList /> {/* Render the TaskList component */}
        </div>
    );
};

export default Home; 
