import './NavTab.css';

function NavTab(params) {
  return (
    <nav className="navigation-tabs">
      <ul className="navigation-tabs__list">
        <li className="navigation-tabs__list_item"><a className="navigation-tabs__list_link" href="#about-project">О проекте</a></li>
        <li className="navigation-tabs__list_item"><a className="navigation-tabs__list_link" href="#technologies">Технологии</a></li>
        <li className="navigation-tabs__list_item"><a className="navigation-tabs__list_link" href="#student">Студент</a></li>
      </ul>
    </nav>
  );
};

export default NavTab;