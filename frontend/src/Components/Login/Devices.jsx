import React from 'react';
import styled from 'styled-components';
import img1 from '../images/Laptop.png';
import img2 from '../images/TV.png';
import img3 from '../images/mobile.png';
import img4 from '../images/XBOX.png';

const Devices = () => {
  const API_IMG = [
    { imgSrc: img1, title: 'Laptop' },
    { imgSrc: img2, title: 'TV' },
    { imgSrc: img3, title: 'Mobile' },
    { imgSrc: img4, title: 'XBOX' },
  ];

  return (
    <>
      <Section>
        <Container>
          <Title>
            <h1 className="disney-titles">
              Stream Executive Disney+ originals
            </h1>
            <p>New Stories from our incredible family of studios</p>
          </Title>
          <GridImg>
            {API_IMG.map((img, index) => (
              <Image key={index}>
                <img src={img.imgSrc} alt="grid/img" />
                <h2>{img.title}</h2>
              </Image>
            ))}
          </GridImg>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 3vh 0 0 0;
  position: relative;
`;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  margin: 0 0 4vh 0;
`;

const GridImg = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 15px 25px;

  @media screen and (min-width: 280px) and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Image = styled.div`
  width: 100%;
  padding: 0 0 0 0;
  text-align: center;
  border-radius: 4px;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 115px;
    object-fit: contain;
    @media screen and (min-width: 768px) and (max-width: 991px) {
      height: 85px;
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
      height: 75px;
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
      height: 55px;
    }
  }
`;

export default Devices;
