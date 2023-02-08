import React from 'react';
import styled from 'styled-components';
import Devices from '../images/Devices.png';

const DownloadNow = () => {
  return (
    <>
      <Section>
        <Container>
          <TextInfo>
            <h1 className="disney-titles">Stream Now or Download Now </h1>
            <h1 className="disney-titles">Explore Us More on Disney</h1>
            <p>
              Stream on 4 devices at once or Download Your favourates to watch
              later With Lorem ipsum, dolor sit amet consectetur
            </p>
            <button type="button" className="btn-theme-disney">
              Download Now
            </button>
          </TextInfo>
          <ImageInfo>
            <img src={Devices} alt="imgStream" />
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
  flex-direction: row;
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

  > .btn-theme-disney {
    font-size: 15px;
  }
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
    margin-top: 0.5rem;

    @media screen and (min-width: 500px) and (max-width: 1200px) {
      height: auto;
      width: 100%;
      object-fit: contain;
      margin-top: 3vh;
    }

    @media screen and(min-width: 280px) and (max-width: 500px) {
      height: 31vh;
      width: 100%;
      object-fit: contain;
      margin-top: 3rem;
    }
  }
`;
export default DownloadNow;
