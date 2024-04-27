import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  
  align-items: center;
  justify-content: center;
  
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
  font-size: 24px;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`