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
  case '/user/form630f7aa3c555b01159e206d9':
    root.render(
      <React.StrictMode>
        <App product="SiT9501" />
      </React.StrictMode>
    );
    break;
  case '/user/form64392c30c555b07a50ac3372':
    root.render(
      <React.StrictMode>
        <App product="IMC101T" />
      </React.StrictMode>
    );
    break;
  case '/user/form6363df0dc555b0177509aee1':
    root.render(
      <React.StrictMode>
        <App product="ADI" />
      </React.StrictMode>
    );
    break;
  default:
    console.error(`chatbot disabled for ${window.location.pathname} form`)
    break;
}
