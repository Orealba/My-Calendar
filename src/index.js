import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Pages/App'
import EditEvent from './Pages/EditEvent'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/editevent/:id" element={<EditEvent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
