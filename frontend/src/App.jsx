import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Mapa from "./components/Mapa"
import Equipe from "./components/Equipe"
import Amostra from "./components/Amostra"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Mapa} />   
        <Route path='/Equipe' exact component={Equipe} />     
        <Route path='/Amostra' exact component={Amostra} />  
      </Routes>
    </Router>
  );
}
  
export default App;