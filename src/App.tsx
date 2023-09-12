import React from 'react';
import styled from 'styled-components';

const TopStyle = styled.div`
  position: absolute;
  top: 0px;
  background-color: #DADADA;
  width: 100%;
  height: 36px;
`
const HeaderStyle = styled.div`
  position: absolute;
  top: 36px;
  background-color: #FFFFFF;
  width: 100%;
  height: 64px;
`

const AdBarStyle = styled.div`
  position: absolute;
  top: 100px;
  background-color: #2878FF;
  width: 100%;
  height: 160px;
`;

function App() {
  return (
    <div>
      <TopStyle />
      <HeaderStyle />
      <AdBarStyle />
    </div>
  );
}

export default App;
