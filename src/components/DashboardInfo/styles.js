import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-width: 180px;
  height: 100%;
  min-height: 200px;
  text-align: center;
`

export const IconDiv = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 20px;
  
  img {
    height: 100px;
    width: 100px;
  }
`

export const TitleInfo = styled.h4`
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #09679b;
`

export const ValueInfo = styled.h3`
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
`