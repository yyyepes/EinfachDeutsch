import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import A1Sections from './pages/A1sections';
import Section1View from './pages/Section1View'; // 
import Section2View from './pages/Section2View';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} /> {/* 👈 agrega ruta nueva */}
        <Route path="/sections/a1" element={<A1Sections />} />
        <Route path="/practice" element={<div>Coming soon...</div>} />
        <Route path="/progress" element={<div>Coming soon...</div>} />
        <Route path="/sections/a1/section-1" element={<Section1View />} />
        <Route path="/sections/a1/section-2" element={<Section2View />} />

      </Routes>
    </Router>
  );
}

export default App;
