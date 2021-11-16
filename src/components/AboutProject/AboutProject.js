import './AboutProject.css';
import Chart from '../Chart/Chart';

function AboutProject(params) {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__description">
        <li className="about-project__column">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__column">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <Chart />
    </section>
  );
};

export default AboutProject;