import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ cards, onSubmit, errorMessage, onSaveMovie }) {
  const handleSubmit = (values) => {

    onSubmit(values);
  };

  return (
    <section className="saved-movies">
      <SearchForm onSubmit={handleSubmit} />
      <p className="saved-movies_err-message">{errorMessage}</p>
      <MoviesCardList>
          {cards.map(card => (
              <MoviesCard key={card.movieId} card={card} onSaveMovie={onSaveMovie} />
            ))}
      </MoviesCardList>
    </section>
  );
};

export default SavedMovies;