import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './modal.module.css';
import svg from '../../assets/sprite.svg';

const RegistrationModal = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(passwordRegExp, 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character. It should be 8 to 32 characters long.'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={css.modalContainer}>
      <h2 className={css.title}>
        Registration
      </h2>
      <p className={css.txt}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldTouched }) => (
          <Form className={css.form}>
            <Field type="text" name="name" placeholder="Name" className={css.name} onBlur={() => setFieldTouched('name', true)} />
            <ErrorMessage name="name" component="div" className={css.error} />
            <Field type="email" name="email" placeholder="Email" className={css.email} onBlur={() => setFieldTouched('email', true)} />
            <ErrorMessage name="email" component="div" className={css.error} />
            <div className={css.passwordContainer}>
              <Field type={showPassword ? "text" : "password"} name="password" placeholder="Password" className={css.password} onBlur={() => setFieldTouched('password', true)} />
         <button type="button" onClick={togglePasswordVisibility} className={css.togglePasswordButton}>
                {showPassword ? <svg><use xlinkHref={`${svg}#eye-off`} /></svg> : <svg><use xlinkHref={`${svg}#eye`} /></svg>}
              </button>
            </div>
            <ErrorMessage name="password" component="div" className={css.error} />
            <button type="submit" className={css.btn} disabled={isSubmitting}>Registration</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegistrationModal;
