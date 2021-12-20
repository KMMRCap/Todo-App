import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from './context/Context';


ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Context>
        <App />
      </Context>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

