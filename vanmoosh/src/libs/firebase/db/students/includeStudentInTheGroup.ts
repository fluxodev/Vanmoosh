import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, updateDoc, arrayUnion, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import app from '../../config'

const db = getFirestore(app);
const auth = getAuth(app);

// Função para adicionar aluno ao grupo
export const addStudentToGroup = async (groupCode: string, alunoNome: string): Promise<void> => {
  try {
    // Obter usuário atual
    const currentUser = auth.currentUser;

    console.log(currentUser?.uid);
    

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
      console.log(`Aluno ${alunoNome} já está no grupo ${groupCode}`);
      return;
    }

    // Adicionar aluno ao grupo
    await updateDoc(groupDocRef, {
      alunos: arrayUnion(alunoNome)
    });
    console.log(`Aluno ${alunoNome} adicionado ao grupo ${groupCode}`);
  } catch (error) {
    console.error('Erro ao adicionar aluno ao grupo:', error);
  }
};
