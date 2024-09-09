import { 
  Accuracy, 
  hasStartedLocationUpdatesAsync, 
  startLocationUpdatesAsync,
  stopLocationUpdatesAsync
} from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { removeStorageLocations, saveStorageLocation } from '@storage/location/locationStorage';

export const BACKGROUND_TASK_NAME = 'location-tracking';

// Definição da tarefa de fundo
TaskManager.defineTask(BACKGROUND_TASK_NAME, async ({ data, error }: any) => {
  try {
    console.log('Tarefa em segundo plano chamada');

    if (error) {
      console.error('Erro na tarefa de fundo:', error);
      return; // Adicionando return para evitar continuar caso haja erro
    }

    if (data) {
      const { locations } = data;

      if (locations && locations.length > 0) {
        const { coords, timestamp } = locations[0];

        const currentLocation = {
          latitude: coords.latitude,
          longitude: coords.longitude,
          timestamp,
        };

        console.log('Localização obtida:', currentLocation);
        await saveStorageLocation(currentLocation); // Salvar a localização
      } else {
        console.log('Nenhuma localização encontrada.');
      }
    }
  } catch (error) {
    console.error('Erro ao processar a tarefa de fundo:', error);
  }
});

export async function startLocationTask() {
  try {
    console.log('Verificando se a tarefa de localização já foi iniciada...');
    const hasStarted = await hasStartedLocationUpdatesAsync(BACKGROUND_TASK_NAME);

    console.log('Tarefa de localização registrada:', hasStarted);

    if (hasStarted) {
      console.log('Parando a tarefa existente antes de reiniciar...');
      await stopLocationTask(); // Se já começou, parar a tarefa antiga antes de iniciar uma nova
    }

    console.log('Iniciando nova tarefa de localização...');
    await startLocationUpdatesAsync(BACKGROUND_TASK_NAME, {
      accuracy: Accuracy.Highest,
      distanceInterval: 1, // 1 metro de diferença para disparar uma nova atualização
      timeInterval: 1000, // Atualizações a cada 1 segundo
      showsBackgroundLocationIndicator: true, // Indica no iOS que o app está utilizando a localização em segundo plano
    });

    console.log('Tarefa de localização iniciada com sucesso!');
  } catch (error) {
    console.log('Erro ao iniciar a tarefa de localização:', error);
  }
}

// Função para parar a tarefa de localização
export async function stopLocationTask() {
  try {
    console.log('Verificando se a tarefa de localização já foi iniciada para parar...');
    const hasStarted = await hasStartedLocationUpdatesAsync(BACKGROUND_TASK_NAME);

    if (hasStarted) {
      console.log('Parando a tarefa de localização...');
      await stopLocationUpdatesAsync(BACKGROUND_TASK_NAME);
      await removeStorageLocations(); // Limpando os dados de localização do armazenamento
      console.log('Tarefa de localização parada e dados removidos.');
    } else {
      console.log('Nenhuma tarefa de localização ativa para parar.');
    }
  } catch (error) {
    console.log('Erro ao parar a tarefa de localização:', error);
  }
}
