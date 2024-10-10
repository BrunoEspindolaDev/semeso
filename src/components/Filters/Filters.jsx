import { FiSearch } from 'react-icons/fi';
import {
  Body,
  Container,
  Header,
  Title,
  Toggle,
  Small,
  SearchInput
} from './Filters.styles';

const Filters = ({
  isOpen,
  onQueryChange,
  onToggle,
  query,
  totalOfResults
}) => {
  return (
    <Container>
      <Header>
        <Title>#SemesoMovies</Title>
        <Toggle onClick={onToggle}>
          <FiSearch />
        </Toggle>
      </Header>
      {isOpen && (
        <Body>
          <SearchInput
            placeholder="Search by movies..."
            value={query}
            onChange={onQueryChange}
          />
          <Small>Total de resultados: {totalOfResults}</Small>
        </Body>
      )}
    </Container>
  );
};

export default Filters;
