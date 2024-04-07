import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Test Jasmine Setup
const myFunc = (num: number): number => {
  return num * num;
};
export default myFunc;
