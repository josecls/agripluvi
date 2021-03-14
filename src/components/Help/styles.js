import styled from 'styled-components';
import Help from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

export const Container = styled.div`
  position: absolute;
  right: 0;
  z-index: 2 !important;
`;

export const HelpIcon = styled(Help)`
  color: #fff;
  margin: 35px;
  
  &:hover {
    transition: .5s color;
    color: #87FF65;
    cursor: pointer;
  }
`;

export const HelpTooltip = styled(Tooltip)`
  font-size: 40px !important;
`

export const HelpTooltipText = styled.h1`
  font-size: 17px;
  line-height: 1.2em;
  color: #fff;
`;