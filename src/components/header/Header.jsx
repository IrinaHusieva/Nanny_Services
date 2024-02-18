import React from 'react';
import css from './Header.module.css'

const Header = () => {
    return (
      <section className={css.headerSection}>
            <div>
                <a href='#' className={css.logo}>Nanny.Services</a>
            </div>
            <nav className={css.nav} >
                <a href='javascript:void(0)'>Home</a>
                <a href='javascript:void(0)'>Nannies</a>
            </nav>
            <div className={css.buttons}>
                <button className={css.loginBtn}>Log In</button>
                <button className={css.registrationBtn}>Registration</button>
            </div>
      </section>
  )
}

export default Header