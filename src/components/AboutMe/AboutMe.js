import './AboutMe.css';
import img from '../../images/student__img.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe(params) {
  return (
    <section id="student" className="student">
    <h2 className="student__title">Студент</h2>
      <div className="student__fields">
        <div className="student__field">
          <p className="student__name">Михаил</p>
          <p className="student__work">Fullstack-developer, 20 лет</p>
          <p className="student__about">Я родился и живу в Новосибирске, имею незаконченное высшее образование фпми НГТУ. Я люблю ходить в спорт зал и проводить свободное время за играми или кодингом. Начал увлекаться программированием в 7 классе. Планирую зарабатывать на жизнь кодингом, потому что будут платить за любимое дело.</p>
        <a className="student__link" href="https://github.com/komubosu" target="_blank" rel="noreferrer">Github</a>
        </div>
        <div className="student__field">
          <img className="student__photo" src={img} alt="Мое фото"></img>
        </div>
      </div>
    <Portfolio />
    </section>
  );
};

export default AboutMe;