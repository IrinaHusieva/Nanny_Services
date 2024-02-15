import React from 'react';
import css from './Hero.module.css';
import heroSvg from '../../assets/hero.svg'

const Hero = () => {
    return (
      <section className={css.hero}>
      <div className={css.colorHalf}>
          <h1 className={css.title}>Make Life Easier for the Family:</h1>
          <h2 className={css.title2}>Find Babysitters Online for All Occasions</h2>
          <button className={css.heroBtn}>Get started<img className={css.heroSvg} src={heroSvg} alt="Arrow Icon" /></button>
      </div>
      <div className={css.imageHalf}>
        <p>Experienced nannies</p>   
        <p>15,000</p>    
      </div>
     </section>
  )
}

export default Hero