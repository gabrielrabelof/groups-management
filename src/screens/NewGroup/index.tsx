import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./styles";

import { useTheme } from "styled-components/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const { COLORS } = useTheme()

  const navigation = useNavigation()

  function handleTeams() {
    navigation.navigate('teams', { group })
  }

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
          onChangeText={setGroup}
          placeholderTextColor={COLORS.GRAY_300}
        />

        <Button 
          title="Create"
          onPress={handleTeams}
          style={{marginTop: 20}}
        />

      </Content>
    </Container>
  )
}