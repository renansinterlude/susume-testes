import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import ListaVerbos from './components/Lista_verbos';
import Busca from './components/Busca';
import VerboGrupo1 from './components/VerboGrupo1';
import VerboGrupo2 from './components/VerboGrupo2';
import VerboGrupo3 from './components/VerboGrupo3';

 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/verbos" element={<ListaVerbos />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/verbosgrupo1" element={<VerboGrupo1 />} />
          <Route path="/verbosgrupo2" element={<VerboGrupo2 />} />
          <Route path="/verbosgrupo3" element={<VerboGrupo3 />} />
          <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
 
ReactDOM.render(<App />, document.querySelector('#root'));
 
export default App;