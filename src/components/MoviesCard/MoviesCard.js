import React from 'react';
import { useLocation } from 'react-router';
import './MoviesCard.css';

function MoviesCard({ card, isSaved, onSaveClick }) {
  const { pathname } = useLocation();

  return(
    <li className="movies-card">
      <div className="movies-card__text">
        <p className="movies-card__title">{card.nameRU}</p>
        <p className="movies-card__duration">
          {
            `${Math.floor(card.duration / 60) >= 1 ?
              `${Math.floor(card.duration / 60)} ч`
                :
              ''
              }
            ${card.duration % 60 >= 1 ?
              `${card.duration % 60} м`
                :
              ''
            }`
          }
        </p>
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
      <img className="movies-card__img" src={`https://api.nomoreparties.co${card.image.url}`} alt="Обложка фильма"></img>
    </li>
  );
};

export default MoviesCard;