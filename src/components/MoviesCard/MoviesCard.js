import React from 'react';
import { useLocation } from 'react-router';
import './MoviesCard.css';

function MoviesCard({ card, onSaveMovie }) {
  const { pathname } = useLocation();

  const isSaved = JSON.parse(localStorage.getItem('saved-movies')).some(c => c.movieId === `${card.movieId}`)

  const handleFilterCard = () => {
    for (let i in card) {
      if (card[i] === null || card[i] === undefined) {
        card[i] = ' ';
      };
    };
  }

  const handleSaveMovie = () => {
    handleFilterCard();
    onSaveMovie(card, isSaved)
  }

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
        onClick={handleSaveMovie}
      ></button>
      <a className="movies-card__link" href={card.trailer} target="_blank" rel="noreferrer">
        <img className="movies-card__img" src={card.image} alt="Обложка фильма"></img>
      </a>
    </li>
  );
};

export default MoviesCard;