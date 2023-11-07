const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Connect to the MongoDB database
MongoClient.connect('mongodb://127.0.0.1:27017/puvan', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db('puvan');
  const booksCollection = db.collection('muthu');

  // Define an API endpoint for your query
  app.get('/muthu', (req, res) => {
    booksCollection.find({
      category: 'Science Fiction',
      year: { $gt: 2000 }
    }).toArray((err, result) => {
      if (err) throw err;

      res.json(result);
    });
  });
  

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
