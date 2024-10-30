import React, { useEffect } from "react";
import "./Photo.css";
import LocomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";


const Photo = () => {
  useEffect(() => {
    // Находим необходимые элементы
    const backtopEl = document.querySelector(".backtop");
    const headerEl = document.querySelector("#header");
    const scrollContainer = document.querySelector("[data-scroll-container]");

    if (scrollContainer) {
      // Инициализируем Locomotive Scroll
      const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
      });

      // Добавляем обработчик клика для кнопки "Back to Top"
      if (backtopEl && headerEl) {
        backtopEl.addEventListener("click", () => scroll.scrollTo(headerEl));
      }

      // Очищаем ресурсы при размонтировании компонента
      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []); // Эффект выполнится только при первом рендере

  return (
    <div className="demo-2 loading">
      <main data-scroll-container>
        <section
          className="tiles tiles--columns-rotated tiles--darker"
          id="grid"
        >
          <div className="tiles__wrap">
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="1"
              data-scroll-target="#grid"
            >
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/1.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/2.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/3.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/4.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/5.jpg)" }}
              ></div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="-1"
              data-scroll-target="#grid"
            >
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/6.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/7.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/8.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/9.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/10.jpg)" }}
              ></div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="1"
              data-scroll-target="#grid"
            >
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/1.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/12.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/13.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/14.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/15.jpg)" }}
              ></div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="-1"
              data-scroll-target="#grid"
            >
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/16.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/17.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/18.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/19.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/20.jpg)" }}
              ></div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="1"
              data-scroll-target="#grid"
            >
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/21.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/22.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/23.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/24.jpg)" }}
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/25.jpg)" }}
              ></div>
            </div>
          </div>
          <h2 id="header" className="tiles__title">
            Your style
          </h2>
        </section>

        <section className="content">
          <p
            className="content__text content__text--centered"
            data-scroll
            data-scroll-speed="4"
          >
            Psychedelics are illegal not because a loving government is
            concerned that you may jump out of a third story window.
            Psychedelics are illegal because they dissolve opinion structures
            and culturally laid down models of behaviour and information
            processing. They open you up to the possibility that everything you
            know is wrong.
          </p>
        </section>

        <section className="content content--feature">
          <p
            className="content__breakout content__breakout--big"
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="horizontal"
          >
            pursuit of happiness
          </p>
          <p
            className="content__breakout content__breakout--medium"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            the right to experiment with your own consciousnes
          </p>
        </section>

        <section className="tiles tiles--small" id="grid2">
          <div className="tiles__wrap">
            <div className="tiles__line">
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/26.jpg)" }}
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid2"
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/27.jpg)" }}
                data-scroll
                data-scroll-speed="-1"
                data-scroll-target="#grid2"
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/28.jpg)" }}
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid2"
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/29.jpg)" }}
                data-scroll
                data-scroll-speed="-1"
                data-scroll-target="#grid2"
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/30.jpg)" }}
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid2"
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/31.jpg)" }}
                data-scroll
                data-scroll-speed="-1"
                data-scroll-target="#grid2"
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/32.jpg)" }}
                data-scroll
                data-scroll-speed="1"
                data-scroll-target="#grid2"
              ></div>
              <div
                className="tiles__line-img"
                style={{ backgroundImage: "url(./assets/PhotoImgs/33.jpg)" }}
                data-scroll
                data-scroll-speed="-1"
                data-scroll-target="#grid2"
              ></div>
            </div>
          </div>
        </section>

        <section className="content">
          <a className="backtop" data-scroll data-scroll-speed="4">
            Back to the top
          </a>
          <Link className="chooseLink" to="/photo/sets" data-scroll data-scroll-speed="3">
            Выбрать свою фотосессию
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Photo;
