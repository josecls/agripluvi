import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 21%;
  width: 25%;
`

export const Paragraph = styled.p`
  margin-top: 70px;
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