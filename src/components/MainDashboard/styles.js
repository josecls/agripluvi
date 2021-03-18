import styled from 'styled-components'
import container from '@material-ui/core/Container'

export const Container = styled(container)`
  position: relative;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  height: 100% !important;
  min-height: 100vh;
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-top: 128px !important;
  margin-bottom: 50px !important;
`;

export const Separator = styled.div`
  height: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  width: 8px;
  background-color: #cfddf0;
  margin-right: 20px;
  margin-left: 20px;
`

