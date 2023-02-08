import React from 'react';
import styled from 'styled-components';
import logo from '../images/cta-logo-one.svg';
import logo2 from '../images/cta-logo-two.png';
import bg from '../images/login.jpg';

const Banner = () => {
  return (
    <div>
      <Background>
        <Container>
          <Content>
            <img src={logo} alt="logo img" />
            <button className="get-bundle-btn" type="button">
              Get The Disney Bundle
            </button>
            <h4>Stream now: Terms Apply</h4>
            <img src={logo2} alt="brand" />
            <button className="links" type="button">
              Sign Up for Disney+ Only
            </button>
            <button className="links text-gray" type="button">
              500/month or 900/year.
            </button>
          </Content>
        </Container>
      </Background>
    </div>
  );
};

const Background = styled.section`
  background-image: url(${bg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 85vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 75vh;
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }

  @media screen and (min-width: 550px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 350px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-width: auto;
    margin-top: 13vh;
  }

  h4 {
    margin: 1vh 0;
    color: #fff;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }
  > .get-bundle-btn {
    outline: none;
    border: none;
    padding: 11.5px 15px;
    width: 100%;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    border-radius: 0.145rem;
    transition: all 0.5s ease-in-out;
    @media screen and (min-width: 550px) and (max-width: 550px) {
      padding: 10px 0;
      font-size: 15px;
    }

    @media screen and (min-width: 280px) and (max-width: 550px) {
      padding: 5px 0;
      font-size: 14px;
    }

    &:hover {
      background: #0085ff;
    }
  }

  > .links {
    outline: none;
    border: none;
    font-size: 19px;
    background: transparent;
    color: #f9f9f9;
    margin-top: 1vh;
    @media screen and (min-width: 280px) and (max-width: 550px) {
      font-size: 15px;
    }
  }
  > .text-gray {
    color: gray;
  }
`;
export default Banner;
