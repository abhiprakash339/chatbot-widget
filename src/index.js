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

switch(document.title){
  case 'High Voltage Synchronous Buck-Boost Controller-v4':
    root.render(
      <React.StrictMode>
        <App product="ISL81801" />
      </React.StrictMode>
    );
    break;
  case 'Ultra-low jitter differential XO for Standard Networking Frequencies':
    root.render(
      <React.StrictMode>
        <App product="SiT9501" />
      </React.StrictMode>
    );
    break;
  case 'IMOTION 2.0 -Motor Control IC':
    root.render(
      <React.StrictMode>
        <App product="IMC101T" />
      </React.StrictMode>
    );
    break;
  default:
    console.error("chatbot disabled for this form")
    break;
}