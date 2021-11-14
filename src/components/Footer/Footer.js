import './Footer.css';

function Footer(params) {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__field">
        <p className="footer__date">&copy; 2021</p>
        <nav className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item"><a className="footer__link" href="https://practicum.yandex.ru/profile/web/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
            <li className="footer__item"><a className="footer__link" href="https://github.com/komubosu" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;