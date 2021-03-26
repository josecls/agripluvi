import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 20%;
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`

export const OptionIcon = styled.img`
  width: 200px;
  height: 140px;
  cursor: pointer;

  :hover {
    opacity: 70%;
  }
`