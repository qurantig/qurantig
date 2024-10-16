import React, { useEffect, useState } from 'react';
import styles from './NotesPage.module.css';

interface Note {
  verseNumber: number;
  noteText: string;
  suraId: string;
}

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
  }, []);

  const handleDeleteNote = (index: number) => {
    // Remove the note at the given index
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className={styles['notes-page']}>
      <h1>Notes</h1>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className={styles['note-item']}>
            {/* Delete button in top right corner */}
            <button 
              className={styles['delete-button']}
              onClick={() => handleDeleteNote(index)}
              aria-label="Delete Note"
            >
              &times;
            </button>
            <h3 className={styles['note-title']}>Surah {note.suraId} : {note.verseNumber}</h3>
            <p className={styles['note-text']}>{note.noteText}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesPage;
