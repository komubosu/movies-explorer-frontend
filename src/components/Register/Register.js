import AuthForm from '../AuthForm/AuthForm';
import React from 'react';

function Register({ onRegister }) {
  const [ buttonText, setButtonText] = React.useState('Зарегистрироваться');
  const [ errorText, setErrorText ] = React.useState('');
  const [ values, setValues ] = React.useState({});
  const [ errors, setErrors ] = React.useState({});
  const [ isValid, setIsValid ] = React.useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleErrorText = (code) => {
    switch(code) {
      case 409:
        setErrorText('Этот email уже используется');
        break;
      case 400:
        setErrorText('Переданы некорректные данные');
        break;
      default:
        setErrorText('Произошла ошибка, попробуйте ещё раз');
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setErrorText('');

    onRegister(values, setButtonText, handleErrorText);
  };

  return (
    <section className="register">
      <AuthForm
        onSubmit={onSubmit}
        isValid={isValid}
        title="Добро пожаловать!"
        buttonText={buttonText}
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
          pattern="[а-яА-ЯёЁa-zA-Z -]{2,30}"
          required
        />
        <span className="auth-form__error-message">{errors.name && 'Поле "Имя" может содержать только латиницу, кириллицу, пробел или дефис. '}{errors.name}</span>
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
        <span className="auth-form__error-message auth-form__error-message_register">{errorText}</span>
      </AuthForm>
    </section>
  );
};

export default Register;