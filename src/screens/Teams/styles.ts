import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Form = styled.View`
  width: 100%;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`

export const HeaderList = styled.View`
  width: 100%;
  margin: 32px 0 12px;
  
  flex-direction: row;
  align-items: center;
`

export const NumberOfPlayers = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`