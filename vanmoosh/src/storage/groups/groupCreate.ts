import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from './storageConfig';
import { getAllGroups } from './groupsGetAll';
import { AppError } from '@utils/AppError';

export async function createGroup(newGroup: string) {
    try {
        const storedGroups = await getAllGroups();

        const groupAlreadyExists = storedGroups.includes(newGroup);

        if (groupAlreadyExists) {
            throw new AppError('Essa turma já existe.'); //lança erro com base na classe criada
        }

        const storage = JSON.stringify([...storedGroups, newGroup]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storage)

    } catch (error) {

        throw error;

    }
}