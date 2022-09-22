import React from 'react'
import ReactDOM from 'react-dom/client'
import { Weather } from './Weather.jsx'
import './style.css'
import {Provider} from "react-redux";
import {store} from "./components/reducers.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <Weather />
      </Provider>
  </React.StrictMode>
)
