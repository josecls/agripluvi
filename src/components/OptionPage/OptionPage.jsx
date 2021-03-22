import React from 'react'

import optionIcon from '../../assets/images/region.png'

import { Container, OptionIcon, Paragraph } from './styles'

function OptionPage(props) {
  return (
    <Container>
      <Paragraph>{props.text}</Paragraph>
      <OptionIcon src={optionIcon} />
    </Container>
  )
}

export default OptionPage