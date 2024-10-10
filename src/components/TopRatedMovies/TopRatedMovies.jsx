import { getTopRatedMovies } from 'services';
import { useEffect, useState } from 'react';
import MovieCardCompact from '../MovieCardCompact';
import { Container, List, ListItem, Title } from './TopRatedMovies.styles';

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then(setMovies);
  }, []);

  return (
    <Container>
      <Title>Top Rated</Title>
      <List>
        {movies.slice(0, 3).map(movie => (
          <ListItem key={movie.id}>
            <MovieCardCompact movie={movie} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TopRatedMovies;
