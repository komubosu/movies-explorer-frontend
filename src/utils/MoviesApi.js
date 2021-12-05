class MoviesApi {
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

  getMovies() {
    return fetch(`${this._baseUrl}`)
      .then(res => this._checkAnswer(res));
  };
};

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;