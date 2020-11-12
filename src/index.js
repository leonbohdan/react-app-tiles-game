import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { StateProvider } from './store/StateContext';

ReactDOM.render(
  <StateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById("root"),
);
