import React, { useState } from 'react'
import { IconDiv, Container, valueInfo, titleInfo } from './styles'

const DashboardInfo = (props) => {
  return (
    <Container>
      <IconDiv style={{ backgroundColor: props.backgroundColor }}>
        <img src={props.img} style={{ width: '60%', height: '60%' }} />
      </IconDiv>
      <titleInfo>{props.title}</titleInfo>
      <valueInfo>{props.value}</valueInfo>
    </Container >
  )
}

export default DashboardInfo