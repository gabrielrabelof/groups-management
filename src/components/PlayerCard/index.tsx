import { Container, Icon, Name } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
  name: string
  onRemove?: () => void
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>

      <Icon 
        weight="fill"
      />

      <Name>
        {name}
      </Name>

      <ButtonIcon
        icon="close"
        onPress={onRemove}
        type="SECONDARY"
      />

    </Container>
  )
}