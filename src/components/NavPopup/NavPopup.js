import { Link, useLocation } from 'react-router-dom';
import './NavPopup.css';

function NavPopup({ isOpen, onClose }) {
  const { pathname } = useLocation()

  return (
    <div className={`nav-popup ${ isOpen ? 'nav-popup_opened' : ''}`} onClick={(evt) => {(evt.target === evt.currentTarget) && onClose()}}>
      <menu className="nav-popup__menu">
        <button className="nav-popup__button-close" onClick={onClose}></button>
        <Link className={`nav-popup__link ${pathname === '/' ? 'nav-popup__link_active' : ''}`} to="/" onClick={onClose}>Главная</Link>
        <Link className={`nav-popup__link ${pathname === '/movies' ? 'nav-popup__link_active' : ''}`} to="/movies" onClick={onClose}>Фильмы</Link>
        <Link className={`nav-popup__link ${pathname === '/saved-movies' ? 'nav-popup__link_active' : ''}`} to="/saved-movies" onClick={onClose}>Сохранённые фильмы</Link>
        <Link className="nav-popup__link-profile" to="/profile" onClick={onClose}>
          <button className="nav-popup__button-profile" type="button">Аккаунт</button>
        </Link>
      </menu>
    </div>
  );
};

export default NavPopup;