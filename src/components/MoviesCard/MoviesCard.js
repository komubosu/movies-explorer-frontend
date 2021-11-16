import React from 'react';
import { useLocation } from 'react-router';
import './MoviesCard.css';

function MoviesCard({isSaved, onSaveClick}) {
  const { pathname } = useLocation();

  return(
    <li className="movies-card">
      <div className="movies-card__text">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 47м</p>
      </div>
      <button className={
          isSaved ?
            pathname === '/movies' ?
              'movies-card__button movies-card__button_active_movies'
            :
              'movies-card__button movies-card__button_active_saved-movies'
          :
            'movies-card__button'
        }
      ></button>
      <img className="movies-card__img" src={'https://i04.fotocdn.net/s129/a10b0029563aa2e7/public_pin_l/2923413633.jpg'} alt="Обложка фильма"></img>
    </li>
  );
};

export default MoviesCard;