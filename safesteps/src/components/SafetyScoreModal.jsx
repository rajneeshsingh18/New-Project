// components/SafetyScoreModal.js
import React from 'react';
import './SafetyScoreModal.css';

function SafetyScoreModal({ isOpen, onClose, locality, score }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{locality}</h3>
        <p>Safety Score: {score}/10</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SafetyScoreModal;
