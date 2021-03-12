import React, { useState } from 'react'
import { IconDiv, Container, valueInfo, titleInfo } from './styles'

const DashboardInfo = () => {
  const [iconDivColor, setIconDivColor] = useState('#FF0')

  const changeIconDivColor = (color) => {
    setIconDivColor(color)
  }

  return (
    <Container>
      <IconDiv style={{ backgroundColor: iconDivColor }}>
        <img src='https://img.icons8.com/ios/452/banana.png' style={{ width: '60%', height: '60%' }} />
      </IconDiv>
      <titleInfo>TITULO</titleInfo>
      <valueInfo>VALOR</valueInfo>
    </Container >
  )
}

export default DashboardInfo