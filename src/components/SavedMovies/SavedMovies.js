import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies(params) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList>
        <MoviesCard key="1" isSaved={true} />
        <MoviesCard key="2" isSaved={true} />
        <MoviesCard key="3" isSaved={true} />
      </MoviesCardList>
    </section>
  );
};

export default SavedMovies;