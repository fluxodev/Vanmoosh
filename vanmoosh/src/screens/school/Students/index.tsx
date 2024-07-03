import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Form, HeaderList, Totality } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { StudentCard } from "@components/StudentCard";
import { ListEmpty } from "@components/ListEmpty";
import { ButtonAdd } from "@components/Button";
import { useRoute } from "@react-navigation/native";

export default function Students() {

    const [selectTeam, setSelectTeam] = useState('Todos');
    const [students, setStudents] = useState([]);

    type RouteParams = {
        group: string;
    }

    const route = useRoute(); // ele pega as informações da rota
    const { group } = route.params as RouteParams; // ele pega o parametro que foi passado na rota

    return (
        <Container>

            <Header showBackButton />

            <Highlight
                title={group}
                subTitle="Gerencie os alunos desta turma."
            />

            <Form>
                <Input
                    placeholder="Nome do aluno"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                />
            </Form>
            <HeaderList>
            <FlatList
                data={['Todos']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter
                        title={item}
                        isActive={item === selectTeam}
                        onPress={() => setSelectTeam(item)}
                    />
                )}
                horizontal
                
            /> 
            <Totality>
                {students.length} Alunos
            </Totality>

            </HeaderList>

            <FlatList

                data={students}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <StudentCard
                        name={item}
                        onRemove={() => console.log('Remover aluno')}
                    />
                )}
                ListEmptyComponent={
                <ListEmpty message="Não há alunos nessa turma." 
                />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100}, students.length === 0 && {flex: 1}
                ]}
            />


            <ButtonAdd 
            title="Remover Turma"
            type="secondary"
            />
        </Container>
    );
}