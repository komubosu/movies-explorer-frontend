import { Route, Switch, useHistory } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import React from 'react';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NavPopup from '../NavPopup/NavPopup';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import mainApi from '../../utils/MainApi';

function App() {
  const [ loggedIn, setLoggedIn ] = React.useState(false);
  const [ isNavPopupOpen, setIsNavPopupOpen ] = React.useState(false);
  const [ currentUser, setCurrentUser ] = React.useState();
  const history = useHistory();

  React.useEffect(() => {
    mainApi.getUserData()
      .then(userData => setCurrentUser(userData))
      .then(() => setLoggedIn(true))
      .catch(err => console.log(err));
  }, []);

  const handleRegister = (values, setButtonText, handleErrorText) => {
    setButtonText('Регистарция...')
    mainApi.register(values)
      .then((res) => mainApi.login(res))
      .then(() => setLoggedIn(true))
      .then(() => history.push('/movies'))
      .catch(err => handleErrorText(err.status))
      .finally(() => setButtonText('Зарегистрироваться'));
  };

  const handleLogin = (values, setButtonText, handleErrorText) => {
    setButtonText('Вход...')
    mainApi.login(values)
      .then((userData) => setCurrentUser(userData))
      .then(() => setLoggedIn(true))
      .then(() => history.push('/movies'))
      .catch(err => handleErrorText(err.status))
      .finally(() => setButtonText('Войти'));
  };

  const handleUpdateUser = (newUserInfo) => {
    setCurrentUser(newUserInfo);
  };

  const handleNavPopupClick = () => {
    setIsNavPopupOpen(true);
  };

  const closeNavPopupPopup = () => {
    setIsNavPopupOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={loggedIn}>
        <div className="app">
          <Switch>
            <Route path="/sign-up">
              <Register onRegister={handleRegister}/>
            </Route>

            <Route path="/sign-in">
              <Login onLogin={handleLogin}/>
            </Route>

            <Route path="/movies">
              <Header onMenuClick={handleNavPopupClick} />
              <Movies />
              <Footer />
            </Route>

            <Route path="/saved-movies">
              <Header onMenuClick={handleNavPopupClick} />
              <SavedMovies />
              <Footer />
            </Route>

            <Route path="/profile">
              <Header onMenuClick={handleNavPopupClick} />
              <Profile onUpdateUser={handleUpdateUser}/>
            </Route>

            <Route path="/not-exist-path">
              <NotFoundPage />
            </Route>

            <Route path="/">
              <Header onMenuClick={handleNavPopupClick} />
              <Main />
              <Footer />
            </Route>
          </Switch>

          <NavPopup isOpen={isNavPopupOpen} onClose={closeNavPopupPopup} />
        </div>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
