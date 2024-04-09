import React from 'react';
import css from './Header.module.css';

const Header = ({ toggleModal }) => {
  return (
    <section className={css.headerSection}>
      <div>
        <a href='#' className={css.logo}>Nanny.Services</a>
      </div>
      <nav className={css.nav}>
        <a href='#'>Home</a>
        <a href='#'>Nannies</a>
      </nav>
      <div className={css.buttons}>
        <button className={css.loginBtn}>Log In</button>
        <button onClick={toggleModal} className={css.registrationBtn}>Registration</button>
      </div>
    </section>
  );
};

export default Header;
