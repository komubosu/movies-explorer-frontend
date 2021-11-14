import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(params) {
  return (
    <form className="search-form">
      <div className="search-form__field">
        <input className="search-form__input" placeholder="Фильмы" />
        <button className="search-form__button"></button>
      </div>
      <p className="search-form__text">Короткометражки</p>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;