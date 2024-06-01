import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "styled-components/native";
import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { groupCreate } from "@storage/group/groupCreate";

import { AppError } from "@utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const { COLORS } = useTheme()

  const navigation = useNavigation()

  async function handleNewTeam() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('New Group', 'Enter the team name.')
      }

      await groupCreate(group)
      navigation.navigate('teams', { group })  
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Group', error.message)
      }
      else {
        Alert.alert('New Group', 'Unable to create a new team.')
        console.log(error)
      }
    }
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
          onPress={handleNewTeam}
          style={{marginTop: 20}}
        />

      </Content>
    </Container>
  )
}