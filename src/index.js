import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import  {Provider} from 'react-redux'
import { store } from './Redux/Store/store';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appID ="yvJG1eQ2m3zndQGDGsLH6lrFBEDDYLaWl8cl9PqZ";
const serverURL ="https://e9mqslzswkh0.usemoralis.com:2053/server";

root.render(
  <React.StrictMode>
    <MoralisProvider appId={appID} serverUrl={serverURL}>
      <Provider store={store}>
        <Router forceRefresh={ true } >
          <App/>
       
        </Router>
      </Provider> 
    </MoralisProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
