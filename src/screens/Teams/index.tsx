import { useState } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { useTheme } from "styled-components/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";

type RouteParams = {
  group: string
}

export function Teams() {
  const [team, setTeam] = useState("Team A")
  const [players, setPlayers] = useState<string[]>([])

  const route = useRoute()
  const { group } = route.params as RouteParams

  const { COLORS } = useTheme()

  return (
    <Container>
      <Header showBackButton /> 

      <Highlight 
        title={group}
        subtitle="Add the guys and separate the teams"
      />

      <Form>
        <Input
          placeholder="Participant name"
          placeholderTextColor={COLORS.GRAY_300}
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add"
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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <PlayerCard
            name={item}
          />
        )}
        contentContainerStyle={players.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty
            message="There are no people on this team."
          />
        }
      />

      <Button
        title="Remove team"
        type="SECONDARY"
      />

    </Container>
  )
}