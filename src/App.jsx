import React from 'react';
import Layout from './components/Layout';
import Background from './components/Background';
import Help from './components/Help';
import Title from './components/Title';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Help />
      <Title />
      <Layout />
    </>
  );
}

export default App;
