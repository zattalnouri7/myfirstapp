import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulaire from './componets/Formulaire';
import Navbarr from './componets/Navbarr';
function App() {
  return (
    <div className='app'>
      <Navbarr/>
      <Formulaire/>
    </div>
  )
}

export default App