import React from 'react';
import css from './Hero.module.css';
import svg from '../../assets/sprite.svg';


const Hero = () => {
    return (
      <section className={css.hero}>
      <div className={css.colorHalf}>
          <h1 className={css.title}>Make Life Easier for the Family:</h1>
          <h2 className={css.title2}>Find Babysitters Online for All Occasions</h2>
          <button className={css.heroBtn}>Get started<svg className={css.heroSvg}>
          <use xlinkHref={`${svg}#heroArrow`} />
          </svg>
          </button>
      </div>
        <div className={css.imageHalf}>
          <div className={css.check}><svg className={css.checkSvg}><use xlinkHref={`${svg}#heroCheck`} /></svg></div>
          <div>
 <p className={css.txtCheck}>Experienced nannies</p>   
        <p className={css.numberCheck}>15,000</p>    
          </div>
      </div>
     </section>
  )
}

export default Hero