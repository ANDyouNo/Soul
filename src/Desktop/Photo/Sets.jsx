import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Sets.module.css";

const photosessions = [
  {
    id: 1,
    title: "Свадебная фотосессия",
    preview: `${import.meta.env.BASE_URL}assets/Sets/wedding/1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/Sets/wedding/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/3.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/4.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/5.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/6.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/7.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/8.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/9.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/10.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/11.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/12.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/13.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/14.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/wedding/15.jpg`,
    ],
    description:
      "Фотосессия для тебя и твоей половинки на одном из самых важных мероприятий.",
  },
  {
    id: 2,
    title: "Семейная фотосессия",
    preview: `${import.meta.env.BASE_URL}assets/Sets/Family/1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/Sets/Family/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/3.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/4.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/5.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/6.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/7.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/8.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/9.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/10.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Family/11.jpg`,
    ],
    description: "Семейные моменты, которые останутся в памяти навсегда.",
  },
  {
    id: 3,
    title: "Детская фотосессия",
    preview: `${import.meta.env.BASE_URL}assets/Sets/kids/1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/Sets/kids/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/3.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/4.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/5.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/6.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/7.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/8.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/9.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/10.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/11.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/12.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/13.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/14.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/15.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/16.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/kids/17.jpg`,
    ],
    description: "Важные моменты детства в кадре.",
  },
  {
    id: 4,
    title: "Спортивная фотосессия",
    preview: `${import.meta.env.BASE_URL}assets/Sets/Sport/1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/Sets/Sport/2.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/3.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/4.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/5.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/7.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/8.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/9.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/10.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/11.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/12.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/13.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/14.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/15.jpg`,
      `${import.meta.env.BASE_URL}assets/Sets/Sport/16.jpg`,
    ],
    description: "Моменты триумфа и силы, запечатленные навсегда.",
  },
];

const Sets = () => {
  const [selectedSet, setSelectedSet] = useState(null); // Запоминаем выбранную галерею
  const [hoveredSet, setHoveredSet] = useState(null); // Отвечает за превью
  const [activeGallery, setActiveGallery] = useState(null); // Активная галерея
  const [isGalleryVisible, setGalleryVisible] = useState(true); // Управляем видимостью галереи

  useEffect(() => {
    if (hoveredSet) {
      gsap.fromTo(
        ".preview",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    }
  }, [hoveredSet]);

  useEffect(() => {
    if (isGalleryVisible && activeGallery) {
      gsap.fromTo(
        ".gallery",
        { opacity: 0, y: 20, },
        { opacity: 1, y: 0, duration: 0.5,}
      );
    } else if (!isGalleryVisible) {
      gsap.to(".gallery", { opacity: 0, x: 20, duration: 0.5 });
    }
  }, [isGalleryVisible, activeGallery]);

  const handleMenuClick = (setName) => {
    setSelectedSet(setName);
    setHoveredSet(null);
    setGalleryVisible(false); // Скрываем галерею перед её обновлением

    setTimeout(() => {
      setActiveGallery(setName);
      setGalleryVisible(true); // Показываем новую галерею после обновления
    }, 500); // Ожидаем, пока предыдущая галерея исчезнет
  };

  const handleMouseEnter = (setName) => {
    setHoveredSet(setName);
    setGalleryVisible(false); // Скрываем галерею, когда появляется превью
  };

  const handleMouseLeave = () => {
    setHoveredSet(null);
    setGalleryVisible(true); // Возвращаем галерею, если она была выбрана
  };

  // Находим активную фотосессию из массива по ее названию
  const getCurrentPhotosession = (title) => {
    return photosessions.find((session) => session.title === title);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {photosessions.map((session) => (
          <h5
            key={session.id}
            className={`${styles.menuOpt} ${
              selectedSet === session.title ? styles.selected : ""
            }`}
            onClick={() => handleMenuClick(session.title)}
          >
            <span
              onMouseEnter={() => handleMouseEnter(session.title)}
              onMouseLeave={handleMouseLeave}
              className={styles.menuText}
            >
              {session.title}
            </span>
          </h5>
        ))}
      </div>

      <div className={styles.content}>
        {/* Заглушка по умолчанию */}
        {!selectedSet && !hoveredSet && (
          <p className={styles.placeholder}>Выбери свою фотосессию</p>
        )}

        {/* Превью на наведение */}
        {hoveredSet && (
          <div className={`preview ${styles.preview}`}>
            <img
              src={getCurrentPhotosession(hoveredSet)?.preview}
              alt={`Превью ${hoveredSet}`}
              className={styles.previewImage}
            />
            <div className={styles.info}>
              <h2 className={styles.infoHeader}>{hoveredSet}</h2>
              <p className={styles.infoDescr}>
                {getCurrentPhotosession(hoveredSet)?.description}
              </p>
            </div>
          </div>
        )}

        {/* Галерея для выбранного пункта */}
        {isGalleryVisible && activeGallery && !hoveredSet && (
          <div>
            <div className={`gallery ${styles.gallery}`}>
              <div className={styles.photos}>
                {getCurrentPhotosession(activeGallery)?.gallery.map(
                  (photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Фотография ${index + 1}`}
                      className={styles.photo}
                    />
                  )
                )}
              </div>
              
            </div>
						<button className={styles.fixedButton}>Connect</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sets;
