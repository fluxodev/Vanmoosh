import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';

import { Container } from './style';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { ButtonAdd } from '@components/Button';
import { Loading } from '@components/Loading';

import { getAllGroups } from '@storage/groups/groupsGetAll';


export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('NewGroup');
  }

  async function fetchGroups() {
    try {

      setIsLoading(true);

      const data = await getAllGroups();

      setGroups(data);

      

    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Erro ao buscar turmas!', [{ text: 'OK' }]);
    } finally { //finally é uma função que é executada independente se o try ou catch der certo
      setIsLoading(false);
    }	
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('Students', { group });
  }

  useFocusEffect(useCallback(() => { //use callback é uma função que é executada toda vez que a tela é focada
    fetchGroups(); //focus effect é um hook que é executado toda vez que a tela é focada
  }, []));

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Turmas"
        subTitle="Aqui você pode ver as turmas que você possui no colégio."
      />


      {isLoading ? <Loading /> :
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={
            () => <ListEmpty message="Nenhuma turma cadastrada!" />
          }
        />
      }

      <ButtonAdd
        title="Adicionar Turma"
        type='primary'
        onPress={handleNewGroup}
      />

    </Container>
  );
}
