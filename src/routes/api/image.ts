import { resizeImage } from '../../utils/imageProcessor';
import { asyncHandler } from '../../utils/asyncHandler';
import { getCachedImagePath } from '../../utils/cacheUtils';
import fs from 'fs';
import path from 'path';
import express from 'express';
const image = express.Router();

image.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const { imageName, width, height } = req.query;

      // Ensure width and height are provided and are integers
      if (typeof width !== 'string' || typeof height !== 'string') {
        res.status(400).send('Width and height must be provided');
        return;
      }

      // Ensure image name is valid
      if (typeof imageName !== 'string' || imageName.trim() === '') {
        res.status(400).send('imageName must be a non-empty string');
        return;
      }

      const widthInt = parseInt(width, 10);
      const heightInt = parseInt(height, 10);

      // Validate parsed integers
      if (isNaN(widthInt) || isNaN(heightInt)) {
        res.status(400).send('Width and height must be valid integers');
        return;
      }

      // Attempt to retrieve cached image
      const cacheKey = `${String(imageName)}-${widthInt}x${heightInt}`;
      const cachedImagePath = getCachedImagePath(cacheKey);

      if (cachedImagePath !== null) {
        res.sendFile(cachedImagePath);
        return;
      }

      const inputPath = path.resolve(
        __dirname,
        '../../../public/assets',
        `${String(imageName)}.jpg`,
      );
      const outputPath = path.resolve(
        __dirname,
        '../../../public/cache',
        `${cacheKey}.jpg`,
      );

      // Ensure the original image exists
      if (!fs.existsSync(inputPath)) {
        res.status(404).send('Original image not found');
        return;
      }

      // Process and save the resized image
      await resizeImage(inputPath, widthInt, heightInt, outputPath);

      res.sendFile(outputPath);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error processing image');
    }
  }),
);

export default image;
