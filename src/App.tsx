import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 3% 0px 3% 0px;
  width: 100vw;
  height: 100vh;
  background-color: #E8EAEE;
`
const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  
`

const LeftContainer = styled.div`
  width: 12%;
  background-color: aqua;
`

const CenterCotainer = styled.div`
  width: 55%;
  background-color: green;
`

const RightContainer = styled.div`
  width: 20%;
  background-color: yellow;
`

function App() {
  return (
    <MainContainer>
      <SubContainer>
        <LeftContainer />
        <CenterCotainer />
        <RightContainer />
      </SubContainer>
    </MainContainer>
  );
}

export default App;
