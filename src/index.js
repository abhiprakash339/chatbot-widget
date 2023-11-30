import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const param = new URLSearchParams(window.location.search)
// const temp = window.location.pathname.split('/')

const domElement = document.createElement('div');
domElement.id = 'livebench-chatbot-widget'
document.body.appendChild(domElement)
const root = ReactDOM.createRoot(domElement);

switch(window.location.pathname){
  case '/app/ISL81801-V4-BETA':
    root.render(
      <React.StrictMode>
        <App product="ISL81801" />
      </React.StrictMode>
    );
    break;
  default:
    console.error(`chatbot disabled for ${window.location.pathname} form`)
    break;
}
