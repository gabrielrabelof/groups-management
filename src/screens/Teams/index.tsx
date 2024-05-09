import { useState } from "react";
import { FlatList } from "react-native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { useTheme } from "styled-components/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { PlayerCard } from "@components/PlayerCard";

export function Teams() {
  const [team, setTeam] = useState("Team A")
  const [players, setPlayers] = useState<string[]>(["Player 1", "Player 2"])

  const { COLORS } = useTheme()

  return (
    <Container>
      <Header showBackButton /> 

      <Highlight 
        title="Team Name"
        subtitle="Add the guys and separate the teams"
      />

      <Form>
        <Input
          placeholder="Participant name"
          placeholderTextColor={COLORS.GRAY_300}
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
          2
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
      />

      <Button
        title="Remove team"
        type="SECONDARY"
      />

    </Container>
  )
}