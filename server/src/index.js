import express from 'express';
import morgan from 'morgan';

import mockData from './mockData';

const app = express();
const port = 3001;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/workouts', (req, res) => {
  res.json(mockData.workouts);
});

app.get('/exercises', (req, res) => {
  res.json(mockData.exercises);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
