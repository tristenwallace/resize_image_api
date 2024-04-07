import { resizeImage } from './imageProcessor';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

describe('Image Processor', () => {
  const inputImagePath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'test_assets',
    'encenadaport.jpg',
  );
  const outputImagePath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'test_assets',
    'encenadaport_resized.jpg',
  );

  beforeEach(() => {
    // Ensure the output image is removed before each test if it exists
    if (fs.existsSync(outputImagePath)) {
      fs.unlinkSync(outputImagePath);
    }
  });

  afterEach(() => {
    // Cleanup: Remove the resized image after each test
    if (fs.existsSync(outputImagePath)) {
      fs.unlinkSync(outputImagePath);
    }
  });

  it('should resize the image to the specified dimensions', async () => {
    const width = 300;
    const height = 300;

    await resizeImage(inputImagePath, width, height, outputImagePath);

    // Verify the output image exists
    expect(fs.existsSync(outputImagePath)).toBeTrue();

    // Use sharp to read the resized image and verify its dimensions
    const resizedImage = await sharp(outputImagePath).metadata();

    expect(resizedImage.width).toEqual(width);
    expect(resizedImage.height).toEqual(height);
  });
});
