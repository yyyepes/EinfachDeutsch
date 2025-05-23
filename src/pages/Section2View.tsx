import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';

export default function Section2View() {
  const navigate = useNavigate();
  // Obtén el nivel de la URL (ejemplo: /sections/A1/section-2)
  const rawParams = useParams();
  const level = (rawParams.level as string) || "A1";

  return (
    <div>
      <Navbar />
      <div className="top-section-btn-container">
        <button className="section-btn" onClick={() => navigate(`/sections/${level}`)}>
          ← SECTION 2
        </button>
      </div>
      <div style={{ margin: '3rem auto', textAlign: 'center' }}>
        <h2>Section 2</h2>
        <p>This is the placeholder for Section 2 content.</p>
      </div>
    </div>
  );
}
