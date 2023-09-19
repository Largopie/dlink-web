import Menu from 'components/menu';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 12%;
`

const CenterCotainer = styled.div`
  width: 55%;
  background-color: green;
`

const RightContainer = styled.div`
  width: 20%;
  background-color: yellow;
`

const Login = styled.div`
  width: 100%;
  height: 10%;
  background-color: #FDFDFD;
  border-radius: 18px;
`
const MenuBar = styled.div`
  width: 100%;
  height: 60%;
`

const SchoolHome = styled.div`
  width: 100%;
  height: 9%;
  background-color: #FDFDFD;
  border-radius: 18px;
`

const MainPage = () => {
  return (
    <Container>
      <LeftContainer>
        <Login />
        <MenuBar>
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
        </MenuBar>
        <SchoolHome />
      </LeftContainer>
      <CenterCotainer />
      <RightContainer />
    </Container>
  );
};

export default MainPage;