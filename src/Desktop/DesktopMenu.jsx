import React from "react";
import styles from "./DesktopMenu.module.css"; // Импортируем стили как модули

const DesktopMenu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.menuGroup}>
        <a href="#photo" className={styles.link}>
          Фото
        </a>
        <a href="#video" className={styles.link}>
          Видео
        </a>
      </div>
      <div className={styles.menuGroup}>
        <a href="#art" className={styles.link}>
          ART
        </a>
        <a href="#sound" className={styles.link}>
          Sound
        </a>
      </div>
    </nav>
  );
};

export default DesktopMenu;
