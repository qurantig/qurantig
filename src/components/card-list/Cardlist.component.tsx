import React, { useState, useEffect } from "react";
import styles from "./Cardlist.module.css";
import Button from "../forms/button/button.component";
import btnStyles from "../forms/button/button.module.css";

interface DynamicObject {
  [key: string]: string | number;
}

interface Note {
  verseNumber: number;
  noteText: string;
  suraId: string;
}

interface Bookmark {
  suraId: string;
  verseNumber: number;
  arabicText?: string;
  tigrinyaText?: string;
  translationText?: string;
  englishTitle?: string;
}

interface CardContentProps {
  suraId: string;
  titles?: Array<DynamicObject>;
  items: Array<DynamicObject>;
  layout?: "horizontal" | "vertical";
  titleStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  isBookmarkView?: boolean;
  onRemoveBookmark?: (verseNumber: number) => void; // Ensure this prop is defined
}

const CardContent: React.FC<CardContentProps> = ({
  suraId,
  titles,
  items,
  layout = "horizontal",
  titleStyle,
  itemStyle,
  isBookmarkView = false, // Default to false
  onRemoveBookmark, // Ensure this prop is received
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState<string>("");
  const [noteVerseNumber, setNoteVerseNumber] = useState<number | null>(null);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(storedNotes.filter((note: Note) => note.suraId === suraId));

    const storedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    setBookmarks(
      storedBookmarks.filter((bookmark: Bookmark) => bookmark.suraId === suraId)
    );
  }, [suraId]);

  const handleTitleClick = (language: string) => {
    setSelectedLanguage(selectedLanguage === language ? null : language);
  };

  const handleAddNote = (verseNumber: number) => {
    if (!noteText.trim()) return;

    const newNote: Note = { verseNumber, noteText, suraId };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem(
      "notes",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("notes") || "[]"),
        newNote,
      ])
    );
    setNoteText("");
    setNoteVerseNumber(null);
  };

  const handleDeleteNote = (verseNumber: number) => {
    const updatedNotes = notes.filter(
      (note) => note.verseNumber !== verseNumber
    );
    setNotes(updatedNotes);
    const allNotes = JSON.parse(localStorage.getItem("notes") || "[]").filter(
      (note: Note) =>
        !(note.suraId === suraId && note.verseNumber === verseNumber)
    );
    localStorage.setItem("notes", JSON.stringify(allNotes));
  };

  const handleAddBookmark = (verseNumber: number, item: DynamicObject) => {
    const newBookmark: Bookmark = {
      suraId,
      verseNumber,
      arabicText: item["arabicText"] as string,
      tigrinyaText: item["tigrinyaText"] as string,
      translationText: item["translationText"] as string,
    };
    const updatedBookmarks = [...bookmarks, newBookmark];
    setBookmarks(updatedBookmarks);
    localStorage.setItem(
      "bookmarks",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("bookmarks") || "[]"),
        newBookmark,
      ])
    );
  };

  const handleRemoveBookmark = (verseNumber: number) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.verseNumber !== verseNumber
    );
    setBookmarks(updatedBookmarks);
    const allBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    ).filter(
      (bookmark: Bookmark) =>
        !(bookmark.suraId === suraId && bookmark.verseNumber === verseNumber)
    );
    localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));
  };

  const isBookmarked = (verseNumber: number) => {
    return bookmarks.some((bookmark) => bookmark.verseNumber === verseNumber);
  };

  const handleCancelNote = () => {
    setNoteText("");
    setNoteVerseNumber(null);
  };

  return (
    <div className={styles["card-content"]}>
      {titles && (
        <div className={styles["card-header"]}>
          {titles.map((title, index) => (
            <div
              key={index}
              className={styles["card-title"]}
              style={titleStyle}
            >
              {layout === "horizontal" ? (
                <div className={styles["horizontal-title"]}>
                  <h3
                    className={`${styles["arabic-title"]} ${
                      selectedLanguage === "arabic" ? styles["active"] : ""
                    }`}
                    onClick={() => handleTitleClick("arabic")}
                  >
                    {title["ArabicTitle"]}
                  </h3>
                  <h3
                    className={`${styles["tig-title"]} ${
                      selectedLanguage === "tigrigna" ? styles["active"] : ""
                    }`}
                    onClick={() => handleTitleClick("tigrigna")}
                  >
                    {title["tigTitle"]}
                  </h3>
                  <h3
                    className={`${styles["english-title"]} ${
                      selectedLanguage === "english" ? styles["active"] : ""
                    }`}
                    onClick={() => handleTitleClick("english")}
                  >
                    {title["EnglishTitle"]}
                  </h3>
                </div>
              ) : (
                <div className={styles["vertical-title"]}>
                  <h3
                    className={`${styles["arabic-title"]} ${
                      selectedLanguage === "arabic" ? styles["active"] : ""
                    }`}
                    onClick={() => handleTitleClick("arabic")}
                  >
                    {title["ArabicTitle"]}
                  </h3>
                  <h3
                    className={`${styles["tig-title"]} ${
                      selectedLanguage === "tigrigna" ? styles["active"] : ""
                    }`}
                    onClick={() => handleTitleClick("tigrigna")}
                  >
                    {title["tigTitle"]}
                  </h3>
                  <h3
                    className={`${styles["english-title"]} ${
                      selectedLanguage === "english" ? styles["active"] : ""
                    }`}
                    onClick={() => handleTitleClick("english")}
                  >
                    {title["EnglishTitle"]}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {items.map((item, index) => (
        <div key={index} className={styles["verse-block"]} style={itemStyle}>
          {(selectedLanguage === "arabic" || selectedLanguage === null) && (
            <div className={styles["verse-header"]}>
              <span className={styles["arabic-verse-num"]}>
                {item["ArabicVerseNum"]}
              </span>
              <span className={styles["arabic-text"]}>{item["arabicText"]}</span>
            </div>
          )}
          {selectedLanguage === "tigrigna" && (
            <div className={styles["verse-header"]}>
              <p className={styles["tigrinya-text"]}>{item["tigrinyaText"]}</p>
              <span className={styles["verse-number"]}>
                {item["verseNumber"]}
              </span>
            </div>
          )}
          {selectedLanguage === "english" && (
            <div className={styles["verse-header"]}>
              <p className={styles["translation-text"]}>
                {item["translationText"]}
              </p>
              <span className={styles["verse-number"]}>
                {item["verseNumber"]}
              </span>
            </div>
          )}
          {selectedLanguage === null && (
            <>
              <div className={styles["verse-header"]}>
                <p className={styles["translation-text"]}>
                  {item["translationText"]}
                </p>
                <span className={styles["verse-number"]}>
                  {item["verseNumber"]}
                </span>
              </div>
              <div className={styles["verse-header"]}>
                <p className={styles["tigrinya-text"]}>{item["tigrinyaText"]}</p>
              </div>
            </>
          )}
          <div className={styles["tool-container"]}>
            {!isBookmarkView && (
              <Button
                theme={
                  isBookmarked(item["verseNumber"] as number)
                    ? "primary"
                    : "outlined-primary"
                }
                className={btnStyles["btn-bookmark"]}
                icon={
                  isBookmarked(item["verseNumber"] as number)
                    ? "bookmark"
                    : "bookmark_border"
                }
                onClick={() =>
                  isBookmarked(item["verseNumber"] as number)
                    ? handleRemoveBookmark(item["verseNumber"] as number)
                    : handleAddBookmark(item["verseNumber"] as number, item)
                }
              />
            )}

            <Button
              theme="secondary"
              className={btnStyles["btn-note"]}
              icon="notes"
              onClick={() => {
                const currentVerse = item["verseNumber"] as number;
                setNoteVerseNumber(
                  noteVerseNumber === currentVerse ? null : currentVerse
                );
                const existingNote = notes.find(
                  (note) => note.verseNumber === currentVerse
                );
                setNoteText(existingNote ? existingNote.noteText : "");
              }}
            />

            {isBookmarkView && onRemoveBookmark && (
              <Button
                theme="danger"
                className={styles["btn-delete"]}
                icon="cancel"
                onClick={() => onRemoveBookmark(item["verseNumber"] as number)} 
              />
            )}
          </div>

          {noteVerseNumber === item["verseNumber"] && (
            <div className={styles["note-section"]}>
              <textarea
                className={styles["txt-area"]}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
              <div className={styles["noteButton-con"]}>
                <Button
                  theme="primary"
                  className={styles["save-note"]}
                  icon="save"
                  onClick={() => handleAddNote(item["verseNumber"] as number)}
                >
                  Save
                </Button>
                <Button
                  theme="primary"
                  className={styles["cancel-note"]}
                  icon="cancel"
                  onClick={() => handleCancelNote()}
                >
                  Cancel
                </Button>
              </div>
              {notes
                .filter((note) => note.verseNumber === item["verseNumber"])
                .map((note, noteIndex) => (
                  <div key={noteIndex} className={styles["note-item"]}>
                    <p>{note.noteText}</p>
                    <button onClick={() => handleDeleteNote(note.verseNumber)}>
                      Delete Note
                    </button>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardContent;
