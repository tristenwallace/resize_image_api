import express from 'express';
const image = express.Router();

image.get('/', (req, res) => {
  // Image processing logic will go here
  res.send('Image endpoint');
});

export default image;
