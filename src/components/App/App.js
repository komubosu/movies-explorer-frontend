import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateUser, setLoggedInStatus } from '../../redux/actions';
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
import moviesApi from '../../utils/MoviesApi';
import moviesFilter from '../../utils/MoviesFilter';

function App() {
  const [ isNavPopupOpen, setIsNavPopupOpen ] = React.useState(false);
  const [ moviesCards, setMoviesCards ] = React.useState([]);
  const [ savedMoviesCards, setSavedMoviesCards ] =React.useState([]);
  const [ isMoviesLoadings, setIsMoviesLoadings ] = React.useState(false);
  const [ moviesErrorMessage, setMoviesErrorMessage ] = React.useState('');
  const [ savedMoviesErrorMessage, setSavedMoviesErrorMessage ] = React.useState('');

  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn)
  const history = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    mainApi.getUserData()
      .then(userData => dispatch(updateUser(userData)))
      .then(() => dispatch(setLoggedInStatus(true)))
      .then(() => history.push('/movies'))
      .then(() => {
        mainApi.getSavedMovies()
          .then(res => localStorage.setItem('saved-movies', JSON.stringify(res)))
          .then(() => setSavedMoviesCards(JSON.parse(localStorage.getItem('saved-movies'))))
          .catch(err => console.log(err));

        if (localStorage.getItem('filtered-movies') !== null) {
          const localFilteredMoviesCards = JSON.parse(localStorage.getItem('filtered-movies'));

          setMoviesCards(localFilteredMoviesCards);
        };
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  const handleSearchMovies = (values) => {
    setMoviesErrorMessage('');

    if (localStorage.getItem('movies') !== null) {
      handleSearchMoviesFromLocalStorage(values);
    } else {
      setIsMoviesLoadings(true);
      moviesApi.getMovies()
        .then(res => localStorage.setItem('movies', JSON.stringify(res)))
        .then(() => handleSearchMoviesFromLocalStorage(values))
        .then(() => setTimeout(() => localStorage.removeItem('movies'), 60 * 60 * 1000))
        .catch(() => setMoviesErrorMessage('???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ?? ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????'))
        .finally(() => setIsMoviesLoadings(false));
    };
  };

  const handleSearchMoviesFromLocalStorage = (values) => {
    const localMoviesCards = JSON.parse(localStorage.getItem('movies'));

    const filteredMoviesCards = moviesFilter(values, localMoviesCards);

    setMoviesCards(filteredMoviesCards);

    if (filteredMoviesCards.length === 0) {
      setMoviesErrorMessage('???????????? ???? ??????????????');
    };

    localStorage.setItem('filtered-movies', JSON.stringify(filteredMoviesCards));
  };

  const handleSearchSavedMovies = (values) => {
    setSavedMoviesErrorMessage('');

    const localSavedMoviesCards = JSON.parse(localStorage.getItem('saved-movies'));

    const filteredSavedMoviesCards = moviesFilter(values, localSavedMoviesCards);

    setSavedMoviesCards(filteredSavedMoviesCards);

    if (filteredSavedMoviesCards.length === 0) {
      setSavedMoviesErrorMessage('???????????? ???? ??????????????');
    };
  };

  const handleSaveMovie = (movie, isSaved) => {
    mainApi.changeSaveMovieStatus(movie, isSaved)
      .then(() =>
        mainApi.getSavedMovies()
          .then(res => localStorage.setItem('saved-movies', JSON.stringify(res)))
          .then(() => setSavedMoviesCards(JSON.parse(localStorage.getItem('saved-movies'))))
          .catch(err => console.log(err))
      ).catch(err => console.log(err));
  };

  const handleRegister = (values, setButtonText, handleErrorText) => {
    setButtonText('??????????????????????...')
    mainApi.register(values)
      .then(() => mainApi.login(values))
      .then(() => dispatch(setLoggedInStatus(true)))
      .then(() => history.push('/movies'))
      .catch(err => handleErrorText(err.status))
      .finally(() => setButtonText('????????????????????????????????????'));
  };

  const handleLogin = (values, setButtonText, handleErrorText) => {
    setButtonText('????????...');
    mainApi.login(values)
      .then(userData => dispatch(updateUser(userData)))
      .then(() => dispatch(setLoggedInStatus(true)))
      .then(() => history.push('/movies'))
      .catch(err => handleErrorText(err.status))
      .finally(() => setButtonText('??????????'));
  };

  const handleLogout = (setLogoutButtonText, handleErrorText) => {
    setLogoutButtonText('??????????...');
    mainApi.logout()
      .then(() => history.push('/'))
      .then(() => dispatch(setLoggedInStatus(false)))
      .then(() => localStorage.clear())
      .catch(err => handleErrorText(err.status))
      .finally(setLogoutButtonText('?????????? ???? ????????????????'));
  };

  const handleUpdateUser = (values, setEditButtonText, setStatusText, handleErrorText) => {
    setEditButtonText('????????????????????...')
    mainApi.updateUserData(values)
      .then(userData => dispatch(updateUser(userData)))
      .then(() => setStatusText('???????????? ?????????????? ??????????????????!'))
      .catch(err => handleErrorText(err.status))
      .finally(() => setEditButtonText('??????????????????????????'));
  };

  const handleNavPopupClick = () => {
    setIsNavPopupOpen(true);
  };

  const closeNavPopupPopup = () => {
    setIsNavPopupOpen(false);
  };

  return (
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
          cards={moviesCards}
          onSubmit={handleSearchMovies}
          isLoading={isMoviesLoadings}
          errorMessage={moviesErrorMessage}
          onSaveMovie={handleSaveMovie}
        />

        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          cards={savedMoviesCards}
          onSubmit={handleSearchSavedMovies}
          errorMessage={savedMoviesErrorMessage}
          onSaveMovie={handleSaveMovie}
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
  );
};

export default (App);
