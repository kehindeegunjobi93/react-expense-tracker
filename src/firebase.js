import firebase from 'firebase';
import uuid from 'uuid/v4';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBldou07e6vzAM-jaGbdJdnQI4JJnXbr7Y",
    authDomain: "todo-project-f3c0b.firebaseapp.com",
    databaseURL: "https://todo-project-f3c0b.firebaseio.com",
    projectId: "todo-project-f3c0b",
    storageBucket: "todo-project-f3c0b.appspot.com",
    messagingSenderId: "57209484377"
  };
  firebase.initializeApp(config);

  const database = firebase.database()

  export const addTaskToFirebase = (task) => {
      const id = uuid()
      database.ref('/${id}').set({
          task, id
      })
  }

  export const removeTaskFromFirebase = (id) => {
      database.ref('/${id}').remove()
  }

  export default database