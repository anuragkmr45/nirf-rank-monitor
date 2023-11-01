import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ** styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/motions.css'
import './styles/index.css';

// ** react router dom
import { BrowserRouter } from 'react-router-dom'

// ** firebase context
import { AuthProvider } from './context/AuthContext'
import { FirestoreProvider } from './context/FirestoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FirestoreProvider>
          <App />
        </FirestoreProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode >
);


reportWebVitals();
