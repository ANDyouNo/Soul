import React, { useEffect } from "react";
import cn from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import styles from "./Individual.module.css";


const Individual = () => {
  useEffect(() => {
    // Анимация для изображения с эффектом ротации и параллакса
    gsap.fromTo(
      ".animate-item3",
      { opacity: 0, y: 50, filter: "blur(20px)", rotate: 10, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        rotate: 0,
        scale: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".animate-item3",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
      }
    );

    // Разбиваем текст на символы
    const textSplit = new SplitType(".animate-text2", { types: "chars" });

    // Анимация для текста с масштабированием
    gsap.fromTo(
      textSplit.chars,
      { opacity: 0, filter: (index) => `blur(${index * 4}px)`, scale: 0.3 },
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".animate-text2",
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
          markers: false,
        },
      }
    );

    // Параллакс-анимация для контейнера
    gsap.to(".animate-item3", {
      yPercent: 20,
      scrollTrigger: {
        trigger: ".animate-item3",
        start: "top 100%",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <img
        src="./assets/cameraflight.jpg"
        alt="Фото"
        className={cn("animate-item3", styles.photo)}
      />
      <div className={styles.textWrap}>
        <h1 className={cn("animate-text2", styles.header)}>
          Лучшие инструменты
        </h1>
        <p className={cn("animate-text2", styles.par)}>
          Они помогают достичь профессионального качества в моей работе
        </p>
      </div>
    </div>
  );
};

export default Individual;
