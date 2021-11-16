import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage(params) {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__subtitle">Страница не найдена</p>
      <Link to="/" className="not-found-page__link">Назад</Link>
    </div>
  );
};

export default NotFoundPage;