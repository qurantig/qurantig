import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DarkMode from "./components/theme/DarkMode"; 
import NavComponent from "./components/nav-bar/navComponent"; 
import PageView from "./views/read/suras-ayas-content.view";
import DemonstrationView from "./views/demonstrations/demonstration.view";
import SurasContentView from "./views/read/suras-content.view";
import NotesPage from './components/notes/NotesPage.component';
import BookmarksView from "./views/read/bookmarks.view";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.body.dataset.theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (  
    <Router>
      <div className="App">
        <DarkMode onToggle={toggleDarkMode} isDarkMode={isDarkMode} />
        <NavComponent isDarkMode={isDarkMode}/>
        <Routes>
          <Route path="/" element={<PageView />} />
          <Route path="/read" element={<PageView />} />
          <Route path="/demonstrations" element={<DemonstrationView />} />
          <Route path="/surah/:suraId" element={<SurasContentView />} />
          <Route path="/notes" element={<NotesPage /> }/>
          <Route path="/bookmarks" element={<BookmarksView />} />
          {/*  more routes here to be added  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
