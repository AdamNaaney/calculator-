import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Header from "./components/Header"
import Form from './components/Form'
import Note from "./components/Note"
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Header/>
    <Note/>
  </div>
)
