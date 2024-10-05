// src/App.js
import React from "react";
import { isMobile } from "react-device-detect";
import MobileVersion from "./MobileVersion";
import DesktopVersion from "./DesktopVersion";

const App = () => {
  return <div>{isMobile ? <MobileVersion /> : <DesktopVersion />}</div>;
};

export default App;
