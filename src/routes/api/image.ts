import { resizeImage } from '../../utils/imageProcessor';
import { asyncHandler } from '../../utils/asyncHandler';
import path from 'path';
import express from 'express';
const image = express.Router();

image.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const { width, height } = req.query;

      // Ensure width and height are provided and are integers
      if (typeof width !== 'string' || typeof height !== 'string') {
        res.status(400).send('Width and height must be provided');
        return;
      }

      const widthInt = parseInt(width, 10);
      const heightInt = parseInt(height, 10);

      // Validate parsed integers
      if (isNaN(widthInt) || isNaN(heightInt)) {
        res.status(400).send('Width and height must be valid integers');
        return;
      }

      // Placeholder for input and output paths
      const inputPath = path.join(
        __dirname,
        '..',
        '..',
        'assets',
        'encenadaport.jpg',
      );
      const outputPath = path.join(
        __dirname,
        '..',
        '..',
        'assets',
        'resized',
        'encenadaport_resized.jpg',
      );

      await resizeImage(inputPath, widthInt, heightInt, outputPath);

      res.sendFile(outputPath);
    } catch (e) {
      console.error(e);
      res.status(500).send('Error processing image');
    }
  }),
);

export default image;
