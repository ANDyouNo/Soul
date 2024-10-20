import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import DesktopMenu from "./Desktop/DesktopMenu";
import MainPage from "./Desktop/MainPage/MainPage";

const DesktopVersion = () => {
  return (
    <Router>
      <DesktopMenu />
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Главная страница */}
        {/* Другие роуты можно добавить здесь */}
      </Routes>
    </Router>
  );
};

export default DesktopVersion;
