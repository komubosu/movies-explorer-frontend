import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';


function Profile({onUpdateUser}) {
  const [ formValues, setFormValues ] = React.useState({});
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setFormValues(currentUser);
  }, [currentUser]);

  const handleChangeValues = (e) => {
    setFormValues({
      name: (e.target.name === 'name' ? e.target.value : formValues.name),
      email: (e.target.name === 'email' ? e.target.value : formValues.email),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser(formValues);
  };

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет, {formValues.name}!</h1>
        <div className="profile__input-field">
          <label className="profile__label" for="name">Имя</label>
          <input
            className="profile__input"
            onChange={handleChangeValues}
            value={formValues.name || ''}
            name="name"
            id="name"
            minLength="2"
            maxLength="30"
            required
          />
        </div>
        <div className="profile__input-field">
          <label className="profile__label" for="email">E-mail</label>
          <input
            className="profile__input"
            onChange={handleChangeValues}
            value={formValues.email || ''}
            name="email"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="profile__button-field">
          <button className="profile__button" type="submit">Редактировать</button>
          <button className="profile__button" type="button">Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
};

export default Profile;