import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';


function Profile({ onUpdateUser, onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [ editButtonText, setEditButtonText] = React.useState('Редактировать');
  const [ logoutButtonText, setLogoutButtonText] = React.useState('Выйти из аккаунта');
  const [ errorText, setErrorText ] = React.useState('');
  const [ statusText, setStatusText ] = React.useState('');
  const [ values, setValues ] = React.useState({});
  const [ errors, setErrors ] = React.useState({});
  const [ isValid, setIsValid ] = React.useState(true);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

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
      case 200:
        setErrorText('');
        break;
      default:
        setErrorText('Произошла ошибка, попробуйте ещё раз');
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorText('');
    setStatusText('');

    if (values === currentUser) {
      setErrorText('Эти данные уже используются');
    } else {
      onUpdateUser(values, setEditButtonText, setStatusText, handleErrorText);
    }
  };

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit} validate="true">
        <h1 className="profile__title">Привет, {values.name}!</h1>
        <div className="profile__input-field">
          <label className="profile__label" htmlFor="name">Имя</label>
          <input
            className={`profile__input ${errors.name ? 'profile__input-err' : ''}`}
            onChange={handleChange}
            value={values.name || ''}
            name="name"
            id="name"
            maxLength="30"
            minLength="2"
            pattern="[а-яА-ЯёЁa-zA-Z -]{2,30}"
            required
          />
        </div>
        <span className="profile__error-message">{errors.name && 'Поле "Имя" может содержать только латиницу, кириллицу, пробел или дефис. '}{errors.name}</span>
        <div className="profile__input-field">
          <label className="profile__label" htmlFor="email">E-mail</label>
          <input
            className={`profile__input ${errors.email ? 'profile__input-err' : ''}`}
            onChange={handleChange}
            value={values.email || ''}
            name="email"
            id="email"
            type="email"
            required
          />
        </div>
        <span className="profile__error-message">{errors.email}</span>
        <span className="profile__error-message profile__error-message_edit">{errorText}</span>
        <span className="profile__status-message">{statusText}</span>
        <div className="profile__button-field">
          <button className={`profile__button ${isValid ? '' : 'profile__button-disabled'}`}disabled={!isValid}>{editButtonText}</button>
          <button className="profile__button" type="button" onClick={() => onLogout(setLogoutButtonText, handleErrorText)}>{logoutButtonText}</button>
        </div>
      </form>
    </section>
  );
};

export default Profile;