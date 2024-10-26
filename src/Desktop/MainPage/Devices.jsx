import React, { useEffect } from "react";
import cn from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Импортируем ScrollTrigger
import SplitType from "split-type"; // Библиотека для разделения текста на символы
import styles from "./Devices.module.css";

gsap.registerPlugin(ScrollTrigger); // Регистрируем плагин

const Devices = () => {
  useEffect(() => {
    // Анимация для изображения
    gsap.fromTo(
      ".animate-item2", // Указываем класс картинки
      { opacity: 0, y: 50, filter: "blur(20px)" }, // Начальное состояние изображения
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".animate-item2", // Триггер для анимации изображения
          start: "top 80%", // Начало анимации
          end: "bottom 20%", // Конец анимации
          scrub: true, // Синхронизация с прокруткой
          markers: false, // Включаем маркеры для отладки
        },
      }
    );

    // Разбиваем текст на символы при помощи SplitType
    const textSplit = new SplitType(".animate-text", { types: "chars" }); // для анимации по словм тип wods

    // Анимация для каждого символа
    gsap.fromTo(
      textSplit.chars, // Анимация по символам текста
      { opacity: 0, filter: (index) => `blur(${index * 4}px)` }, // Начальное состояние: разное размытие для каждой буквы
      {
        opacity: 1,
        filter: "blur(0px)", // Постепенное убирание размытия
        ease: "power4.out",
        stagger: 0.05, // Задержка между символами
        scrollTrigger: {
          trigger: ".animate-text", // Триггер для анимации текста
          start: "top 80%", // Начало анимации
          end: "bottom 50%", // Конец анимации
          scrub: true, // Синхронизация с прокруткой
          markers: false, // Включаем маркеры для отладки
        },
      }
    );
  }, []);

	
  return (
    <div className={styles.container}>
      <img
        src="./assets/cameraflight.jpg"
        alt="Фото"
        className={cn("animate-item2", styles.photo)} // Картинка с классом для анимации
      />
      <div className={styles.textWrap}>
        <h1 className={cn("animate-text", styles.header)}>
          Лучшие инструменты
        </h1>
        <p className={cn("animate-text", styles.par)}>
          Они помогают достичь профессионального качества в моей работе
        </p>
      </div>
    </div>
  );
};

export default Devices;
