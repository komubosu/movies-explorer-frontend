import './FilterCheckbox.css';

function FilterCheckbox(params) {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" />
      <div className="filter-checkbox__switch">
        <div className="filter-checkbox__slider"></div>
      </div>
    </label>
  );
};

export default FilterCheckbox;