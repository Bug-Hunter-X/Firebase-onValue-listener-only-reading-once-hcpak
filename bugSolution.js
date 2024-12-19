import { ref, onValue } from 'firebase/database';

const database = // Your Firebase database instance
const query = ref(database, 'path/to/data');

// Correct usage of `onValue` for continuous data listening
onValue(query, (snapshot) => {
  const data = snapshot.val();
  console.log('Data:', data); // Logs data every time it changes
}, (error) => {
    console.error(error);
});