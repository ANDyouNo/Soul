import React from "react";
import "./MainPageGallery.css";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Импортируем ScrollTrigger


const MainPageGallery = () => {
  // Function to animate the second grid
  useEffect(() => {
		const animateSecondGrid = () => {
      const grid = document.querySelector(".grid");
      const gridImages = grid.querySelectorAll(".grid__img");
      const middleIndex = Math.floor(gridImages.length / 2);

      gsap
        .timeline({
          defaults: {
            ease: "power3",
          },
          scrollTrigger: {
            trigger: grid,
            start: "top center",
            end: "+=150%",
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
        // text content
        .from(
          grid.querySelectorAll(".grid__item"),
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
    };
    animateSecondGrid();
	},[])
  return (
    <main>
      <section className="content content--padded">
        <div className="grid grid--columns grid--spaced">
          <div className="grid__img" style={{ backgroundColor: "red" }}></div>
          <div className="grid__img" style={{ backgroundColor: "red" }}></div>
          <div className="grid__img" style={{ backgroundColor: "red" }}></div>
          <div className="grid__img" style={{ backgroundColor: "red" }}></div>
          <div className="grid__img" style={{ backgroundColor: "red" }}></div>
          <div className="grid__item pos-6">
            <h4 className="type-tiny">Vision</h4>
            <p>Unveiling the unseen</p>
          </div>
          <div className="grid__item pos-7">
            <h4 className="type-tiny">Focus</h4>
            <p>Where color meets form</p>
          </div>
          <div className="grid__item pos-18">
            <h4 className="type-tiny">Essence</h4>
            <p>Moments in motion</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPageGallery;
