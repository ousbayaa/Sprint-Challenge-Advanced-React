import React from 'react';
import DarkMode from '../Hooks/DarkMode.js'

const Navbar = () => {
  const [darkMode, setDarkMode] = DarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <div
        data-testid='darkmode'
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>

    </nav>
  );
};
export default Navbar;