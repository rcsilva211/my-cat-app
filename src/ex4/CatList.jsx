import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchCats } from '../redux/catsThunk';
import Pagination from './Pagination';

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

  button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #ddd;
      cursor: not-allowed;
    }
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

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CatList = ({ apiKey }) => {
  const dispatch = useDispatch();
  const { data, page, isLoading, error } = useSelector((state) => state.cats);

  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState('asc');
  const [tempLimit, setTempLimit] = useState(limit); // Temporary value for the input field

  useEffect(() => {
    dispatch(fetchCats(page, limit, order, apiKey));
  }, [dispatch, page, limit, order, apiKey]);

  const handleConfirm = () => {
    setLimit(tempLimit);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setLimit(tempLimit);
    }
  };

  if (isLoading) return <LoadingText>Loading...</LoadingText>;

  if (error) return <ErrorText>Error: {error}</ErrorText>;

  return (
    <Container>
      {/* Controls Section */}
      <Controls>
        <ControlItem>
          <label>Limit:</label>
          <input
            type="number"
            value={tempLimit}
            onChange={(e) => setTempLimit(Number(e.target.value))}
            onKeyPress={handleKeyPress} // Update on Enter key
            min={1}
          />
          <button onClick={handleConfirm}>Confirm</button>
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
      <StyledPagination page={page} setPage={(newPage) => dispatch({ type: 'cats/setPage', payload: newPage })} />

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

export default CatList;
