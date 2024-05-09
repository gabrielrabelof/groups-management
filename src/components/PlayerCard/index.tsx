import { Container, Icon, Name } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
  name: string
}

export function PlayerCard({ name }: Props) {
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
        type="SECONDARY"
      />

    </Container>
  )
}