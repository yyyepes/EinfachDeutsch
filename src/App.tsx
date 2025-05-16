import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} /> {/* 👈 agrega ruta nueva */}
        <Route path="/practice" element={<div>Coming soon...</div>} />
        <Route path="/progress" element={<div>Coming soon...</div>} />
      </Routes>
    </Router>
  );
}

export default App;
