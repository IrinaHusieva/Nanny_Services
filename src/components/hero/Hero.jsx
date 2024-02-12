import React from 'react';
import css from './Hero.module.css'

const Hero = () => {
    return (
      <section className={css.hero}>
      <div className={css.colorHalf}>
          <h1>Make Life Easier for the Family:</h1>
          <h2>Find Babysitters Online for All Occasions</h2>
          <button>Get started</button>
      </div>
      <div className={css.imageHalf}>
        <p>Experienced nannies</p>   
        <p>15,000</p>    
      </div>
     </section>
  )
}

export default Hero