import { getFirestore, updateDoc, arrayUnion, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import app from '../../config'

const db = getFirestore(app);
const auth = getAuth(app);

// Função para adicionar aluno ao grupo
export const addStudentToGroup = async (groupCode: string, alunoNome: string): Promise<void> => {
  try {
    // Obter usuário atual
    const currentUser = auth.currentUser;   

    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Buscar grupo na coleção 'groups' pelo ID do documento
    const groupDocRef = doc(db, 'groups', groupCode);
    const groupDoc = await getDoc(groupDocRef);

    if (!groupDoc.exists()) {
      throw new Error('Nenhum grupo encontrado com o código fornecido');
    }

    const groupData = groupDoc.data();
    if (groupData.alunos && groupData.alunos.includes(alunoNome)) {
      return;
    }

    // Adicionar aluno ao grupo
    await updateDoc(groupDocRef, {
      alunos: arrayUnion(alunoNome)
    });

  } catch (error) {
    console.error('Erro ao adicionar aluno ao grupo:', error);
  }
};
