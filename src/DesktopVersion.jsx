import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesktopMenu from "./Desktop/DesktopMenu";
import MainPage from "./Desktop/MainPage/MainPage";

const DesktopVersion = () => {
  return (
    <Router>
      <DesktopMenu />
      <Routes>
        <Route path="/Soul" element={<MainPage />} />{" "}
        {/* Роут для главной страницы */}
        {/* Другие роуты можно добавить здесь */}
      </Routes>
    </Router>
  );
};

export default DesktopVersion;
