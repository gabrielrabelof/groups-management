import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
  min-height: 56px;
  min-width: 56px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`