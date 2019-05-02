import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Concurrent React?
ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />);