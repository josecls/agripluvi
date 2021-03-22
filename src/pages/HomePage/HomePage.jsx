import React from 'react'
import {
  Container,
  HeaderDiv,
  HeaderTitle,
  Title,
  ContentDiv,
  Paragraph,
  FirstContentBlock,
  SecondContentBlock
} from './styles'

import OptionPage from '../../components/OptionPage/OptionPage'

function HomePage() {
  const handleClick = () => {

  }

  return (
    <Container onClick={handleClick}>
      <HeaderDiv>
        <HeaderTitle>AGRIPLUVI</HeaderTitle>
      </HeaderDiv>
      <ContentDiv>
        <FirstContentBlock>
          <Title>Bem-vindo!</Title>
          <Paragraph>
            Esta plataforma foi feita para auxiliar o trabalho do agricultor.
            Utilizando o AGRIPLUVI, você poderá obter informações sobre o
            cultivo das principais culturas no estado de Alagoas!  As informações
            fornecidas são tiradas diretamente de dados vindos das estações de
            medição espalhadas em todo o Estado de Alagoas e disponibilizados no
            site do Instituto Nacional de Metereologia. Apenas selecione um das
            opções abaixo para começar:
          </Paragraph>
        </FirstContentBlock>
        <SecondContentBlock>
          <OptionPage text='Em quais regiões é melhor plantar determinada cultura?' />
        </SecondContentBlock>
      </ContentDiv>
    </Container>
  )
}

export default HomePage