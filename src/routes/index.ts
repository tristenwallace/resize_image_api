import express from 'express';
import image from './api/image';
const routes = express();

routes.get('/', (req, res) => {
  res.send('main api route');
});

routes.use('/image', image);

export default routes;
