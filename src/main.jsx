import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'

import './index.scss'
import CounterProvider from './context/CounterContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Home' element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </CounterProvider>
  </React.StrictMode>,
)
