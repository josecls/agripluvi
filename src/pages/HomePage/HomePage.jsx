import React from 'react'
import {
  Container,
  HeaderDiv,
  HeaderTitle,
  Title,
  Paragraph,
  ContentDiv,
} from './styles'

import Option from '../../components/Option/Option'
import { GlobalStyle } from '../../globalStyles'

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderDiv>
          <HeaderTitle>AGRIPLUVI</HeaderTitle>
        </HeaderDiv>
        <ContentDiv>
          <Title>Bem-vindo!</Title>
          <Paragraph>
            Esta plataforma foi feita para auxiliar o trabalho do agricultor.
            Utilizando o AGRIPLUVI, você poderá obter informações sobre o
            cultivo das principais culturas no estado de Alagoas!  As informações
            fornecidas são tiradas diretamente de dados vindos das estações de
            medição espalhadas em todo o Estado de Alagoas e disponibilizados no
            site do Instituto Nacional de Metereologia. Apenas clique em um dos
            ícones baixo para começar:
          </Paragraph>
          <Option
            text='Em quais regiões é melhor plantar determinada cultura?'
            page='/region-option'
          />
        </ContentDiv>
      </Container>
    </>
  )
}

export default HomePage