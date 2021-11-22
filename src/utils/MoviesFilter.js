const moviesFilter = (values, moviesCards) => {
  const filterWords = (card) => {
    return card.nameRU.toLowerCase().indexOf(values.words.toLowerCase()) !== -1;
  };

  const filterShortMovie = (card) => {
    return card.duration <= 40;
  };

  if (values.isShortMovie) {
    return moviesCards.filter(filterWords).filter(filterShortMovie);
  } else {
    return moviesCards.filter(filterWords);
  };
};

export default moviesFilter;