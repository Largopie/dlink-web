import HeaderSearch from 'pages/mainPage/HeaderSearch';
import HeaderLogin from 'pages/mainPage/HeaderLogin';
import React from 'react';
import styled from 'styled-components';
import AdBar from 'pages/mainPage/AdBar';
import MainContent from 'pages/mainPage/MainContent';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const TopStyle = styled.div`
  position: absolute;
  top: 0px;
  background-color: #DADADA;
  width: 100vw;
  height: 36px;
`
const HeaderStyle = styled.div`
  position: absolute;
  top: 36px;
  background-color: #FFFFFF;
  width: 100vw;
  height: 64px;
`

const AdBarStyle = styled.div`
  position: absolute;
  top: 100px;
  background-color: #2878FF;
  width: 100vw;
  height: 160px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 1280px;
  height: 400px;
`

function App() {
  return (
    <Container>
      <TopStyle />
      <HeaderStyle />
      <AdBarStyle />
      <Content>
        <HeaderLogin />
        <HeaderSearch />
        <AdBar />
        <MainContent />
      </Content>
    </Container>
  );
}

export default App;
