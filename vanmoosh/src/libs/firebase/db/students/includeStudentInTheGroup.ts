import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, updateDoc, arrayUnion, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import app from '../../config'

const db = getFirestore(app);
const auth = getAuth(app);

// Função para adicionar aluno ao grupo
export const addStudentToGroup = async (groupCode: string) => {
  try {
    // Obter usuário atual
    const currentUser = auth.currentUser;

    console.log(currentUser?.uid);
    

    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    // Buscar aluno na coleção 'alunos' pelo ResponsibleId
    const alunosQuery = query(collection(db, 'alunos'), where('responsibleId', '==', currentUser.uid));
    const alunosSnapshot = await getDocs(alunosQuery);



    if (alunosSnapshot.empty) {
      throw new Error('Nenhum aluno encontrado para o usuário atual');
    }

    // Guardar o nome do aluno
    const aluno = alunosSnapshot.docs[0].data();
    const alunoNome = aluno.nome;

    console.log('Aluno encontrado:', alunoNome);

    // Buscar grupo na coleção 'groups' pelo ID do documento
    const groupDocRef = doc(db, 'groups', groupCode);
    const groupDoc = await getDoc(groupDocRef);

    if (!groupDoc.exists()) {
      throw new Error('Nenhum grupo encontrado com o código fornecido');
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
