import { useState } from 'react';
import Navbar from './Navbar';
import '../pages/Section1View.css';
import klaus from '../assets/Klaus02.png';
import { useNavigate } from 'react-router-dom';
import nextImg from '../assets/next.png';
import nextOp from '../assets/nextop.png';
import Badgpen from '../assets/Ba.png';
import Procs from '../assets/procs.png';
import LessonBoard from './LessonBoard';
import klaus2 from '../assets/Klaus04.png';
import ClozeTest from './Clozetest.tsx';
import Flashcards from './Flashcards.tsx';


// Boards para el LessonBoard
const lessonBoards = [
  {
    title: "LESSON 1: Self-introduction",
    content: (
      <>
        <p>
          <span role="img" aria-label="german-flag">🇩🇪</span> <strong>DEUTSCH:</strong><br />
          Hallo! Ich heiße Lina und ich komme aus Kolumbien. Ich bin Lehrerin von Beruf. Und du?
        </p>
        <p>
          <span role="img" aria-label="british-flag">🇬🇧</span> <strong>Explanation in English:</strong><br />
          “Hello! My name is Lina and I come from Colombia. I am a teacher by profession. And you?”
        </p>
        <div style={{ textAlign: 'left', margin: '1.2rem auto', maxWidth: '580px' }}>
          <strong>This short paragraph introduces:</strong>
          <ul>
            <li><span style={{ color: '#ea2626', fontWeight: 700 }}>Name →</span> Ich heiße…</li>
            <li><span style={{ color: '#ea2626', fontWeight: 700 }}>Country of origin →</span> Ich komme aus…</li>
            <li><span style={{ color: '#ea2626', fontWeight: 700 }}>Occupation →</span> Ich bin … von Beruf</li>
            <li><b>And invites the other person to respond with Und du? ("And you?")</b></li>
          </ul>
        </div>
      </>
    )
  },
  {
    title: "Example",
    content: (
      <div>
        <b>Presentation example:</b>
        <br />
        <span style={{ color: "#3b82f6" }}>Hallo! Ich heiße Marco und ich bin Ingenieur aus Deutschland.</span>
        <br />
        <br />
        <b>Traducción:</b>
        <br />
        <span>Hello! My name is Marco and I am an engineer from Germany.</span>
      </div>
    ),
  },
  {
    title: "Tip",
    content: (
      <div>
        <b>Tip:</b> <span style={{ color: "#f97316" }}>"Ich bin … von Beruf"</span> It is used to talk about
        professions, not just temporary work.
        <br />
        <br />
        <span>
          ¿And you? — <b>Und du?</b>
        </span>
      </div>
    ),
    
  },
  {
    title: "Practice",
    content: (
      <div>
        <b>¡let's practice!</b>
        <br />
        <span>Introduce a partner in German using the sentences above.</span>
      </div>
    ),
  },
  {
    title: "Greetings 👋",
    content: (
      <>
        <p>
          <span role="img" aria-label="german-flag">
            🇩🇪
          </span>{" "}
          <strong>DEUTSCH:</strong>
          <br />
          <span style={{ fontSize: "1.1rem" }}>
            Guten Morgen! (Good morning) <br />
            Guten Tag! (Good day) <br />
            Guten Abend! (Good afternoon/evening) <br />
            Gute Nacht! (Good night - as we say goodbye to sleep)
          </span>
        </p>
        <div style={{ backgroundColor: "#f0f9ff", padding: "15px", borderRadius: "8px", margin: "15px 0" }}>
          <p>
            <span role="img" aria-label="light-bulb">
              💡
            </span>{" "}
            <strong>Did you know that...?</strong>
          </p>
          <p>In Germany, "Guten Tag" is used as a general greeting during the day. </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
          <div style={{ display: "flex", alignItems: "center", margin: "0 15px" }}>
            <span style={{ fontSize: "2rem", marginRight: "10px" }}>🌅</span>
            <span>Guten Morgen!</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", margin: "0 15px" }}>
            <span style={{ fontSize: "2rem", marginRight: "10px" }}>☀️</span>
            <span>Guten Tag!</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", margin: "0 15px" }}>
            <span style={{ fontSize: "2rem", marginRight: "10px" }}>🌙</span>
            <span>Guten Abend!</span>
          </div>
        </div>
      </>
    ),
  },
  {
      title: "Countries & Nationalities 🌍",
      content: (
        <>
          <p>
            <span role="img" aria-label="german-flag">
              🇩🇪
            </span>{" "}
            <strong>DEUTSCH:</strong>
            <br />
            <span style={{ fontSize: "1.1rem" }}>Länder (Countries) und Nationalitäten (Nationalities):</span>
          </p>
  
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", margin: "20px 0" }}>
            <div style={{ textAlign: "center", width: "120px" }}>
              <span style={{ fontSize: "2rem" }}>🇩🇪</span>
              <p>
                <strong>Deutschland</strong>
              </p>
              <p>deutsch</p>
            </div>
            <div style={{ textAlign: "center", width: "120px" }}>
              <span style={{ fontSize: "2rem" }}>🇪🇸</span>
              <p>
                <strong>Spanien</strong>
              </p>
              <p>spanisch</p>
            </div>
            <div style={{ textAlign: "center", width: "120px" }}>
              <span style={{ fontSize: "2rem" }}>🇺🇸</span>
              <p>
                <strong>USA</strong>
              </p>
              <p>amerikanisch</p>
            </div>
            <div style={{ textAlign: "center", width: "120px" }}>
              <span style={{ fontSize: "2rem" }}>🇲🇽</span>
              <p>
                <strong>Mexiko</strong>
              </p>
              <p>mexikanisch</p>
            </div>
            <div style={{ textAlign: "center", width: "120px" }}>
              <span style={{ fontSize: "2rem" }}>🇨🇴</span>
              <p>
                <strong>Kolumbien</strong>
              </p>
              <p>kolumbianisch</p>
            </div>
          </div>
  
          <div style={{ backgroundColor: "#f0fff4", padding: "15px", borderRadius: "8px", margin: "15px 0" }}>
            <p>
              <span role="img" aria-label="notebook">
                📝
              </span>{" "}
              <strong>Structure:</strong>
            </p>
            <p>"Ich komme aus [Country]" = "I come from [Country]"</p>
            <p>"Ich bin [Nationality]" = "I am [Nationality]"</p>
          </div>
  
          <div style={{ textAlign: "center", margin: "15px 0" }}>
            <p style={{ fontSize: "1.2rem", color: "#3b82f6" }}>"Ich komme aus Mexiko. Ich bin Mexikaner."</p>
            <p>(I come from Mexico. I am Mexican.)</p>
          </div>
        </>
      ),
  },
  {
      title: "Professions 💼",
      content: (
        <>
          <p>
            <span role="img" aria-label="german-flag">
              🇩🇪
            </span>{" "}
            <strong>DEUTSCH:</strong>
            <br />
            <span style={{ fontSize: "1.1rem" }}>Berufe (Professions):</span>
          </p>
  
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: "15px",
              margin: "20px 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>👩‍🏫</span>
              <div>
                <p>
                  <strong>Lehrer/in</strong>
                </p>
                <p>Teacher</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>👨‍⚕️</span>
              <div>
                <p>
                  <strong>Arzt/Ärztin</strong>
                </p>
                <p>Doctor</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>👩‍💼</span>
              <div>
                <p>
                  <strong>Anwalt/Anwältin</strong>
                </p>
                <p>Lawyer</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>👨‍💻</span>
              <div>
                <p>
                  <strong>Programmierer/in</strong>
                </p>
                <p>Programmer</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>👩‍🍳</span>
              <div>
                <p>
                  <strong>Koch/Köchin</strong>
                </p>
                <p>CCook</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>👨‍🔧</span>
              <div>
                <p>
                  <strong>Ingenieur/in</strong>
                </p>
                <p>Engineer</p>
              </div>
            </div>
          </div>
  
          <div style={{ backgroundColor: "#fff0f6", padding: "15px", borderRadius: "8px", margin: "15px 0" }}>
            <p>
              <span role="img" aria-label="info">
                ℹ️
              </span>{" "}
              <strong>Grammar note:</strong>
            </p>
            <p>
              In German, many professions have masculine and feminine forms. <br />
              The feminine form is usually formed by adding "-in" at the end.
            </p>
            <p>Ejemplo: Lehrer , Lehrerin → (Teacher)</p>
          </div>
  
          <div style={{ textAlign: "center", margin: "15px 0" }}>
            <p style={{ fontSize: "1.2rem", color: "#3b82f6" }}>"Ich bin Ingenieur von Beruf."</p>
            <p>(I am an engineer by profession.)</p>
          </div>
        </>
      ),
  }
  
];

