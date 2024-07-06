import AsyncStorage from "@react-native-async-storage/async-storage";

import { STUDENT_COLLECTION, GROUP_COLLECTION } from "@storage/groups/storageConfig";

import { getAllGroups } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {

    try {

        const storedGroups = await getAllGroups();

        const groups = storedGroups.filter(group => group !== groupDeleted);

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));

        await AsyncStorage.removeItem(`${STUDENT_COLLECTION}-${groupDeleted}`);

        

    } catch (error) {
        throw (error)
    }

}