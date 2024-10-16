import React, { useState, useEffect } from 'react';
import {NavLink } from 'react-router-dom';
import styles from './navComponent.module.css';
import logoImage from '../../assets/img/logo192.png';
import logoDarkMode from '../../assets/img/logoDark.png'


interface NavComponentProps {
  isDarkMode: boolean;
}

const NavComponent: React.FC<NavComponentProps> = ({ isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!document.getElementById('navbar')?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav id="navbar" className={styles.navbar}>
      <div className={styles.leftSection}>
        <NavLink to="/read" className={styles.logo}>
        <span className={styles.logoArabic}>القرآن</span>
        <img
            src={isDarkMode ? logoDarkMode : logoImage} // Conditionally render logo based on dark mode
            alt="logo"
            className={styles.logoImage}
          />
        <span className={styles.logoTigrigna}>ቁርኣን</span>
        </NavLink>
      </div>
      <div className={styles.centerSection}>
        <NavLink to="/read" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>ኣንባበር-READ</NavLink>
        <NavLink to="/notes" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>መምርሒታት-NOTES</NavLink>
        <NavLink to="/bookmarks" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>ምልክት-መጻሕፍቲ-BOOKMARKS</NavLink>
      </div>
      <div className={styles.rightSection}>
        <i className="material-icons" onClick={() => setMenuOpen(!menuOpen)}>tune</i>
        {menuOpen && (
          <div className={styles.menu}>
            <NavLink to="/read" className={styles.menuItem}>ኣንባበር-READ</NavLink>
            <NavLink to="/notes" className={styles.menuItem}>መምርሒታት-NOTES</NavLink>
            <NavLink to="/bookmarks" className={styles.menuItem}>ምልክት-መጻሕፍቲ-BOOKMARKS</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavComponent;
