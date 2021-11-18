import AuthForm from '../AuthForm/AuthForm';
import React from 'react';

function Register(params) {
  const [ values, setValues ] = React.useState({});
  const [ errors, setErrors ] = React.useState({});
  const [ isValid, setIsValid ] = React.useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...value, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  return (
    <section className="register">
      <AuthForm
        onSubmit=""
        isValid={isValid}
        title="Добро пожаловать!"
        buttonClasses={`auth-form__button ${isValid ? '' : 'auth-form__button-disabled'}`}
        buttonText="Зарегистрироваться"
        questionText="Уже зарегистрированны?"
        linkText="Войти"
        linkPath="/sign-in"
      >
        <label className="auth-form__label" for="name">Имя</label>
        <input
          className={`auth-form__input ${errors.name ? 'auth-form__input-err' : ''}`}
          onChange={handleChange}
          value={values.name}
          name="name"
          id="name"
          maxLength="30"
          minLength="2"
          required
        />
        <span className="auth-form__error-message">{errors.name}</span>
        <label className="auth-form__label" for="email">E-mail</label>
        <input
          className={`auth-form__input ${errors.email ? 'auth-form__input-err' : ''}`}
          onChange={handleChange}
          value={values.email}
          name="email"
          id="email"
          type="email"
          required
        />
        <span className="auth-form__error-message">{errors.email}</span>
        <label className="auth-form__label" for="password">Пароль</label>
        <input
          className={`auth-form__input ${errors.password ? 'auth-form__input-err' : ''}`}
          onChange={handleChange}
          value={values.password}
          name="password"
          id="password"
          type="password"
          required
        />
        <span className="auth-form__error-message">{errors.password}</span>
      </AuthForm>
    </section>
  );
};

export default Register;