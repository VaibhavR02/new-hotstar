import React from 'react';
import styled from 'styled-components';
import img1 from '../images/grid1.jpg';
import img2 from '../images/grid2.jpg';
import img3 from '../images/grid3.png';
import img4 from '../images/grid4.jpg';
import img5 from '../images/grid5.jpg';
import img6 from '../images/grid6.png';
import img7 from '../images/grid7.png';
import img8 from '../images/grid8.png';
import img9 from '../images/grid9.jpg';

const GridTheme = () => {
  const API_IMG = [
    { imgSrc: img1 },
    { imgSrc: img2 },
    { imgSrc: img3 },
    { imgSrc: img4 },
    { imgSrc: img5 },
    { imgSrc: img6 },
    { imgSrc: img7 },
    { imgSrc: img8 },
    { imgSrc: img9 },
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
            {API_IMG &&
              API_IMG.map((value, index) => (
                <Image key={index}>
                  <img src={value.imgSrc} alt="grid/img" />
                </Image>
              ))}
          </GridImg>
          <GetBunfleBtn>
            <button type="button" className="btn-theme-disney">
              Get The Disney Bundle
            </button>
          </GetBunfleBtn>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 5vh 0;
  position: relative;
`;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 3vh;

  p {
    font-size: 1rem;
    @media screen and (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`;

const GridImg = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px 25px;

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Image = styled.div`
  width: 100%;
  padding: 0;
  border-radius: 0.245rem;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/75%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.245rem;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;
const GetBunfleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1vh 0;
`;
export default GridTheme;
