import {ToastContainer} from "react-toastify" ;
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './store/auth.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App />
    <ToastContainer
    position="top-center"
    reverseOrder={true}
    closeOnClick
    autoClose={3000}
    />
  </StrictMode>
  </AuthProvider>
)
