import { GENRES } from 'constants';
import {
  Badge,
  BadgeGroup,
  Banner,
  Container,
  Stack,
  Text,
  Title
} from './MovieCard.styles';

const getImageUrl = path => `https://image.tmdb.org/t/p/w500/${path}`;

const MovieCard = ({ original_title, overview, backdrop_path, genre_ids }) => {
  return (
    <Container>
      <Banner src={getImageUrl(backdrop_path)} />
      <Stack>
        <BadgeGroup>
          {genre_ids.map(genreId => (
            <Badge key={genreId}>{GENRES[genreId]}</Badge>
          ))}
        </BadgeGroup>
        <Title>{original_title}</Title>
        <Text>{overview}</Text>
      </Stack>
    </Container>
  );
};

export default MovieCard;
