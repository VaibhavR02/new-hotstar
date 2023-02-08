import React from 'react';
import styled from 'styled-components';
import logo from '../Components/images/logo.svg';

const Footer = () => {
  return (
    <>
      <Section>
        <Contaniner>
          <FooterBrand>
            <img src={logo} alt="footer/logo" />
          </FooterBrand>
          <Nav>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>Subscriber Agreement</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Your India Privacy</p>
            </li>
            <li>
              <p>Do Not Sell My Info</p>
            </li>
            <li>
              <p>Children's Online Privacy Policy</p>
            </li>
            <li>
              <p>Closed Captioning</p>
            </li>
            <li>
              <p>Interset-Based-Ads</p>
            </li>
            <li>
              <p>Supported Devices</p>
            </li>
            <li>
              <p>Help</p>
            </li>
            <li>
              <p>Gift Disney+</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Disney+ Partner Progrem</p>
            </li>
            <li>
              <p>Premier Access</p>
            </li>
            <li>
              <p>The Disney Bundle</p>
            </li>
          </Nav>
          <CopyRight>
            <p>&copy; DisneyPlus-Vaibhav-Randale. All Rights Reserved 2023 </p>
          </CopyRight>
        </Contaniner>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  margin-bottom: 0;

  @media screen and (max-width: 550px) {
    padding: 1rem 0;
  }
`;

const Contaniner = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const FooterBrand = styled.div`
  text-align: center;
  img {
    width: 10rem;
    height: auto;
    object-fit: fill;
    @media screen and (max-width: 550px) {
      width: 7rem;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-grow: initial;
  justify-content: center;

  li {
    list-style: none;

    p {
      padding: 0.5rem;
      font-size: 0.9rem;
      margin-right: 0.3rem;
      @media screen and (max-width: 550px) {
        font-size: 0.75rem;
        padding: 0.1rem;
      }
    }
  }
`;

const CopyRight = styled.div`
  text-align: center;
  p {
    font-weight: 400 !important;
    margin-top: 1vh;
    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;

export default Footer;
