import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: -1;
`;

export const FirstBlock = styled.div`
  width: 100%;
  height: 30%;
  background: #1C5D99;
`;

export const SecondBlock = styled.div`
  width: 100%;
  height: 70%;
  background: #E7F0FF;
`;