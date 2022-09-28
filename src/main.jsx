import React from 'react'
import ReactDOM from 'react-dom/client'
import { Weather } from './Weather.jsx'
import './style.css'
import {Provider} from "react-redux";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import weatherSlice from "./redux/redux"

const rootReducer = combineReducers({
    weatherApp: weatherSlice
})

const store = configureStore({
    reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <Weather />
      </Provider>
  </React.StrictMode>
)
