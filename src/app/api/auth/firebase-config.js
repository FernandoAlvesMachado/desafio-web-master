
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAitBlJOWuWC-z0W65yCo5zY7kQFqUkwRQ",
    authDomain: "web-test-dev-dfea5.firebaseapp.com",
    databaseURL: "https://web-test-dev-dfea5-default-rtdb.firebaseio.com",
    projectId: "web-test-dev-dfea5",
    storageBucket: "web-test-dev-dfea5.appspot.com",
    messagingSenderId: "1076211341796",
    appId: "1:1076211341796:web:01f796e14e1724fbf90ff1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
