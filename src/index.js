import React from 'react';
import { createRoot } from 'react-dom/client'; // Import `createRoot` from `react-dom/client`
import './index.css'; // Ensure this path is correct
import App from './App'; // Make sure `App` is correctly exported

const root = createRoot(document.getElementById('root')); // Using `createRoot` for React 18+
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
