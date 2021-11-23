import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';

function SearchForm({ onSubmit }) {
  const [ values, setValues ] = React.useState({words: '', isShortMovie: false});

  const handleChange = (e) => {
    setValues({...values, words: e.target.value});
  };

  const handleClickSwitch = (e) => {
    setValues({...values, isShortMovie: e.target.checked});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(values);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__field">
        <input className="search-form__input" placeholder="Фильмы" defaultValue={values.words} onChange={handleChange} />
        <button className="search-form__button"></button>
      </div>
      <p className="search-form__text">Короткометражки</p>
      <FilterCheckbox onClickSwitch={handleClickSwitch} />
    </form>
  );
};

export default SearchForm;