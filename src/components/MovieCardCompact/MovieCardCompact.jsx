import { Container, Content, Title, Small } from './MovieCardCompact.styles';

const getImageUrl = path => `https://image.tmdb.org/t/p/w500/${path}`;

const MovieCardCompact = ({ movie }) => {
  return (
    <Container src={getImageUrl(movie.backdrop_path)}>
      <Content>
        <Title>{movie.original_title}</Title>
        <Small>{movie.vote_average.toFixed(2)}</Small>
      </Content>
    </Container>
  );
};

export default MovieCardCompact;
