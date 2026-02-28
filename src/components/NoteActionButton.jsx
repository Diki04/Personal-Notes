import React from 'react';

// TODO [Skilled] komponen NoteActionButton reusable yang menerima props `variant` dan `onClick`
function NoteActionButton({ variant, onClick, children, dataTestId }) {
  return (
    <button
      className={`note-item__${variant}-button`}
      type="button"
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
}

export default NoteActionButton;