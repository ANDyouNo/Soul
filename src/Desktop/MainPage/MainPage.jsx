import React from "react";
import Hero from "./Hero"; // Импорт компонента Hero
import Devices from "./Devices";
import styles from "./MainPage.module.css"; // Стили для MainPage

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Hero /> {/* Компонент Hero будет отображаться на главной странице */}
			<Devices></Devices>
      {/* Добавить другие компоненты для MainPage */}
    </div>
  );
};

export default MainPage;
