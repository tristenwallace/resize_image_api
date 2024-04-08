import { resizeImage } from '../../utils/imageProcessor';
import { asyncHandler } from '../../utils/asyncHandler';
import { getCachedImagePath } from '../../utils/cacheUtils';
import fs from 'fs';
import path from 'path';
import express from 'express';

// Initialize a new router for image-related endpoints
export const image = express.Router();

// Define a GET endpoint for image processing
image.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      // Destructure and validate query parameters for image processing
      const { imageName, width, height } = req.query;

      // Validate presence and type of width and height parameters
      if (typeof width !== 'string' || typeof height !== 'string') {
        res.status(400).send('Width and height must be provided');
        return;
      }

      // Validate imageName parameter
      if (typeof imageName !== 'string' || imageName.trim() === '') {
        res.status(400).send('imageName must be a non-empty string');
        return;
      }

      // Convert width and height to integers and validate
      const widthInt = parseInt(width, 10);
      const heightInt = parseInt(height, 10);
      if (isNaN(widthInt) || isNaN(heightInt)) {
        res.status(400).send('Width and height must be valid integers');
        return;
      }

      // Construct cache key and check for cached image
      const cacheKey = `${String(imageName)}-${widthInt}x${heightInt}`;
      const cachedImagePath = getCachedImagePath(cacheKey);
      if (cachedImagePath !== null) {
        res.sendFile(cachedImagePath);
        return;
      }

      // Resolve paths for input and output images
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

      // Check for existence of input image
      if (!fs.existsSync(inputPath)) {
        res.status(404).send('Original image not found');
        return;
      }

      // Process and save the resized image
      await resizeImage(inputPath, widthInt, heightInt, outputPath);

      // Serve the resized image
      res.sendFile(outputPath);
    } catch (error) {
      // Handle any errors during processing
      console.error(error);
      res.status(500).send('Error processing image');
    }
  }),
);
