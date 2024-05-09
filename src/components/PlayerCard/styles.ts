import { TouchableOpacity } from "react-native";

import { User } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  margin-bottom: 16px;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
`

export const Icon = styled(User).attrs(({theme}) => ({
  size: 22,
  color: theme.COLORS.GRAY_200
}))`
  margin-left: 16px;
  margin-right: 8px;
`

export const Name = styled.Text`
  flex: 1;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`