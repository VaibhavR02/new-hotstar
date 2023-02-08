import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Banner from './Home/Banner';
import background from '../Components/images/disneybody.png';
import Brand from './Home/Brand';
import Originals from './Home/Originals';
import NewToDisney from './Home/NewToDisney';
import Trending from './Home/Trending';
import Bollywood from './Home/Bollywood';
import DisneyForKids from './Home/DisneyForKids';
import Popular from './Home/Popular';

const Home = () => {
  return (
    <>
      <Container>
        <Helmet>
          <title>Disney+ Hotstar</title>
        </Helmet>{' '}
        <Banner />
        <Brand />
        <Originals />
        <NewToDisney />
        <Trending />
        <Bollywood />
        <DisneyForKids />
        <Popular />
      </Container>
    </>
  );
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh -250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;
  background: url(${background}) center/cover no-repeat;
`;
export default Home;
