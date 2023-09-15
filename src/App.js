import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "pages/home_pages/Home"
import Auth from "pages/auth/Auth"
import Dashboard from "pages/dashboard/Dashboard";


import { ThemeContext } from 'context/theme_context';

function App() {
  // Initialize the theme mode from local storage or use 'dark' as the default
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Update local storage when the theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>

      <div className={`theme-${theme}`}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
