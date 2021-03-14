import React from 'react';

import { Container, HelpIcon, HelpTooltip, HelpTooltipText } from './styles';

function Help() {
  return (
    <Container>
      <HelpTooltip 
        title={
          <HelpTooltipText>Você pode selecionar uma região no mapa e nós iremos trazer dados para te ajudar no plantio.</HelpTooltipText>
        }
        arrow
        placement="left"
      >
        <HelpIcon fontSize="large" />
      </HelpTooltip>
    </Container>
  );
}

export default Help;