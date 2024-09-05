import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { StudentCard } from "@components/StudentCard";
import { ListEmpty } from "@components/ListEmpty";
import { ButtonAdd } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form, HeaderList, Totality } from "./styles";

import { Alert, FlatList, Keyboard, TextInput } from "react-native";

import { useState, useEffect, useRef } from "react";

import { useRoute, useNavigation } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import { StudentAddByGroup } from "@libs/firebase/db/students/studentAddByGroup";
import { getStudentsByGroup } from "@libs/firebase/db/students/studentsGetByGroup";
import { StudentGetByGroup } from "@libs/firebase/db/students/studentGetByGroup";
import { StudentStorageDTO } from "@utils/StudentStorageDTO";

import { studentRemoveByGroup } from "@libs/firebase/db/students/studentRemoveByGroup";
import { groupRemoveByName } from "@libs/firebase/db/groups/removeGroup";
import { Loading } from "@components/Loading";

import app from '@libs/firebase/config'

import { SchoolNavigatorRoutesProps } from "@routes/Routes_School/app.routes";
import { getFirestore, query, getDocs, where, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function Students() {

    const db = getFirestore(app)
    const auth = getAuth(app)

    const [isLoading, setIsLoading] = useState(true);
    const [selectTeam, setSelectTeam] = useState('Todos');
    const [students, setStudents] = useState<StudentStorageDTO[]>([]);
    const [newStudent, setNewStudent] = useState('');
    const [groupCode, setGroupCode] = useState('');
    const navigation = useNavigation<SchoolNavigatorRoutesProps>();

    type RouteParams = {
        group: string;
    }

    const route = useRoute(); // ele pega as informações da rota
    const { group } = route.params as { group: string }; // ele pega o parametro que foi passado na rota
    console.log(group);
    

    const newStudentNameInputRef = useRef<TextInput>(null);

    async function HandleAddStudent() {
        if (newStudent.trim().length === 0) {
            return Alert.alert('Novo Aluno', 'Informe o nome do aluno para adicionar.')
        }

        const addNewStudent = {
            name: newStudent,
            group,
        }

        try {

            await StudentAddByGroup(addNewStudent, group);

            newStudentNameInputRef.current?.blur(); // ele tira o foco do input

            Keyboard.dismiss(); // ele fecha o teclado

            setNewStudent('');

            fetchStudentsByTeam();

        } catch (error) {
            if (error instanceof AppError) {
                return Alert.alert('Novo Aluno', error.message)
            } else {
                console.log(error);
                Alert.alert('Novo Aluno', 'Não foi possível adicionar o aluno.')
            }
        }
    }

    async function fetchStudentsByTeam() {
        try {
            setIsLoading(true);

            const studentsByGroup = await getStudentsByGroup(group);

            setStudents(studentsByGroup);
        } catch (error) {
            console.log(error);
            Alert.alert('Alunos', 'Não foi possível carregar os alunos.')
        } finally {
            setIsLoading(false);
        }

    };

    async function handleRemoveStudent(studentName: string) {

        try {

            await studentRemoveByGroup(studentName, group);
            fetchStudentsByTeam();
        } catch (error) {
            console.log(error);
            Alert.alert('Remover Aluno', 'Não foi possível remover o aluno.')
        }
    }

    async function validationRemove(studentName: string) {
        Alert.alert(
            'Remover Aluno',
            `Deseja realmente remover o Aluno ${studentName}?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Remover', onPress: () => handleRemoveStudent(studentName) }
            ]
        )
    }

    async function groupRemove() {
        try {

            await groupRemoveByName(group);
            navigation.navigate('Groups');

        } catch (error) {
            console.log(error);
            Alert.alert('Remover Turma', 'Não foi possível remover a turma.')
        }

    }

    async function handleGroupRemove() {

        Alert.alert(
            'Remover Turma',
            'Deseja realmente remover a turma?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Remover', onPress: () => groupRemove() }
            ]
        )

    }

    async function fetchGroupCode() {
        try {
            const idSchool = auth.currentUser?.uid;
            if (!idSchool) {
                throw new Error('Usuário não autenticado.');
            }

            console.log('ID da Escola:', idSchool);

            // Busca o documento do grupo pelo nome do grupo
            const q = query(collection(db, 'groups'), where('name', '==', group));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const groupDoc = querySnapshot.docs[0];
                const groupData = groupDoc.data();
                console.log('Dados do Grupo:', groupData);

                if (groupData.idSchool === idSchool) {
                    setGroupCode(groupData.codigo);
                } else {
                    throw new Error('Usuário não autorizado a acessar este grupo.');
                }
            } else {
                throw new Error('Grupo não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao recuperar o código do grupo: ', error);
            Alert.alert('Erro');
        }
    }

    useEffect(() => {
        fetchStudentsByTeam();
        fetchGroupCode();
    }, [selectTeam]);

    return (
        <Container>

            <Header showBackButton />

            <Highlight
                title={group}
                subTitle={`Código da turma: ${groupCode}`}
            />

            <Form>
                <Input
                    placeholder="Nome completo do aluno"
                    autoCorrect={false}
                    onChangeText={setNewStudent}
                    value={newStudent}
                    inputRef={newStudentNameInputRef}
                    onSubmitEditing={() => HandleAddStudent()} // ele chama a função quando aperta o botão de enviar
                    returnKeyType="done" // ele muda o botão de enviar para o botão de done
                />

                <ButtonIcon
                    icon="add"
                    onPress={() => HandleAddStudent()}
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

            {isLoading ? <Loading /> :

                <FlatList
                    data={students}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <StudentCard
                            name={item.name}
                            onRemove={() => validationRemove(item.name)}
                        />
                    )}
                    ListEmptyComponent={
                        <ListEmpty message="Não há alunos nessa turma."
                        />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        { paddingBottom: 100 }, students.length === 0 && { flex: 1 }
                    ]}
                />
            }

            <ButtonAdd
                title="Remover Turma"
                type="secondary"
                onPress={handleGroupRemove}
            />
        </Container>
    );
}