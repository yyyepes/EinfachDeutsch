import Navbar from '../pages/Navbar';
import '../pages/A1sections.css';
import { useNavigate } from 'react-router-dom';
import lockIcon from '../assets/lock.png';
import { useState } from 'react';

export default function A1Sections() {
  const navigate = useNavigate();

  // Simulación de progreso: solo la Section 1 está desbloqueada
  const [sections] = useState([
    { id: 1, unlocked: true },
    { id: 2, unlocked: false },
    { id: 3, unlocked: false },
    { id: 4, unlocked: false },
    { id: 5, unlocked: false },
    { id: 6, unlocked: false },
    { id: 7, unlocked: false },
    { id: 8, unlocked: false },
  ]);

  return (
    <div>
      <Navbar />
      <div className="a1-container">
        <div className="a1-header">
          <button onClick={() => navigate('/home')} className="back-button">← A1</button>
          <h2 className="a1-title">Wilkommen! to Level A1</h2>
        </div>

        <div className="sections-grid">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`section-box ${!section.unlocked ? 'locked' : ''}`}
              onClick={() => {
                if (section.unlocked) {
                  navigate(`/sections/a1/section-${section.id}`);
                }
              }}
            >
              <p>SECTION {section.id}</p>
              {!section.unlocked && (
                <img src={lockIcon} alt="Lock icon" className="lock-icon" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
