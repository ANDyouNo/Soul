import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesktopMenu from "./Desktop/DesktopMenu";
import MainPage from "./Desktop/MainPage/MainPage";
import Photo from "./Desktop/Photo/Photo";
import Video from "./Desktop/Video/Video";
import Art from "./Desktop/Art/Art";
import Sound from "./Desktop/Sound/Sound";


const DesktopVersion = () => {
  return (
    <Router basename="/Soul">
      <DesktopMenu />
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Главная страница */}
        <Route path="/photo" element={<Photo />} />
        <Route path="/video" element={<Video />} />
        <Route path="/art" element={<Art />} />
        <Route path="/sound" element={<Sound />} />
        {/* Другие роуты можно добавить здесь */}
      </Routes>
    </Router>
  );
};

export default DesktopVersion;
