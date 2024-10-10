import { useEffect, useState } from 'react';
import { getPopularMovies } from 'services';
import { preventDuplicateMovies } from 'utils';
import Filters from './components/Filters';
import MovieCard from 'components/MovieCard';
import TopRatedMovies from 'components/TopRatedMovies';
import {
  Container,
  Content,
  LoadMore,
  LoadMoreButton,
  List,
  ListItem,
  Main
} from './App.styles';

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  const handleNextPage = () => setPage(prev => prev + 1);

  const handleQueryChange = e => setQuery(e.target.value);

  const handleFilterToggle = () => setShowFilter(prev => !prev);

  const filteredMovies = movies?.filter(movie =>
    movie.original_title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    getPopularMovies({ page }).then(movies =>
      setMovies(prev => preventDuplicateMovies(prev, movies))
    );
  }, [page]);

  return (
    <Main>
      <Container>
        <Content>
          <Filters
            isOpen={showFilter}
            query={query}
            totalOfResults={filteredMovies?.length}
            onToggle={handleFilterToggle}
            onQueryChange={handleQueryChange}
          />
          <List>
            {filteredMovies.map(movie => (
              <ListItem key={movie.id}>
                <MovieCard {...movie} />
              </ListItem>
            ))}
          </List>
          {query.length === 0 && filteredMovies.length > 0 && (
            <LoadMore>
              <LoadMoreButton type="button" onClick={handleNextPage}>
                Ver mais
              </LoadMoreButton>
            </LoadMore>
          )}
        </Content>
        <TopRatedMovies />
      </Container>
    </Main>
  );
};

export default App;
