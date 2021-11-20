import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';

function App() {
  const [ loggedIn, setLoggedIn ] = React.useState(false);
  const [ isNavPopupOpen, setIsNavPopupOpen ] = React.useState(false);
  const [ currentUser, setCurrentUser ] = React.useState();
  const history = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    mainApi.getUserData()
      .then(userData => setCurrentUser(userData))
      .then(() => setLoggedIn(true))
      .then(() => history.push('/movies'))
      .catch(err => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRegister = (values, setButtonText, handleErrorText) => {
    setButtonText('Регистарция...')
    mainApi.register(values)
      .then(res => mainApi.login(res))
      .then(() => setLoggedIn(true))
      .then(() => history.push('/movies'))
      .catch(err => handleErrorText(err.status))
      .finally(() => setButtonText('Зарегистрироваться'));
  };

  const handleLogin = (values, setButtonText, handleErrorText) => {
    setButtonText('Вход...');
    mainApi.login(values)
      .then(userData => setCurrentUser(userData))
      .then(() => setLoggedIn(true))
      .then(() => history.push('/movies'))
      .catch(err => handleErrorText(err.status))
      .finally(() => setButtonText('Войти'));
  };

  const handleLogout = (setLogoutButtonText, handleErrorText) => {
    setLogoutButtonText('Выход...');
    mainApi.logout()
      .then(() => history.push('/'))
      .then(() => setLoggedIn(false))
      .catch(err => handleErrorText(err.status))
      .finally(setLogoutButtonText('Выйти из аккаунта'));
  };

  const handleUpdateUser = (values, setEditButtonText, setStatusText, handleErrorText) => {
    setEditButtonText('Сохранение...')
    mainApi.updateUserData(values)
      .then(userData => setCurrentUser(userData))
      .then(() => setStatusText('Данные успешно обновлены!'))
      .catch(err => handleErrorText(err.status))
      .finally(() => setEditButtonText('Редактировать'));
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
          {
            pathname === '/' ||
            pathname === '/movies' ||
            pathname === '/saved-movies' ||
            pathname === '/profile' ?
              <Header onMenuClick={handleNavPopupClick} />
            :
              ''
          }
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute
              path="/movies"
              component={Movies}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
            />

            <ProtectedRoute
              path="/profile"
              component={Profile}
              onUpdateUser={handleUpdateUser}
              onLogout={handleLogout}
            />

            <Route path="/sign-up">
              <Register onRegister={handleRegister}/>
            </Route>

            <Route path="/sign-in">
              <Login onLogin={handleLogin}/>
            </Route>

            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
          {
            pathname === '/' ||
            pathname === '/movies' ||
            pathname === '/saved-movies' ?
              <Footer />
            :
              ''
          }

          <NavPopup isOpen={isNavPopupOpen} onClose={closeNavPopupPopup} />
        </div>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
