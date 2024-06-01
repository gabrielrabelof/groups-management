import { useState, useEffect, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

import { AppError } from "@utils/AppError";

type RouteParams = {
  group: string
}

export function Teams() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState("Team A")
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const route = useRoute()
  const { group } = route.params as RouteParams
  const navigation = useNavigation()

  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('New person', 'Enter the name of the person to add.')
    }

    const newPlayer = {
      name: newPlayerName,
      team
    }

    try {
      await playerAddByGroup(newPlayer, group)

      newPlayerNameInputRef.current?.blur()

      setNewPlayerName("")
      fetchPlayersByTeam()

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Person', error.message)
      } else {
        console.log(error)
        Alert.alert('New Person', 'Unable to add.')
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()

    } catch (error) {
      console.log(error)
      Alert.alert('Remove Person', 'Unable to remove this person.')
    }
  }

  async function removeGroup() {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
      
    } catch (error) {
      console.log(error)
      Alert.alert('Remove Group', 'Unable to remove this group.')
    }
  }

  async function handleRemoveGroup() {
    Alert.alert(
      'Remove',
      'Do you want to remove the team?',
      [
        { text: 'No', style: "cancel" },
        { text: 'Yes', onPress: () => removeGroup() }
      ]
    )
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)

      const playerByTeam = await playerGetByGroupAndTeam(group, team)
      setPlayers(playerByTeam)

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Person', error.message)
      } else {
        console.log(error)
        Alert.alert('People', 'Unable to load the people from the selected team.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton /> 

      <Highlight 
        title={group}
        subtitle="Add the guys and separate the teams"
      />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Participant name"
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon 
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={["Team A", "Team B"]}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <Filter
              title={item}
              isActive={team === item}
              onPress={() => setTeam(item)}
              activeOpacity={0.6}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      {
        isLoading ? <Loading /> :

        <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
          <PlayerCard
          name={item.name}
          onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        contentContainerStyle={players.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty
          message="There are no people on this team."
          />
        }
        />
      }

      <Button
        title="Remove team"
        onPress={handleRemoveGroup}
        type="SECONDARY"
      />

    </Container>
  )
}