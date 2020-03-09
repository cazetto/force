import styled from 'styled-components';
import tokens, { colors } from 'force-tokens';

export const ButtonStyled = styled.button`
  color: ${tokens.colors.ColorPalleteBlue300};
  background-color: ${colors.ColorPalletePurple900};
  border: none;
  padding: 12px 34px;
  border-radius: 4px;
`;
