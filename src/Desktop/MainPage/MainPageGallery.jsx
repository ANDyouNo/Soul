import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MainPageGallery.module.css"; // Импорт стилей

gsap.registerPlugin(ScrollTrigger);

const MainPageGallery = () => {
  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.item}`);
    const captions = document.querySelectorAll(`.${styles.caption}`);
    const images = document.querySelectorAll(`.${styles.image}`);

    images.forEach((image, index) => {
      // Анимация для каждой картинки
      gsap.to(image, {
        y: 0, // Сдвиг до исходного положения
        opacity: 1, // Появление
        duration: 1,
        ease: "none", // Без резких ускорений/замедлений
        scrollTrigger: {
          trigger: `.${styles.image}`, // Картинка будет триггером
          start: "top 80%", // Начало анимации, когда верх картинки достигает нижней части экрана
          end: "bottom 20%", // Конец анимации, когда верх картинки достигает верхней части экрана
          scrub: true, // Анимация будет связана с прокруткой
          markers: true, //
        },
      });

      // Анимация для каждой подписи (если она есть)
      if (captions[index]) {
        gsap.to(captions[index], {
          y: 0, // Сдвиг до исходного положения
          opacity: 1, // Появление
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: captions[index], // Подпись будет триггером
            start: "top 80%", // Начало анимации, когда верх картинки достигает нижней части экрана
            end: "bottom 20%", // Конец анимации, когда подпись достигает верха экрана
            scrub: true, // Подпись анимируется по скроллу
          },
        });
      }
    });
  }, []);

  return (
    <div className={styles.gallery}>
      <div className={styles.item}>
        <div className={styles.image} style={{ backgroundColor: "#FFF" }}></div>
        <div className={styles.caption}>Caption 1</div>
      </div>

      <div className={styles.item}>
        <div className={styles.image} style={{ backgroundColor: "#FFF" }}></div>
      </div>

      <div className={styles.item}>
        <div className={styles.image} style={{ backgroundColor: "#FFF" }}></div>
        <div className={styles.caption}>Caption 3</div>
      </div>

      <div className={styles.item}>
        <div className={styles.image} style={{ backgroundColor: "#FFF" }}></div>
      </div>

      <div className={styles.item}>
        <div className={styles.image} style={{ backgroundColor: "#FFF" }}></div>
        <div className={styles.caption}>Caption 5</div>
      </div>
    </div>
  );
};

export default MainPageGallery;
