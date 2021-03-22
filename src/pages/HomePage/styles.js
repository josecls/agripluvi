import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 30%;
  background: #1C5D99;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const HeaderTitle = styled.h1`
  color: #FFF;
  font-size: 45px;
  align-self: center;
`

export const ContentDiv = styled.h1`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: center;
  flex-direction: center;
  align-content: center;
`

export const FirstContentBlock = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 70%;
  width: 100%
`

export const SecondContentBlock = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 30%;
  width: 100%
`

export const Paragraph = styled.p`
  font-size: 23px;
  text-align: justify;
  margin: 0px 30px;
  text-justify: inter-word;
  font-weight: 400;
`
export const Title = styled.h1`
  margin-top: 10px;
  font-size: 30px;
`