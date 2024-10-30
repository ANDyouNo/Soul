import React from "react";
import styles from "./DesktopMenu.module.css"; // Импортируем стили как модули
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.menuGroup}>
        <Link to="/photo" className={styles.link}>
          Фото
        </Link>
        <Link to="/video" className={styles.link}>
          Видео
        </Link>
      </div>
      <div className={styles.menuGroup}>
        <a
          href="https://andyouno.github.io/empty_page/"
          className={styles.link}
        >
          Art
        </a>
        <a
          href="https://andyouno.github.io/empty_page/"
          className={styles.link}
        >
          Sound
        </a>
      </div>
    </nav>
  );
};

export default DesktopMenu;
