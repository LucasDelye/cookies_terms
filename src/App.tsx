import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TermsPage from './components/TermsPage';
import SupportPage from './components/SupportPage';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TermsPage />} />
        {/* Apple rechazo la 1.0.3 por guideline 1.5: el Support URL apuntaba
            a los terminos, que no son soporte. Las dos rutas en ingles y en
            espanol para que cualquiera de las dos funcione. */}
        <Route path="/soporte" element={<SupportPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
