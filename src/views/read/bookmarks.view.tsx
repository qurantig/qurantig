import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardContent from "../../components/card-list/Cardlist.component";
import styles from "../../components/card-list/Cardlist.module.css";
import Button from "../../components/forms/button/button.component";

interface Bookmark {
  suraId: string;
  verseNumber: number;
  arabicText?: string;
  tigrinyaText?: string;
  translationText?: string;
  englishTitle?: string;
}

const BookmarksView: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    setBookmarks(savedBookmarks);
  }, []);

  const handleRemoveBookmark = (suraId: string, verseNumber: number) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) =>
        !(bookmark.suraId === suraId && bookmark.verseNumber === verseNumber)
    );
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  // Group bookmarks by suraId
  const groupedBookmarks = bookmarks.reduce(
    (acc: { [key: string]: Bookmark[] }, bookmark) => {
      if (!acc[bookmark.suraId]) {
        acc[bookmark.suraId] = [];
      }
      acc[bookmark.suraId].push(bookmark);
      return acc;
    },
    {}
  );

  return (
    <div>
      <div className={styles["btn-back"]}>
        <Button
          theme="outlined-primary"
          className="btn-sm"
          icon="reply"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </div>
      <div className={styles["cards-view-container"]}>
        {Object.keys(groupedBookmarks).map((suraId) => (
          <div key={suraId} className={styles["bookmark-card"]}>
            <CardContent
              suraId={suraId}
              titles={[
                {
                  tigTitle: `Surah ${suraId}`,
                },
              ]}
              items={groupedBookmarks[suraId].map((bookmark) => ({
                ArabicVerseNum: bookmark.verseNumber,
                arabicText:
                  bookmark.arabicText ||
                  `Arabic text for ${bookmark.verseNumber}`,
                tigrinyaText:
                  bookmark.tigrinyaText ||
                  `Tigrinya text for ${bookmark.verseNumber}`,
                translationText:
                  bookmark.translationText ||
                  `English text for ${bookmark.verseNumber}`,
                verseNumber: bookmark.verseNumber,
              }))}
              isBookmarkView={true}
              onRemoveBookmark={(verseNumber: number) =>
                handleRemoveBookmark(suraId, verseNumber)
              } // Pass here
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarksView;
