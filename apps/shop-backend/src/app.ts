import express, { Application } from 'express';
const app: Application = express();

app.get('/', (req, res) => res.status(200).send('It works!'));

export default app;
