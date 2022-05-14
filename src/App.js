import React from 'react'

// Importação da biblioteca React-Router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Importação dos componentes da aplicação
import Sobre from './component/Sobre'
import Pokedex from './component/Pokedex'
import Navbar from './component/Navbar'


// ----------------------------------==--------------------------------
const App = () => {
   
  return (
    <Router>
      <Navbar />
            
      <Routes>
        <Route path='/' element = {<Pokedex/>}/>
        <Route path='/component/sobre' element = {<Sobre />}/>
      </Routes>
    </Router>
  )
}

export default App;