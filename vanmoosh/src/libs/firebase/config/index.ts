import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRhWwKoymhh9ElvmsqFOgc5H77V2chjA0",
  authDomain: "vanmoosh-app.firebaseapp.com",
  databaseURL: "https://vanmoosh-app-default-rtdb.firebaseio.com",
  projectId: "vanmoosh-app",
  storageBucket: "vanmoosh-app.appspot.com",
  messagingSenderId: "966117312594",
  appId: "1:966117312594:web:03055920aac4091d6c778b"
};

export default initializeApp(firebaseConfig);