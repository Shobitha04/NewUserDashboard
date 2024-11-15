import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/UserComponents/Navbar';
import Sidebar from './assets/Components/UserComponents/Sidebar';
import Home from './assets/Components/UserComponents/Home';
import Profile from './assets/Components/UserComponents/Profile';
import Contest from './assets/Components/UserComponents/Contest';
import Problems from './assets/Components/UserComponents/Problems';
import Settings from './assets/Components/UserComponents/Settings';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="content-wrapper">
          <Sidebar isDarkMode={isDarkMode} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/contest" element={<Contest />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;