import { Link, useLocation } from 'react-router-dom';
import React from 'react';

import { LoggedInContext } from '../../contexts/LoggedInContext';
import './Header.css';
import logo from '../../images/logo.svg';

function Header({onMenuClick}) {
  const LoggedIn = React.useContext(LoggedInContext);
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname === '/' ? '' : 'header_theme_grey'}`}>
      <Link to="/"><img src={logo} alt="Логотип"></img></Link>
      {LoggedIn ?
        <>
          <div>
            <Link className={`header__link ${pathname === '/movies' ? 'header__link_active' : ''}`} to="/movies">Фильмы</Link>
            <Link className={`header__link ${pathname === '/saved-movies' ? 'header__link_active' : ''}`} to="/saved-movies">Сохранённые фильмы</Link>
          </div>
          <div>
            <Link to="/profile">
              <button className="header__button-profile" type="button">Аккаунт</button>
            </Link>
          </div>
          <button className="header__button-menu" type="button" onClick={onMenuClick}></button>
        </>
        :
        <div>
          <Link to="/sign-up">
            <button className="header__button-signup" type="button">Регистрация</button>
          </Link>
          <Link to="/sign-in">
            <button className="header__button-signin" type="button">Войти</button>
          </Link>
        </div>
      }
    </header>
  );
};

export default Header