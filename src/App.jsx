import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import ProjectDetail from './pages/ProyectsDetail';
import Portfolio from './pages/PortfolioHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/proyect/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;