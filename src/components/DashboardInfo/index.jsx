import React from 'react'
import { IconDiv, Container, TitleInfo, ValueInfo } from './styles'

const DashboardInfo = (props) => {
  return (
    <Container>
      <IconDiv style={{ backgroundColor: props.backgroundColor }}>
        <img src={props.img} alt="" />
      </IconDiv>
      <TitleInfo>{props.title}</TitleInfo>
      <ValueInfo>{props.value}</ValueInfo>
    </Container >
  )
}

export default DashboardInfo