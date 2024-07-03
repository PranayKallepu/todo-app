import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import StartPage from './components/StartPage';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

// Main App component
const App = () => {
    const navigate = useNavigate();

    // useEffect hook to handle side effects
    useEffect(() => {
        const name = localStorage.getItem('name'); // Check if a name is stored in localStorage
        if (name) {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

// AppWrapper component to wrap App with Router
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper; 
