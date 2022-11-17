import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Mongo successfully connected');

    const app = express();
    const port = 3005;
    app.listen(port, () => {
      console.log(`🛩️  Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Error on mongo connection'));


