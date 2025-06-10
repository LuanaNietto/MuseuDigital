import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './components/Home';
import SaoDonato from './components/SaoDonato';
import FestaMelancia from './components/FestaMelancia';
import FestaTainha from './components/FestaTainha';
import Agromel from './components/Agromel';
import Memorias from './components/Memorias';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorias" element={<Memorias />} />
        <Route path="/festasaodonato" element={<SaoDonato />} />
        <Route path="/festadamelancia" element={<FestaMelancia />} />
        <Route path="/agromel" element={<Agromel />} />
        <Route path="/festadatainha" element={<FestaTainha />} />
      </Routes>
    </Router>
  );
}

export default App;
