import React from 'react'
import ReactDOM from 'react-dom/client'
import { Weather } from './Weather.jsx'
import './style.css'
import {Provider} from "react-redux";
import {weatherApp} from "./redux/reducers.js";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';

const store = createStore(
    weatherApp,
    applyMiddleware(thunk)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <Weather />
      </Provider>
  </React.StrictMode>
)
