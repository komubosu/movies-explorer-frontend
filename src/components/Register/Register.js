import AuthForm from '../AuthForm/AuthForm';
import React from 'react';

function Register(params) {
  const [ formValues, setFormValues ] = React.useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
    password: 'secret_password',
  });

  const handleChangeValues = (e) => {
    setFormValues({
      name: (e.target.name === 'name' ? e.target.value : formValues.name),
      email: (e.target.name === 'email' ? e.target.value : formValues.email),
      password: (e.target.name === 'password' ? e.target.value : formValues.password),
    });
  };

  return (
    <section className="register">
      <AuthForm
        title="Добро пожаловать!"
        errorMessage={'Что-то пошло не так...'}
        buttonClasses="auth-form__button"
        buttonText="Зарегистрироваться"
        questionText="Уже зарегистрированны?"
        linkText="Войти"
        linkPath="/sign-in"
      >
        <label className="auth-form__label" for="name">Имя</label>
        <input
          className="auth-form__input"
          onChange={handleChangeValues}
          value={formValues.name}
          name="name"
          id="name"
          maxLength="30"
          minLength="2"
          required
        />
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

export default Register;