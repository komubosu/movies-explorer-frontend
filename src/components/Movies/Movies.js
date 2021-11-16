import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies(params) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList>
        <MoviesCard key="1" />
        <MoviesCard key="2" />
        <MoviesCard key="3" isSaved={true} />
        <MoviesCard key="4" />
        <MoviesCard key="5" isSaved={true} />
        <MoviesCard key="6" />
        <MoviesCard key="7" />
        <MoviesCard key="8" />
        <MoviesCard key="9" />
        <MoviesCard key="10" />
        <MoviesCard key="11" />
        <MoviesCard key="12" />
      </MoviesCardList>
      <button className="movies__button">Ещё</button>
    </section>
  );
};

export default Movies;