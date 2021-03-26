import React from 'react'

import optionIcon from '../../assets/images/region.png'

import { Container, OptionIcon, Paragraph } from './styles'

function Option(props) {
  return (
    <Container>
      <Paragraph>{props.text}</Paragraph>
      <a href={props.page}>
        <OptionIcon src={optionIcon} />
      </a>
    </Container>
  )
}

export default Option