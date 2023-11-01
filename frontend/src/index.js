import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ** styles
import 'bootstrap/dist/css/bootstrap.min.css';

// ** react router dom
import { BrowserRouter } from 'react-router-dom'

// ** firebase context
import { AuthProvider } from './context/AuthContext'
import { FirestoreProvider } from './context/FirestoreContext';
import { CSVProvider } from './context/CSVReader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FirestoreProvider>
          <CSVProvider >
            <App />
          </CSVProvider>
        </FirestoreProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode >
);


reportWebVitals();
