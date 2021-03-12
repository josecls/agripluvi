import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  width: 220px;
  height: 220px;
`

export const IconDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  height: 220px;
  width: 220px;

  img {
    height: 128px;
    width: 128px;
  }
  `

export const TitleInfo = styled.h4`
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #09679b;
  margin-top: 4px;
  `

export const ValueInfo = styled.h3`
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 30px;
  `