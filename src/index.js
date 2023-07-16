import React from 'react';
import ReactDOM from 'react-dom/client';

// import bootstrap css file 
import 'bootstrap/dist/css/bootstrap.min.css';

// import fontawesome css file 
import '@fortawesome/fontawesome-free/css/all.min.css';

// import myIndex css file 
import './index.scss';

// import bootstrap js file 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import fontawesome js file 
import '@fortawesome/fontawesome-free/js/all.min.js';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
