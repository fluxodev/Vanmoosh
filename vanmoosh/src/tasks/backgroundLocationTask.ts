import { saveStorageLocation } from '@storage/Location/StorageLocation';
import { Accuracy, hasStartedLocationUpdatesAsync, startLocationUpdatesAsync, stopLocationUpdatesAsync } from 'expo-location';
import * as taskM from 'expo-task-manager';

export const TASK_NAME_BACKGROUND = 'location-tracking';

taskM.defineTask(TASK_NAME_BACKGROUND, async ({data, error}: any) => {
    try {
        if(error) {
            throw error
        }

        if(data) {

       const {coords, timestamp } = data.locations[0];

       const LocationCurrent = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        timestamp: timestamp
       }

       await saveStorageLocation(LocationCurrent)
    }
    } catch (error) {
        console.error(error);
        stopLocTask()
        
    }

})

export async function startLocTask(){
    try {

        console.log('Cheguei aqui');
        

        const hasStarted = await hasStartedLocationUpdatesAsync(TASK_NAME_BACKGROUND);

        if(hasStarted) {
            await stopLocTask();
         }

        await startLocationUpdatesAsync(TASK_NAME_BACKGROUND, {
            accuracy: Accuracy.Highest,
            distanceInterval: 1,
            timeInterval: 100,
        })
    } catch (error) {
        console.error(error);
        
    }
}

export async function stopLocTask(){
    try {
        const hasStarted = await hasStartedLocationUpdatesAsync(TASK_NAME_BACKGROUND);

        if(hasStarted) {
           await stopLocationUpdatesAsync(TASK_NAME_BACKGROUND);
        }



    } catch (error) {
        
    }
}