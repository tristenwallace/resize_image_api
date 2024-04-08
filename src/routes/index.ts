import express from 'express';
import { image } from './api/image';
export const routes = express.Router();

// Root route definition
routes.get('/', (req, res) => {
  // Sends a simple response for the root route
  res.send('main api route');
});

// Image processing route
// All requests to '/image' are forwarded to the image router
routes.use('/image', image);
