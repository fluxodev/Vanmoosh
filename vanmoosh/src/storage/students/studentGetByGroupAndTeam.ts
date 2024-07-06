import { StudentGetByGroup } from "./studentsGetByGroup";

export async function StudentGetByGroupAndTeam(group: string, team: string) {
    try {

        const storage = await StudentGetByGroup(group);

        const students = storage.filter((student) => student.group === group);

        return students;

    }  catch (error) {
        throw error;
    }
}