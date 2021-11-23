import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import React from 'react';

function Movies({ cards, onSubmit, isLoading, errorMessage, onSaveMovie }) {
  const [ cardsCount, setCardsCount ] = React.useState(12);
  const [ widthSize , setWidthSize ] = React.useState(0);
  const [ cardsCountScale, setCardsCountScale ] = React.useState(3);

  React.useEffect(() => {
    const handleWidthChange = () => {
      setTimeout(() => {
        setWidthSize(window.innerWidth);
      }, 5000);
    };

    setWidthSize(window.innerWidth);

    window.addEventListener('resize', handleWidthChange);

    return () => window.removeEventListener('resize', handleWidthChange);
  }, []);

  React.useEffect(() => {
    if (widthSize > 1000) {
      setCardsCount(12);
      setCardsCountScale(3);

      return;
    };

    if (widthSize <= 1000) {
      setCardsCount(8);
      setCardsCountScale(2);
    };

    if (widthSize <= 560) {
      setCardsCount(5);

      return;
    };
  }, [widthSize, isLoading]);

  const handleButtonClick = () => {
    setCardsCount(cardsCount + cardsCountScale);
  };

  const handleSubmit = (values) => {

    onSubmit(values);
  };

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSubmit}/>
      <p className="movies_err-message">{errorMessage}</p>
      {isLoading ?
        <Preloader />
      :
        <MoviesCardList>
          {cards.slice(0, cardsCount).map(card => (
              <MoviesCard key={card.id} card={{
                country: card.country,
                director: card.director,
                duration: card.duration,
                year: card.year,
                description: card.description,
                image: `https://api.nomoreparties.co${card.image.url}`,
                trailer: card.trailerLink,
                thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
                movieId: card.id,
                nameRU: card.nameRU,
                nameEN: card.nameEN,
              }} onSaveMovie={onSaveMovie} />
            ))}
        </MoviesCardList>
      }
      {cardsCount >= cards.length || isLoading ? '' : <button className="movies__button" onClick={handleButtonClick}>Ещё</button>}
    </section>
  );
};

export default Movies;