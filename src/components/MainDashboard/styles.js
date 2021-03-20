import styled from 'styled-components'
import container from '@material-ui/core/Container'

export const Container = styled(container)`
  position: relative;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  height: 100% !important;
  min-height: 90vh;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  margin-top: 128px !important;
  margin-bottom: 50px !important;
`;

export const Title = styled.h1`
  font-size: 65px;
  color: #20A4F3;
  text-align: center;
  margin-bottom: 5px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
  color: #24292e;
`;

export const TextArea = styled.div`
  margin-bottom: 150px;
`