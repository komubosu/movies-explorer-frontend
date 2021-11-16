import './Portfolio.css';

function Portfolio(params) {
  return (
    <div className="portfolio">
    <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/komubosu/russian-travel" target="_blank" rel="noreferrer">
            <button className="portfolio__button">Статичный сайт</button>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/komubosu/russian-travel" target="_blank" rel="noreferrer">
            <button className="portfolio__button">Адаптивный сайт</button>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/komubosu/react-mesto-api-full" target="_blank" rel="noreferrer">
            <button className="portfolio__button">Одностраничное приложение</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;