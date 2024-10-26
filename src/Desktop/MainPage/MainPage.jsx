import React from "react";
import Hero from "./Hero"; // Импорт компонента Hero
import Devices from "./Devices";
import styles from "./MainPage.module.css"; // Стили для MainPage
import Individual from "./Individual";
import FullScreenText from "./FullScreenText";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Hero /> {/* Компонент Hero будет отображаться на главной странице */}
			<Devices></Devices>
			<Individual></Individual>
			<FullScreenText></FullScreenText>
      {/* Добавить другие компоненты для MainPage */}
    </div>
  );
};

export default MainPage;


// Блок с галлереей не отображается, появляется серый фон, но картинок нет, хотя браузер видит изображение