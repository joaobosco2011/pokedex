import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Sobre from './component/Sobre'
import Pokedex from './component/Pokedex'
import Navbar from './component/Navbar'

const App = () => {
   
    
  return (
    <Router>
      <Navbar />
            
      <Routes>
        <Route path='/component/pokedex/*' element = {<Pokedex/>}/>
        <Route path='/component/sobre' element = {<Sobre />}/>
      </Routes>
    </Router>
    

        
  )
}

export default App;