export default function SectionView() {
  const navigate = useNavigate();
  const [view, setView] = useState<'content' | 'activities' | 'quiz'>('content');
  const [showContent, setShowContent] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [lessonView, setLessonView] = useState('');
  const [activityView, setActivityView] = useState('');

  return (
    <div>
      <Navbar />

      <div className="top-section-btn-container">
        <button className="section-btn" onClick={() => navigate('/sections/a1')}>
          ← SECTION 1
        </button>
      </div>

      <div className="section-title-centered">
        “Self-introduction / Countries / Occupations”
      </div>

      <div className="section-view-container">
        <div className="section-sidebar">
          <button className="sidebar-btn" onClick={() => {
            setShowContent(!showContent);
            setShowActivities(false);
            setView('content');
            setLessonView('');
            setActivityView('');
          }}>
            CONTENT ▼
          </button>
          {showContent && (
            <div className="dropdown-list">
              <span
                className="dropdown-item"
                onClick={() => setLessonView('lesson1')}
              >
                • Lessons
              </span>
            </div>
          )}

          <button className="sidebar-btn activities-btn" onClick={() => {
            setShowActivities(!showActivities);
            setShowContent(false);
            setView('activities');
            setLessonView('');
            setActivityView('');
          }}>
            ACTIVITIES ▼
          </button>
          {showActivities && (
            <div className="dropdown-list">
              <span className="dropdown-item" onClick={() => setActivityView('activity1')}>
                • Activity 1
              </span>
              <span className="dropdown-item" onClick={() => setActivityView('activity2')}>
                • Activity 2
              </span>
              <span className="dropdown-item" onClick={() => setActivityView('activity3')}>
                • Activity 3
              </span>
            </div>
          )}

          <button className="sidebar-btn quiz-btn" onClick={() => {
            setView('quiz');
            setShowContent(false);
            setShowActivities(false);
            setLessonView('');
            setActivityView('');
          }}>
            QUIZ
          </button>

          <button className="sidebar-btn badge-btn">
            <img src={Badgpen} alt="Badge" className="badge-icon" /> BADGE
          </button>

          <button className="sidebar-btn progress-btn">
            <img src={Procs} alt="Progress" className="progress-icon" /> PROGRESS
          </button>
        </div>

        <div className="section-main">
          {view === 'content' && (
            <div className="section-content">
              {lessonView === '' ? (
                <>
                  <div className="klaus-balloon-container">
                    <img src={klaus} className="klaus-img" alt="Klaus mascot" />
                  </div>
                  <div className="next-btn-wrapper-intro">
                    <button className="next-btn" onClick={() => setLessonView('lesson1')}>
                      <img src={nextImg} alt="Next" className="next-img" />
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <LessonBoard boards={lessonBoards} />
                  <button className="finish-lesson-btn" onClick={() => { alert('Lesson finished!'); }}
                    style={{ marginTop: 20, marginBottom: 10 }}>
                    Finish Lesson
                  </button>
                  <div className="next-btn-wrapper" style={{ marginTop: 30 }}>
                    <button className="next-btn" onClick={() => {
                      setView('activities');
                      setLessonView('');
                    }}>
                      <img src={nextImg} alt="Next" className="next-img" />
                    </button>
                    <button className="next-btn" onClick={() => setLessonView('')}>
                      <img src={nextOp} alt="Back" className="next-img" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Activities View */}
          {view === 'activities' && (
            <div className="section-content">
              {activityView === '' ? (
                <>
                  <p>Choose an activity from the menu.</p>
                  <div className="klaus-activity-container">
                    <img src={klaus2} className="klaus-img" alt="Klaus Activity mascot" />
                  </div>
                  <div className="next-btn-wrapper">
                    <button className="next-btn-actv" onClick={() => setActivityView('activity1')}>
                      <img src={nextImg} alt="Next" className="next-img" />
                    </button>
                    <button className="next-btn" onClick={() => {
                      setView('content');
                      setLessonView('lesson1');
                    }}>
                      <img src={nextOp} alt="Back" className="next-img" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p><strong>{activityView.replace('activity', 'Activity ')} goes here…</strong></p>

                  {activityView === 'activity1' && (
                    <div style={{ margin: '30px 0' }}>
                    <Flashcards />
                    </div>
                 )}
                   
                  {/* Insert ClozeTest only in Activity 2 */}
                  {activityView === 'activity2' && (
                    <div style={{ margin: '30px 0' }}>
                      <ClozeTest />
                    </div>
                  )}

                  <div className="next-btn-wrapper">
                    <button className="next-btn-actv" onClick={() => {
                      if (activityView === 'activity1') {
                        setActivityView('activity2');
                      } else if (activityView === 'activity2') {
                        setActivityView('activity3');
                      } else if (activityView === 'activity3') {
                        setView('quiz');
                        setActivityView('');
                      }
                    }}>
                      <img src={nextImg} alt="Next" className="next-img" />
                    </button>
                    <button className="next-btn" onClick={() => {
                      if (activityView === 'activity3') {
                        setActivityView('activity2');
                      } else if (activityView === 'activity2') {
                        setActivityView('activity1');
                      } else if (activityView === 'activity1') {
                        setActivityView('');
                      }
                    }}>
                      <img src={nextOp} alt="Back" className="next-img" />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {view === 'quiz' && (
            <div className="section-content">
              <p>Quiz goes here…</p>
              <div className="next-btn-wrapper-quiz">
                <button className="next-btn" onClick={() => {
                  setView('activities');
                  setActivityView('activity3');
                }}>
                  <img src={nextOp} alt="Back" className="next-img" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
