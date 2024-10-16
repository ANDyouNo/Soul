import React, { useEffect } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css"; // Стили для фото и текста
import cn from "classnames";

const Hero = () => {
  useEffect(() => {
    // Анимация появления текста и фото при загрузке
    gsap.fromTo(
      ".animate-item", // Указываем класс с точкой
      { opacity: 0, y: 50, filter: "blur(20px)" }, // Начальное состояние
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 2, // Длительность анимации
        stagger: 0.2, // Задержка между элементами
        ease: "power4.out", // Эффект easing
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <img
        src="./Assets/cameraman.jpg"
        alt="Фото"
        className={cn("animate-item", styles.photo)} // Корректное использование classnames
      />
      <div className={styles.textWrap}>
        <h1 className={cn("animate-item", styles.header)}>Привет! Я Андрей</h1>
        <p className={cn("animate-item", styles.par)}>
          Как фотограф, я стремлюсь запечатлеть каждый момент, каждый взгляд и
          каждую эмоцию. Позвольте мне помочь вам сохранить ваши самые важные
          воспоминания.
        </p>
      </div>
    </div>
  );
};

export default Hero;
