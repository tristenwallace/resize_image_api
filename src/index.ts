import express from 'express';
import routes from './routes/index';

export const app = express();
const PORT = process.env.PORT ?? 3000;

app.use('/', routes);

export const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
