import React from 'react'
import './App.css'
import Cls from './components/Cls'

function App() {
  let a1 = 55, a2 = 25;

  return (
    <div>
        <Cls n = "Shekhar" a={a1}></Cls>
        <Cls n = "raj" a={a2}></Cls>

    </div>
  )
}

export default App
