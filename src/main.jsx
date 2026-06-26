import React from 'react';
import { createRoot } from 'react-dom/client';
import { Info } from 'lucide-react';
import { aiCheatSheetGroups, sourceNotes } from './data/aiCheatSheetData.js';
import './styles.css';

function TitleLines({ text }) {
  return String(text)
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => <span key={word}>{word}</span>);
}

function FlipCard({ front, backTitle, backText, color, titleCard = false, resetSignal }) {
  const [flipped, setFlipped] = React.useState(false);
  const wordCount = String(front).split(/\s+/).filter(Boolean).length;

  React.useEffect(() => {
    setFlipped(false);
  }, [resetSignal]);

  const toggle = () => setFlipped((current) => !current);

  return (
    <button
      className={`flip-card ${flipped ? 'is-flipped' : ''} ${titleCard ? 'is-title-card' : ''} ${wordCount > 2 ? 'has-long-title' : ''}`}
      style={{ '--accent': color }}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }
      }}
      aria-pressed={flipped}
      aria-label={`${front}. Flip for ${backTitle}`}
    >
      <span className="flip-card__inner">
        <span className="flip-card__face flip-card__front">
          <strong className="front-title">
            <TitleLines text={front} />
          </strong>
        </span>
        <span className="flip-card__face flip-card__back">
          <strong>{backTitle}</strong>
          <span className="card-body">{backText}</span>
        </span>
      </span>
    </button>
  );
}

function GroupColumn({ group, resetSignal }) {
  return (
    <section className="group-column" style={{ '--accent': group.color }}>
      <FlipCard
        titleCard
        front={group.groupName}
        backTitle={`${group.groupAbbreviation}: ${group.groupName}`}
        backText={group.groupDescription}
        color={group.color}
        resetSignal={resetSignal}
      />
      <div className="element-stack">
        {group.elements.map((element) => (
          <FlipCard
            key={element.id}
            front={element.fullName}
            backTitle={element.fullName}
            backText={element.explanation}
            color={group.color}
            resetSignal={resetSignal}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  const [resetSignal, setResetSignal] = React.useState(0);
  const totalCards = aiCheatSheetGroups.reduce((sum, group) => sum + group.elements.length, 0);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="kicker">AI Founders cheat sheet</p>
          <h1>AI Layers and Elements</h1>
        </div>
        <div className="source-pill" title={sourceNotes.publicSource}>
          <Info aria-hidden="true" size={16} />
          <span>{totalCards} elements from 8 groups</span>
        </div>
      </header>

      <section className="table-wrap" aria-label="AI elements periodic flashcard table">
        <button
          className="reset-strip"
          type="button"
          aria-label="Close all open flashcards"
          onClick={() => setResetSignal((current) => current + 1)}
        />
        <div className="periodic-table">
          {aiCheatSheetGroups.map((group) => (
            <GroupColumn key={group.id} group={group} resetSignal={resetSignal} />
          ))}
        </div>
      </section>

      <footer className="notes">
        <strong>*Source credit:</strong> AI Organic Chart. {sourceNotes.summary}
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
