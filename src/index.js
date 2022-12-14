import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateContextProvider } from './contexts/StateContextProvider';
import './index.css'

ReactDom.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>,
  document.getElementById('root'),
);
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import './index.css'

// ReactDOM.render(<App />, document.getElementById("root"));
