import styled from 'styled-components';
import { Button } from '../../../index';

export const StyledButton = styled(Button).attrs({
  color: 'secondary',
  shadow: true,
})`
  min-width: 96px;
`;
