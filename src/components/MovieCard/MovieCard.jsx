import { GENRES } from 'constants';
import { areEqual } from 'react-window';
import { memo, useEffect, useState } from 'react';
import {
  Badge,
  BadgeGroup,
  Banner,
  Container,
  Stack,
  Text,
  Title
} from './MovieCard.styles';

const GUTTER_SIZE = 15;

const createWorker = () => {
  return new Worker(new URL('../../workers/movieWorker.js', import.meta.url), {
    type: 'module'
  });
};

const getImageUrl = path => `https://image.tmdb.org/t/p/w500/${path}`;

const MovieCard = ({ index, style, data }) => {
  const { items } = data;
  const movie = items[index];

  const [_, setResult] = useState();

  useEffect(() => {
    const worker = createWorker();

    worker.postMessage({ id: movie.id });

    worker.onmessage = function (e) {
      setResult(e.data.total);
      worker.terminate();
    };

    return () => {
      worker.terminate();
    };
  }, [movie.id]);

  return (
    <Container
      style={{
        ...style,
        right: Number(style.left + GUTTER_SIZE),
        height: Number(style.height - GUTTER_SIZE),
        width: `calc(${style.width} - ${GUTTER_SIZE})`
      }}>
      <Banner src={getImageUrl(movie?.backdrop_path)} />
      <Stack>
        <BadgeGroup>
          {movie?.genre_ids.map(genreId => (
            <Badge key={genreId}>{GENRES[genreId]}</Badge>
          ))}
        </BadgeGroup>
        <Title>{movie?.original_title}</Title>
        <Text>{movie?.overview}</Text>
      </Stack>
    </Container>
  );
};

export default memo(MovieCard, areEqual);
