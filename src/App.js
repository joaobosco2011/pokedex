import React from 'react'

// Importação da biblioteca React-Router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Importação dos componentes da aplicação
import Sobre from './pages/Sobre'
import Navbar from './component/Navbar'
import Pokedex from './pages/Pokedex'


// ----------------------------------==--------------------------------
const App = () => {
   
  return (
    <Router>
      <Navbar />
            
      <Routes>
        <Route path='/' element = {<Pokedex/>}/>
        <Route path='/pages/Sobre' element = {<Sobre />}/>
      </Routes>
    </Router>
  )
}

export default App;