import { useState } from 'react';
import styled from 'styled-components';
import { useGetCatsQuery } from './catsApi';

// Styled Components
const Container = styled.div`
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const Controls = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;
`;

const ControlItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }

  input,
  select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    background-color: #fff;
    transition: all 0.2s ease;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 30px; /* Added margin-bottom for better spacing */
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #007bff;
  background-color: ${(props) => (props.disabled ? '#ddd' : '#007bff')};
  color: ${(props) => (props.disabled ? '#666' : '#fff')};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ddd' : '#0056b3')};
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const GridItem = styled.li`
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #007bff;
  font-weight: bold;
`;

const ErrorText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #ff4d4f;
  font-weight: bold;
`;

// Component Definition
const RTKCatList = ({ page, setPage }) => {
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState('asc');

  const { data, error, isLoading } = useGetCatsQuery({ page, limit, order });

  if (isLoading) return <LoadingText>Loading...</LoadingText>;
  if (error) return <ErrorText>Error loading cats</ErrorText>;

  return (
    <Container>
      {/* Controls */}
      <Controls>
        <ControlItem>
          <label>Limit:</label>
          <input type="number" value={limit} onChange={(e) => setLimit(Number(e.target.value))} min={1} />
        </ControlItem>
        <ControlItem>
          <label>Order:</label>
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </ControlItem>
      </Controls>

      {/* Pagination */}
      <Pagination>
        <PaginationButton disabled={page === 0} onClick={() => setPage(page - 1)}>
          Previous
        </PaginationButton>
        <PaginationButton onClick={() => setPage(page + 1)}>Next</PaginationButton>
      </Pagination>

      {/* Cat Grid */}
      <Grid>
        {data.map((cat) => (
          <GridItem key={cat.id}>
            <img src={cat.url} alt="cat" />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default RTKCatList;
