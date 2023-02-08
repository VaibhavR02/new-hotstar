import React from 'react';
import styled from 'styled-components';
import imgStream from '../images/jugle.jpg';

const Stream = () => {
  return (
    <>
      <Section>
        <Container>
          <TextInfo>
            <h1 className="disney-titles">Stream with Premier Access the </h1>
            <h1 className="disney-titles">same day it's in theaters</h1>
            <p>
              Coming May 28, Get Premier Access to Cruilla for Rs.300 with a
              Disney+ subscription Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Mollitia, consectetur.
            </p>
            <button type="button" className="btn-theme-disney">
              PREORDER
            </button>
          </TextInfo>
          <ImageInfo>
            <img src={imgStream} alt="imgStream" />
          </ImageInfo>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 15px 55px;
  position: relative;
  background: transperent;

  @media screen and (max-width: 991px) {
    padding: 35px 50px;
  }

  @media screen and (max-width: 767px) {
    padding: 25px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const TextInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: realtive;
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 100;

    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.85rem;
      line-height: 1rem;
    }

    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top: 1vh;
    }
  }
`;
const ImageInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: realtive;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;

    @media screen and (min-width: 500px) and (max-width: 1200px) {
      height: auto;
      width: 100%;
      object-fit: contain;
    }

    @media screen and(min-width: 280px) and (max-width: 500px) {
      height: 31vh;
      width: 100%;
      object-fit: contain;
    }
  }
`;
export default Stream;
