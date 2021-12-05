import React from 'react';
import { useLocation } from 'react-router';
import './MoviesCard.css';

function MoviesCard({ card, onSaveMovie }) {
  const { pathname } = useLocation();

  const isSaved = JSON.parse(localStorage.getItem('saved-movies')).some(c => c.movieId === `${card.movieId}`);

  const handleFilterCard = () => {
    for (let i in card) {
      if (card[i] === null || card[i] === undefined) {
        if (i === 'trailer') {
          card[i] = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        } else {
          card[i] = ' ';
        };
      };
    };
    return card;
  };

  const filteredCard = handleFilterCard();

  const handleSaveMovie = () => {
    onSaveMovie(card, isSaved)
  }

  return(
    <li className="movies-card">
      <div className="movies-card__text">
        <p className="movies-card__title">{filteredCard.nameRU}</p>
        <p className="movies-card__duration">
          {
            `${Math.floor(filteredCard.duration / 60) >= 1 ?
              `${Math.floor(filteredCard.duration / 60)} ч`
                :
              ''
              }
            ${filteredCard.duration % 60 >= 1 ?
              `${filteredCard.duration % 60} м`
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
      <a className="movies-card__link" href={filteredCard.trailer} target="_blank" rel="noreferrer">
        <img className="movies-card__img" src={filteredCard.image} alt="Обложка фильма"></img>
      </a>
    </li>
  );
};

export default MoviesCard;