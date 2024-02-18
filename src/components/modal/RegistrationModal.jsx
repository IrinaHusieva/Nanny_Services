import React from 'react';
import css from './modal.module.css';

const RegistrationModal = () => {
  return (
      <div className={css.modalContainer}>
          <h2 className={css.title}>
              Registration
          </h2>
          <p className={css.txt}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
          <form className={css.form}>
              <input placeholder='Name' className={css.name}></input>
              <input placeholder='Email' className={css.email}></input>
              <input placeholder='Password' className={css.password}></input>
              <button className={css.btn}>Registration</button>
          </form>
    </div>
  )
}

export default RegistrationModal;