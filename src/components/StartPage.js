import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const [userName, setName] = useState(''); // State for storing the user's name
    const navigate = useNavigate();

    // Handle form submission of userName
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name', userName);
        navigate('/home');
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', paddingTop: '50px', marginBottom: '-100px' }}>TODO-APP</h1>
            <div className='start-page-section'>
                <img
                    className='todo-image'
                    alt='todo'
                    src='/images/todo-ui.webp'
                />
                <div className='start-page-details'>
                    <h1>Reminders made simple</h1>
                    <p>Create a list of things you need to do and focus on the most important ones. Finish them, stay focused, and avoid feeling overwhelmed by keeping track of tasks.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder='Enter your name'
                            type="text"
                            value={userName}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <br />
                        <button type="submit">Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StartPage; 
