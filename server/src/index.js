import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3001;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
