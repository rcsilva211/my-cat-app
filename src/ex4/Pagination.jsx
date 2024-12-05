import styled from 'styled-components';

// Styled Components
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 30px; /* Added spacing for modern layout */
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => (props.disabled ? '#ddd' : '#007bff')};
  color: ${(props) => (props.disabled ? '#666' : '#fff')};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ddd' : '#0056b3')};
  }
`;

const Pagination = ({ page, setPage }) => (
  <PaginationContainer>
    <PaginationButton onClick={() => setPage(page - 1)} disabled={page === 0}>
      Previous
    </PaginationButton>
    <PaginationButton onClick={() => setPage(page + 1)}>Next</PaginationButton>
  </PaginationContainer>
);

export default Pagination;
