import { useState } from 'react';
import Navbar from './Navbar';
import '../pages/Section1View.css';
import klaus from '../assets/Klaus02.png';
import { useNavigate } from 'react-router-dom';
import nextImg from '../assets/next.png';
import nextOp from '../assets/nextop.png';
import Badgpen from '../assets/Ba.png';
import Procs from '../assets/procs.png';

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
              <span className="dropdown-item" onClick={() => setLessonView('lesson1')}>
                • Lesson 1
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
                  <div className="next-btn-wrapper-lesson">
                    <button className="next-btn" onClick={() => setLessonView('lesson1')}>
                      <img src={nextImg} alt="Next" className="next-img" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="klaus-balloon-container">
                    <p><strong>Lesson 1 goes here…</strong></p>
                  </div>
                  <div className="next-btn-wrapper">
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
                </>
              )}
            </div>
          )}

          {view === 'activities' && (
            <div className="section-content">
              {activityView === '' ? (
                <>
                  <p>Choose an activity from the menu.</p>
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
