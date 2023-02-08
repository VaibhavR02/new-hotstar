import React from 'react';
import styled from 'styled-components';

import Advertise from './Login/Advertise';
import Banner from './Login/Banner';
import Devices from './Login/Devices';
import DownloadNow from './Login/DownloadNow';
import GridTheme from './Login/GridTheme';
import GroupWatch from './Login/GroupWatch';
import Marvel from './Login/Marvel';
import Stream from './Login/Stream';

const Login = () => {
  return (
    <div>
      <Main>
        <Banner />
        <Stream />
        <GroupWatch />
        <Marvel />
        <GridTheme />
        <DownloadNow />
        <Advertise />
        <Devices />
      </Main>
    </div>
  );
};
const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;

export default Login;
