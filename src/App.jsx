import memoize from 'memoize-one';
import { getPopularMovies } from 'services';
import { preventDuplicateMovies } from 'utils';
import { FixedSizeList as List } from 'react-window';
import { useEffect, useMemo, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import Filters from './components/Filters';
import MovieCard from 'components/MovieCard';
import TopRatedMovies from 'components/TopRatedMovies';
import {
  Container,
  Content,
  LoadMore,
  LoadMoreButton,
  Main
} from './App.styles';

const createItemData = memoize(items => ({ items }));

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  const handleNextPage = () => setPage(prev => prev + 1);

  const handleQueryChange = e => setQuery(e.target.value);

  const handleFilterToggle = () => setShowFilter(prev => !prev);

  const filteredMovies = useMemo(
    () =>
      movies?.filter(movie =>
        movie.original_title.toLowerCase().includes(query.toLowerCase())
      ),
    [movies, query]
  );

  useEffect(() => {
    getPopularMovies({ page }).then(movies =>
      setMovies(prev => preventDuplicateMovies(prev, movies))
    );
  }, [page]);

  const itemData = createItemData(filteredMovies);

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
          <div style={{ flex: 1 }}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  overscanCount={1}
                  height={height}
                  itemCount={filteredMovies?.length}
                  itemSize={400}
                  itemData={itemData}
                  width={width}>
                  {MovieCard}
                </List>
              )}
            </AutoSizer>
          </div>
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
