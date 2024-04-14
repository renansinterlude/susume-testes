import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import ListaVerbos from './components/Lista_verbos';
import Busca from './components/Busca';
import VerboGrupo1 from './components/VerboGrupo1';
import VerboGrupo2 from './components/VerboGrupo2';
import VerboGrupo3 from './components/VerboGrupo3';
import Jlpt from './components/Jlpt';
import N1 from './components/niveis-jlpt/N1';
import N1Kanji from './components/niveis-jlpt/N1-kanji';
import N1Vocabulario from './components/niveis-jlpt/N1-vocabulario';
import N2 from './components/niveis-jlpt/N2';
import N2Kanji from './components/niveis-jlpt/N2-kanji';
import N2Vocabulario from './components/niveis-jlpt/N2-vocabulario';
import N3 from './components/niveis-jlpt/N3';
import N3Kanji from './components/niveis-jlpt/N3-kanji';
import N3Vocabulario from './components/niveis-jlpt/N3-vocabulario';
import N4 from './components/niveis-jlpt/N4';
import N4Kanji from './components/niveis-jlpt/N4-kanji';
import N4Vocabulario from './components/niveis-jlpt/N4-vocabulario';
import N5 from './components/niveis-jlpt/N5';
import N5Kanji from './components/niveis-jlpt/N5-kanji';
import N5Vocabulario from './components/niveis-jlpt/N5-vocabulario';



 
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
          <Route path="/jlpt" element={<Jlpt />} />

          <Route path="/jlpt-n1" element={<N1 />} />
          <Route path="/jlpt-n1-kanji" element={<N1Kanji />} />
          <Route path="/jlpt-n1-vocabulario" element={<N1Vocabulario />} />

          <Route path="/jlpt-n2" element={<N2 />} />
          <Route path="/jlpt-n2-kanji" element={<N2Kanji />} />
          <Route path="/jlpt-n2-vocabulario" element={<N2Vocabulario />} />

          <Route path="/jlpt-n3" element={<N3 />} />
          <Route path="/jlpt-n3-kanji" element={<N3Kanji />} />
          <Route path="/jlpt-n3-vocabulario" element={<N3Vocabulario />} />

          <Route path="/jlpt-n4" element={<N4 />} />
          <Route path="/jlpt-n4-kanji" element={<N4Kanji />} />
          <Route path="/jlpt-n4-vocabulario" element={<N4Vocabulario />} />

          <Route path="/jlpt-n5" element={<N5 />} />
          <Route path="/jlpt-n5-kanji" element={<N5Kanji />} />
          <Route path="/jlpt-n5-vocabulario" element={<N5Vocabulario />} />
          
          <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
 
ReactDOM.render(<App />, document.querySelector('#root'));
 
export default App;