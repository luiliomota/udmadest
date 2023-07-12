import 'react-app-polyfill/stable';
import 'core-js';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {AuthProvider} from "./context/auth";
import store from './store';
import Favicon from 'react-favicon';
import {HashRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Provider store={store}>
          <AuthProvider>
              <Favicon url='/favicon.webp'/>
              <App />
          </AuthProvider>
      </Provider>,
    </HashRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
