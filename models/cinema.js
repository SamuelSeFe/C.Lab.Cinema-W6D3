const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = this.films.map( film => film.title);
  return titles;
};

Cinema.prototype.filmByTitle = function (filmTitle) {
  const byTitle = this.films.filter( film => film.title === filmTitle );
  return byTitle;
};
// Can also use this.films.find --> check solutions

Cinema.prototype.filmByGenre = function (filmGenre) {
  const byGenre = this.films.filter( film => film.genre === filmGenre);
  return byGenre;
};

Cinema.prototype.filmByYear = function (filmYear) {
  const byYear = this.films.filter( film => film.year === filmYear);
  return byYear;
}; 

Cinema.prototype.noFilmThisYear = function (filmYear) {
  const byYear = this.films.every( film => film.year === filmYear);
  return byYear;
};

Cinema.prototype.yesFilmByLength = function (filmLength) {
  const byLength = this.films.every( film => film.length > filmLength);
  return byLength;
};

// Cinema.prototype.filmByLength = function (filmLength) {
//   const byLength = this.films.filter (film => film.length > 130);
//   return byLength;
// };

Cinema.prototype.totalFilmsLength = function () {
  return this.films.reduce( (runningTotal, film) => { return runningTotal + film.length; 
  }, 0);
};

Cinema.prototype.filmsByProperty = function (filmProperty, filmPropertyValue) {
  const byProperty = this.films.filter( film => film[filmProperty] === filmPropertyValue);
  return byProperty;
};

module.exports = Cinema;
