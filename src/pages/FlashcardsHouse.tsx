// src/pages/FlashcardsHouse.tsx
// src/pages/FlashcardsHouse.tsx
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { vocabularyHouse } from '../data/VocabularyHouse';
import './FlashcardsHouse.css';

const HOUSE_COLOR = "#f472b6";
const HOUSE_ACCENT = "#ad1457";

export default function FlashcardsHouse() {
  const [queue, setQueue] = useState([...vocabularyHouse]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animDirection, setAnimDirection] = useState<'left' | 'right' | ''>('');
  const [knownCount, setKnownCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  function handleAction(action: 'know' | 'studyAgain') {
    setAnimDirection(action === 'know' ? 'right' : 'left');
    setTimeout(() => {
      setAnimDirection('');
      if (queue.length === 0) return;

      let newQueue = [...queue];
      if (action === 'know') {
        newQueue.splice(currentIndex, 1);
        setKnownCount(kc => kc + 1);
      } else if (action === 'studyAgain') {
        const flashcard = newQueue.splice(currentIndex, 1)[0];
        newQueue.splice(Math.min(currentIndex + 3, newQueue.length), 0, flashcard);
      }

      if (newQueue.length === 0) {
        setQueue([]);
        setCurrentIndex(0);
      } else {
        setQueue(newQueue);
        setCurrentIndex((prev) =>
          prev >= newQueue.length ? 0 : prev
        );
      }
    }, 280);
  }

  function handleRestart() {
    setQueue([...vocabularyHouse]);
    setCurrentIndex(0);
    setAnimDirection('');
    setKnownCount(0);
  }

  // ← HOUSE button
  function BackButton() {
    return (
      <button
        className="house-back-btn"
        style={{
          background: HOUSE_COLOR,
          color: "#fff",
          fontWeight: "bold"
        }}
        onClick={() => navigate('/practice')}
      >
        <span className="arrow-icon">←</span>
        <span>HOUSE</span>
      </button>
    );
  }

  if (queue.length === 0) {
    return (
      <div>
        <Navbar />
        <BackButton />
        <div className="flashcard-container">
          <div className="flashcardhouse-card flashcardhouse-finished">
            <div className="flashcard-category" style={{ background: HOUSE_ACCENT }}>
              ¡Well Done!
            </div>
            <div className="flashcardhouse-word">
              You've completed all the flashcards! 🎉<br /> Keep up the good work!
            </div>
            <button className="flashcardhouse-btn restart" onClick={handleRestart} style={{ background: HOUSE_COLOR }}>
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  }

  const flashcard = queue[currentIndex];

  // ---- IMAGEN (emoji o URL) ----
  function renderFlashcardImage(img: string | undefined, alt: string) {
    if (!img) return null;
    // Si es una URL (ruta relativa o absoluta)
    if (img.startsWith("/") || img.startsWith("http")) {
      return (
        <img
          src={img}
          alt={alt}
          className="flashcardhouse-img"
          style={{ marginRight: "0.6em" }}
        />
      );
    }
    // Si es emoji u otro caracter
    return (
      <span style={{ fontSize: "2.5rem", marginRight: "0.6em" }}>{img}</span>
    );
  }

  return (
    <div>
      <Navbar />
      <BackButton />
      <div className="flashcard-container">
        <div className="flashcard-instructions" style={{ color: HOUSE_ACCENT }}>
          Press 'Know' if you know it, or 'Study Again' to review.
        </div>
        <div
          className={`flashcard-card ${animDirection ? 'slide-' + animDirection : ''}`}
          ref={cardRef}
          style={{ background: HOUSE_COLOR, boxShadow: "0 4px 30px #f472b677" }}
        >
          <div className="flashcard-category" style={{ background: HOUSE_ACCENT }}>
            {flashcard.category}
          </div>
          <div className="flashcardhouse-word">
            {renderFlashcardImage(flashcard.imageUrl, flashcard.german)}
            <span style={{ fontWeight: 600, fontSize: "2rem" }}>
              {flashcard.german}
            </span>
          </div>
          <div className="flashcardhouse-translation">{flashcard.translation}</div>
          {flashcard.use && (
            <div className="flashcardhouse-use">{flashcard.use}</div>
          )}
        </div>
        <div className="flashcardhouse-progress">
          Flashcards Known: {knownCount} of {vocabularyHouse.length}
        </div>
        <div className="flashcardhouse-actions">
          <button
            className="flashcardhouse-btn again"
            onClick={() => handleAction('studyAgain')}
            style={{ background: "#fbcfe8", color: "#ad1457" }}
          >
            STUDY AGAIN
          </button>
          <button
            className="flashcardhouse-btn know"
            onClick={() => handleAction('know')}
            style={{ background: "#f9a8d4", color: "#ad1457" }}
          >
            KNOW
          </button>
        </div>
      </div>
    </div>
  );
}
