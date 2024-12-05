import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Cat Explorer</Title>
      <Subtitle>Explore beautiful cat pictures and customize your preferences.</Subtitle>
    </HomeContainer>
  );
};

export default Home;
