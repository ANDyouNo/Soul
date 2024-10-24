import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./FullScreenText.module.css";
import cn from "classnames";

gsap.registerPlugin(ScrollTrigger);

const FullScreenText = () => {
  useEffect(() => {

    // Анимация для текста: от маленького и размытого до большого и четкого
    gsap.fromTo(
      ".fullscreen-text",
      { opacity: 0, filter: "blur(50px)", scale: 0.3 }, // Начальное состояние текста
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        ease: "power4.out",
        duration: 2, // Длительность анимации
        scrollTrigger: {
          trigger: ".fullscreen-text", // Триггер для текста
          start: "top 90%", // Начало анимации
          end: "bottom 50%", // Конец анимации
          scrub: true, // Синхронизация с прокруткой
          markers: false, // Отключаем маркеры для более чистого вида
        },
      }
    );
  }, []);

  return (
    <div className={styles.fullscreenContainer}>
      <h1 className={cn("fullscreen-text", styles.ftext)}>
        Текст превращается в магию
      </h1>
    </div>
  );
};

export default FullScreenText;
