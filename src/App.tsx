import MainPage from 'pages/mainPage/mainPage';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 3% 0px 3% 0px;
  width: 100vw;
  height: 100vh;
  background-color: #E8EAEE;
`

function App() {
  return (
    <MainContainer>
      <MainPage />
    </MainContainer>
  );
}

export default App;
