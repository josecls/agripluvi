import React from 'react';
import Layout from './components/Layout';
import Background from './components/Background';
import Help from './components/Help';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Help />
      <Layout />
    </>
  );
}

export default App;
