import React from 'react';
import Layout from './components/Layout';
import Background from './components/Background';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Layout />
    </>
  );
}

export default App;
