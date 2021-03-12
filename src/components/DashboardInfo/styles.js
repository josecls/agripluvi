import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  width: 300px;
  height: 34vh;
`

export const IconDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  height: 60%;
  width: 42%;
  `

export const titleInfo = styled.h4`
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #09679b;
  margin-top: 4px;
  `

export const valueInfo = styled.h3`
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 30px;
  `