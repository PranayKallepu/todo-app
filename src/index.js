import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // Use Provider to make the Redux store available to the entire app
    <Provider store={store}>
        <App />
    </Provider>
);
