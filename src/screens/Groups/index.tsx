import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Team 1',  'Team 2'])

  return (
    <Container>
      <Header />

      <Highlight 
        title="Team"
        subtitle="Play with your team"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item}
            activeOpacity={0.7}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty
            message="How about creating a new team?"
          />
        )}
      />

      <Button
        title="Create new team"
        activeOpacity={0.7}
      />
    </Container>
  )
}