import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
  padding: 8px 12px;
  border-radius: 4px;
  gap: 10px;

  ${({theme, isActive}) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `}
`

export const Title = styled.Text`
  text-transform: uppercase;
  
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`