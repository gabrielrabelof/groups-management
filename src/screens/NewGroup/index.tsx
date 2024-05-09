import { Container, Content, Icon } from "./styles";

import { useTheme } from "styled-components/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function NewGroup() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Header showBackButton />

      <Content>

        <Icon />

        <Highlight
          title="New Team"
          subtitle="Create a team to add people"
        />

        <Input 
          placeholder="Team name"
          placeholderTextColor={COLORS.GRAY_300}
        />

        <Button 
          title="Create"
          style={{marginTop: 20}}
          activeOpacity={0.7}
        />

      </Content>
    </Container>
  )
}