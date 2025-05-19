import React, { useState, useRef } from 'react';
import { vocabularyWords } from '../data/VocabularyData';
import type { FlashcardWord } from '../data/VocabularyData';
import './Flashcards.css';

function getInitialQueue(words: FlashcardWord[]) {
  return [...words];
}

// --- FUNCIÓN PARA OBTENER EMOJI ---
function getEmoji(word: string, category: string) {
  if (category === "GREETINGS") {
    if (word === "Hallo") return "👋";
    if (word === "Tschüss") return "👋";
    if (word === "Guten Morgen") return "🌅";
    if (word === "Guten Tag") return "☀️";
    if (word === "Guten Abend") return "🌙";
  }
  if (category === "NAME") {
    return "📝";
  }
  if (category === "COUNTRY") {
    if (word === "Deutschland") return "🇩🇪";
    if (word === "Spanien") return "🇪🇸";
    if (word === "USA") return "🇺🇸";
    if (word === "England") return "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
    if (word === "Frankreich") return "🇫🇷";
    if (word === "Italien") return "🇮🇹";
    return "🌍";
  }
  if (category === "OCCUPATION") {
    if (word.includes("Lehrer")) return "👩‍🏫";
    if (word.includes("Arzt") || word.includes("Ärztin")) return "🩺";
    if (word.includes("Ingenieur")) return "🛠️";
    if (word.includes("Student")) return "🎓";
    return "💼";
  }
  if (category === "PHRASES") return "💬";
  return "";
}

export default function Flashcards() {
  const [queue, setQueue] = useState(getInitialQueue(vocabularyWords));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animDirection, setAnimDirection] = useState<'left' | 'right' | ''>('');
  const cardRef = useRef<HTMLDivElement>(null);
  const totalCountRef = useRef(vocabularyWords.length);

  // Calcula cuántas tarjetas ya se han completado
  const completed = totalCountRef.current - queue.length;

  function handleAction(action: 'know' | 'studyAgain') {
    setAnimDirection(action === 'know' ? 'right' : 'left');
    setTimeout(() => {
      setAnimDirection('');
      if (queue.length === 0) return;

      let newQueue = [...queue];
      if (action === 'know') {
        // Quita la tarjeta actual
        newQueue.splice(currentIndex, 1);
      } else if (action === 'studyAgain') {
        // Mueve la tarjeta actual unas posiciones adelante
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
    }, 280); // Duración de animación
  }

  // Lógica para drag/swipe
  let startX = 0;
  function onTouchStart(e: React.TouchEvent | React.MouseEvent) {
    startX = ('touches' in e ? e.touches[0].clientX : e.clientX);
  }
  function onTouchEnd(e: React.TouchEvent | React.MouseEvent) {
    const endX = ('changedTouches' in e ? e.changedTouches[0].clientX : e.clientX);
    const diff = endX - startX;
    if (diff > 80) handleAction('know');
    else if (diff < -80) handleAction('studyAgain');
  }

  // Restart flashcards
  function handleRestart() {
    setQueue(getInitialQueue(vocabularyWords));
    setCurrentIndex(0);
    setAnimDirection('');
  }

  // Show end message with restart button
  if (queue.length === 0) {
    return (
      <div className="flashcard-container">
        <div className="flashcard-card flashcard-finished">
          <div className="flashcard-category">¡Well Done!</div>
          <div className="flashcard-word">You've completed all the flashcards! 🎉<br/> Keep up the good work!</div>
          <button className="flashcard-btn restart" onClick={handleRestart}>
            Restart
          </button>
        </div>
      </div>
    );
  }

  const flashcard = queue[currentIndex];

  return (
    <div className="flashcard-container">
      {/* INSTRUCCIÓN ARRIBA */}
      <div className="flashcard-instructions">
        Press 'Know' if you know it, or 'Study Again' to review.
      </div>
      <div
        className={`flashcard-card ${animDirection ? 'slide-' + animDirection : ''}`}
        ref={cardRef}
        onMouseDown={onTouchStart}
        onMouseUp={onTouchEnd}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="flashcard-category">
          {flashcard.category.charAt(0) + flashcard.category.slice(1).toLowerCase()}
        </div>
        <div className="flashcard-word">
          {getEmoji(flashcard.german, flashcard.category) && (
            <span style={{ fontSize: "2rem", verticalAlign: "middle", marginRight: "0.28em" }}>
              {getEmoji(flashcard.german, flashcard.category)}
            </span>
          )}
          {flashcard.german}
        </div>
        <div className="flashcard-translation">{flashcard.translation}</div>
        <div className="flashcard-use">{flashcard.use}</div>
      </div>
      {/* Progreso: Flashcard X de Y */}
      <div className="flashcard-progress">
        Flashcard {completed + 1} of {totalCountRef.current}
      </div>
      <div className="flashcard-actions">
        <button className="flashcard-btn again" onClick={() => handleAction('studyAgain')}>STUDY AGAIN</button>
        <button className="flashcard-btn know" onClick={() => handleAction('know')}>KNOW</button>
      </div>
    </div>
  );
}
