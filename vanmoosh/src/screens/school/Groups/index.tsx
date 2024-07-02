import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Container } from './style';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { ButtonAdd } from '@components/Button';
import { useState } from 'react';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([
    ]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('NewGroup');
  }
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Turmas"
        subTitle="Aqui você pode ver as turmas que você possui no colégio."
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }} 
        ListEmptyComponent={
          () => <ListEmpty message="Nenhuma turma cadastrada!"/>
        }
      />

      <ButtonAdd
        title="Adicionar Turma"
        type='primary'
        onPress={handleNewGroup}
        />

    </Container>
  );
}
