import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
//creates a router to conect all pages
ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>,
  document.getElementById('root'))
