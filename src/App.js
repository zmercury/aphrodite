// import React, { Fragment } from 'react';
import GlobalStyle from './theme/globalStyles';
import styled from 'styled-components';

//imports 
import { Header, Sidebar, WeatherStack } from './components';

function App() {
  return (
    <Main>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <WeatherStack />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
