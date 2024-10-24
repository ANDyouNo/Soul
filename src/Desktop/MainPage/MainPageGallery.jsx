import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classNames from "classnames";
import styles from "./MainPageGallery.module.css"; // Импорт стилей как модуль

gsap.registerPlugin(ScrollTrigger);

const MainPageGallery = () => {
  useEffect(() => {
    const grid = document.querySelector("[data-grid-gallery]");
    const gridImages = grid.querySelectorAll(`.${styles.grid__img}`);
    const middleIndex = Math.floor(gridImages.length / 2);

    gsap
      .timeline({
        defaults: {
          ease: "power3",
        },
        scrollTrigger: {
          trigger: grid,
          start: "center center",
          end: "+=250%",
          pin: grid.parentNode,
          scrub: 0.5,
        },
      })
      .from(gridImages, {
        stagger: {
          amount: 0.3,
          from: "center",
        },
        y: window.innerHeight,
        transformOrigin: "50% 0%",
        rotation: (pos) => {
          const distanceFromCenter = Math.abs(pos - middleIndex);
          return pos < middleIndex
            ? distanceFromCenter * 3
            : distanceFromCenter * -3;
        },
      })
      .from(
        grid.querySelectorAll(`.${styles.grid__item}`),
        {
          stagger: {
            amount: 0.3,
            from: "center",
          },
          yPercent: 100,
          autoAlpha: 0,
        },
        0
      );
  }, []);

  return (
    <section className={classNames(styles.content, styles["content--padded"])}>
      <div
        className={classNames(styles.grid, styles["grid--spaced"])}
        data-grid-gallery
      >
        <div
          className={styles.grid__img}
          style={{ backgroundImage: 'url("./assets/galref.jpg")' }}
        ></div>
        <div
          className={styles.grid__img}
          style={{ backgroundImage: 'url("./assets/galref.jpg")' }}
        ></div>
        <div
          className={styles.grid__img}
          style={{ backgroundImage: 'url("./assets/galref.jpg")' }}
        ></div>
        <div
          className={styles.grid__img}
          style={{ backgroundImage: 'url("./assets/galref.jpg")' }}
        ></div>
        <div
          className={styles.grid__img}
          style={{ backgroundImage: 'url("./assets/galref.jpg")' }}
        ></div>
        <div className={classNames(styles.grid__item, styles.pos - 6)}>
          <h4 className={styles["type-tiny"]}>Vision</h4>
          <p>Unveiling the unseen</p>
        </div>
        <div className={classNames(styles.grid__item, styles.pos - 7)}>
          <h4 className={styles["type-tiny"]}>Focus</h4>
          <p>Where color meets form</p>
        </div>
        <div className={classNames(styles.grid__item, styles.pos - 18)}>
          <h4 className={styles["type-tiny"]}>Essence</h4>
          <p>Moments in motion</p>
        </div>
      </div>
    </section>
  );
};

export default MainPageGallery;
