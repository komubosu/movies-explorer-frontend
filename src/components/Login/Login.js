import AuthForm from '../AuthForm/AuthForm';
import React from 'react';

function Login(params) {
  const [ formValues, setFormValues ] = React.useState({
    email: 'pochta@yandex.ru',
    password: '',
  });

  const handleChangeValues = (e) => {
    setFormValues({
      email: (e.target.name === 'email' ? e.target.value : formValues.email),
      password: (e.target.name === 'password' ? e.target.value : formValues.password),
    });
  };

  return (
    <section className="login">
      <AuthForm
        title="Рады видеть!"
        errorMessage={''}
        buttonClasses="auth-form__button auth-form__button_type_login"
        buttonText="Войти"
        questionText="Ещё не зарегистрированны?"
        linkText="Регистрация"
        linkPath="/sign-up"
      >
        <label className="auth-form__label" for="email">E-mail</label>
        <input
          className="auth-form__input"
          onChange={handleChangeValues}
          value={formValues.email}
          name="email"
          id="email"
          type="email"
          required
        />
        <label className="auth-form__label" for="password">Пароль</label>
        <input
          className="auth-form__input auth-form__input-err"
          onChange={handleChangeValues}
          value={formValues.password}
          name="password"
          id="password"
          type="password"
          required
        />
      </AuthForm>
    </section>
  );
};

export default Login;