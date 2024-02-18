import React from 'react';
import css from './modal.module.css';

const LoginModal = () => {
  return (
      <div className={css.modalContainer}>
          <h2 className={css.title}>
              Log In
          </h2>
          <p className={css.txt}>Welcome back! Please enter your credentials to access your account and continue your babysitter search.</p>
          <form className={css.form}>
              <input placeholder='Email' className={css.email}></input>
              <input placeholder='Password' className={css.password}></input>
              <button className={css.btn}>Log In</button>
          </form>
    </div>
  )
}

export default LoginModal