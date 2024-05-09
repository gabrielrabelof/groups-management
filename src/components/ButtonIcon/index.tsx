import { MaterialIcons } from "@expo/vector-icons"

import { Container, Icon, ButtonIconTypeStyleProps } from "./styles";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps 
}

export function ButtonIcon({ icon, type = 'PRIMARY' }: Props) {
  return (
    <Container>

      <Icon
        name={icon}
        type={type}
      />

    </Container>
  )
}