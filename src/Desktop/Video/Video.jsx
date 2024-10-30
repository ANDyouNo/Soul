import React, { useEffect, useState } from "react";
import styles from "./Video.module.css"; // CSS Module
// import soundButtonImg from "./images/sound.gif"; // Путь к картинке звуковой кнопки

const Video = () => {
  const [zVals, setZVals] = useState([]);
  // const [audioPlaying, setAudioPlaying] = useState(false);
  // const audioRef = React.useRef(null);
  const framesRef = React.useRef([]);

  useEffect(() => {
    const zSpacing = -1000;
    let lastPos = zSpacing / 5;

    const handleScroll = () => {
      let top = document.documentElement.scrollTop;
      let delta = lastPos - top;
      lastPos = top;

      const newZVals = framesRef.current.map((_, i) => {
        let zValue = i * zSpacing + zSpacing + delta * -5.5;
        return zValue;
      });

      setZVals(newZVals);
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 1);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (audioPlaying) {
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // }, [audioPlaying]);

  return (
    <div className={styles.container}>
      <section className={styles.gallery}>
        {framesRef.current.map((_, i) => (
          <div
            key={i}
            className={styles.frame}
            style={{
              transform: `translateZ(${zVals[i]}px)`,
              opacity: zVals[i] < Math.abs(-1000) / 1.8 ? 1 : 0,
            }}
            ref={(el) => (framesRef.current[i] = el)}
          >
            {/* Динамическое содержание фреймов */}
            {i === 0 && <h2>Beautiful World</h2>}
            {i === 1 && (
              <div
                className={`${styles.frameMedia} ${styles.frameMedia_left}`}
                style={{ backgroundImage: `url(images/1.jpg)` }}
              />
            )}
            {i === 2 && (
              <video
                className={`${styles.frameMedia} ${styles.frameMedia_right}`}
                src="media/video_optimized.mp4"
                autoPlay
                loop
                muted
              />
            )}
            {i === 4 && (
              <div className={styles.textRight}>
                <h3>Pure Planet</h3>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
            )}
            {/* Добавляем и другие фреймы по аналогии */}
          </div>
        ))}
      </section>

      {/* <img
        className={`${styles.soundbutton} ${
          !audioPlaying ? styles.paused : ""
        }`}
        src={soundButtonImg}
        alt="Sound Button"
        onClick={() => setAudioPlaying(!audioPlaying)}
      /> */}

      {/* <audio
        className={styles.audio}
        ref={audioRef}
        src="media/ambient.mp3"
        loop
      /> */}
    </div>
  );
};

export default Video;
