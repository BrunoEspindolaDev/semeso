export const preventDuplicateMovies = (prevMovies, newMovies) => {
  const existingMovieIds = new Set(prevMovies.map(movie => movie.id));

  const filteredNewMovies = newMovies.filter(
    movie => !existingMovieIds.has(movie.id)
  );

  return [...prevMovies, ...filteredNewMovies];
};

export const task = () => {
  let total = 0;

  for (let i = 0; i < 100000000; i++) {
    total += Math.sqrt(i);
  }

  return total;
};
