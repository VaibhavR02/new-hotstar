import React from 'react';
import styled from 'styled-components';
import closeIcon from './images/close.svg';

const Popup = (props) => {
  return props.trigger ? (
    <Video>
      <InnerVideo>
        <img
          className="close"
          onClick={() => props.setTrigger(false)}
          src={closeIcon}
          alt="img "
        />
        {props.children}
      </InnerVideo>
    </Video>
  ) : (
    ''
  );
};

const Video = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 991px) and (max-width: 1200px) {
    height: 82vh;

    top: 20%;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    height: 72vh;
    top: 20%;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    height: 35vh;
    top: 30%;
    left: 0;

    justify-content: center;
    align-items: center;
  }
`;

const InnerVideo = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;

  img {
    cursor: pointer;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 16px;
    right: 16px;

    @media screen and (min-width: 991px) and (max-width: 1200px) {
      top: 18px;
      right: 30px;
    }
    @media screen and (min-width: 550px) and (max-width: 991px) {
      top: 14px;
      right: 40px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      top: 18px;
      right: 50px;
    }
  }
`;

export default Popup;
