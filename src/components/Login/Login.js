import AuthForm from '../AuthForm/AuthForm';
import React from 'react';

function Login({ onLogin }) {
  const [ buttonText, setButtonText] = React.useState('Войти');
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
      case 401:
        setErrorText('Неправильные почта или пароль');
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
    
    onLogin(values, setButtonText, handleErrorText);
  };

  return (
    <section className="login">
      <AuthForm
        onSubmit={onSubmit}
        isValid={isValid}
        title="Рады видеть!"
        buttonText={buttonText}
        questionText="Ещё не зарегистрированны?"
        linkText="Регистрация"
        linkPath="/sign-up"
      >
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
        <span className="auth-form__error-message auth-form__error-message_login">{errorText}</span>
      </AuthForm>
    </section>
  );
};

export default Login;