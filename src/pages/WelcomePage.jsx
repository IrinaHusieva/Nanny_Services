import React from 'react';
import Header from 'components/header/Header';
import Hero from 'components/hero/Hero';
import css from "../pages/welcome.module.css";

const WelcomePage = () => {
  return (
     <div className={css.container}>
      <div className={css.backgroundContainer}>
        <Header />
        <Hero />
      </div>
      </div>
  )
}

export default WelcomePage