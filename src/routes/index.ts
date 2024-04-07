import express from 'express';
const routes = express();

routes.get('/', (req, res) => {
  res.send('main api route');
});

// Placeholder for the image processing endpoint
routes.get('/image', (req, res) => {
    // Image processing logic will go here
    res.send('Image endpoint');
  });

export default routes;
