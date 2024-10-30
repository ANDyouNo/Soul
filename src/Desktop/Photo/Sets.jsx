import React, { useState, useRef, useEffect } from "react";
import styles from "./Sets.module.css"; // Импорт стилей

const photosessions = [
  {
    id: 1,
    title: "Свадебная фотосессия",
    preview: `${import.meta.env.BASE_URL}assets/Sets/wedding/1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/Sets/wedding/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/3.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/4.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/4.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/4.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/4.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/4.jpg`,
    ],
  },
  {
    id: 2,
    title: "Семейная фотосессия",
    preview: `${import.meta.env.BASE_URL}assets/Sets/Family/1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/3.jpg`,
    ],
  },
  {
    id: 3,
    title: "Семейная фотосессия",
    preview: `${import.meta.env.BASE_URL}assets/Sets/Family/1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/3.jpg`,
    ],
  },
  {
    id: 4,
    title: "Семейная фотосессия",
    preview: `${import.meta.env.BASE_URL}assets/Sets/Family/1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/3.jpg`,
    ],
  },
];

const Sets = () => {
  const [activePreview, setActivePreview] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [animationClass, setAnimationClass] = useState(""); // Для анимации
  const galleryRef = useRef(null);

  const handleMouseEnter = (photosession) => {
    setAnimationClass(styles.fadeOut); // Анимация скрытия галереи
    setTimeout(() => {
      setActiveGallery(null); // Скрываем галерею после анимации
      setActivePreview(photosession.preview); // Показываем превью
      setAnimationClass(styles.fadeIn); // Анимация появления превью
    }, 500); // Время синхронизируется с анимацией
  };

  const handleMouseLeave = () => {
    if (!activeGallery) setActivePreview(null);
  };

  const openGallery = (photosession) => {
    setAnimationClass(styles.fadeOut); // Анимация скрытия превью
    setTimeout(() => {
      setActiveGallery(photosession); // Показываем галерею
      setActiveMenu(photosession.id); // Запоминаем выбранный раздел
      setActivePreview(null); // Превью скрывается
      setAnimationClass(styles.fadeIn); // Анимация появления галереи
    }, 500); // Время синхронизируется с анимацией
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (galleryRef.current) {
        galleryRef.current.scrollLeft += e.deltaY;
      }
    };
    galleryRef.current?.addEventListener("wheel", handleWheel);
    return () => galleryRef.current?.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className={styles.container}>
      {/* Меню слева */}
      <ul className={styles.menu}>
        {photosessions.map((photosession) => (
          <li
            key={photosession.id}
            onMouseEnter={() => handleMouseEnter(photosession)}
            onMouseLeave={handleMouseLeave}
            onClick={() => openGallery(photosession)}
            className={`${styles.menuItem} ${
              activeMenu === photosession.id ? styles.active : ""
            }`}
          >
            {photosession.title}
          </li>
        ))}
      </ul>

      {/* Галерея и превью */}
      <div className={styles.galleryContainer}>
        {/* Заглушка для выбора фотосессии */}
        {!activeGallery && !activePreview && (
          <div className={styles.placeholderText}>Выбери свою фотосессию</div>
        )}

        {/* Превью при наведении */}
        {!activeGallery && activePreview && (
          <div className={`${styles.preview} ${animationClass}`}>
            <img src={activePreview} alt="Preview" />
          </div>
        )}

        {/* Галерея с изображениями */}
        {activeGallery && (
          <div>
            <div
              ref={galleryRef}
              className={`${styles.gallery} ${animationClass}`}
            >
              {activeGallery.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index}`}
                  className={styles.galleryImg}
                />
              ))}
              {/* Кнопка для связи */}
            </div>
            <button
              onClick={() => (window.location.href = "/contact")}
              className={`${styles.contactButton} ${animationClass}`}
            >
              Связаться со мной
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sets;
