class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    };
    return Promise.reject(res);
  };

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    }).then(res => this._checkAnswer(res));
  };

  updateUserData({ email, name }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ email, name }),
      credentials: 'include',
    }).then(res => this._checkAnswer(res));
  };

  register({ email, password, name }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name }),
    }).then(res => this._checkAnswer(res));
  };

  login({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    }).then(res => this._checkAnswer(res));
  };
};

const mainApi = new MainApi({
  baseUrl: 'https://api.komubosu.films.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;