const query = ref(database, 'path/to/data');

// Incorrect usage of `onValue` that only reads once
onValue(query, (snapshot) => {
  const data = snapshot.val();
  console.log(data); // Only logs data once
});