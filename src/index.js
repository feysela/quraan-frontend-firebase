//import 'bootstrap/dist/css/bootstrap.css';

//React 17 configuration
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(
 
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   ,
//   document.getElementById('root')
// );
//React 18 Configuration
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
     <App />
 </BrowserRouter>
)