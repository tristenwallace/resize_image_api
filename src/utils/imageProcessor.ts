import sharp from 'sharp';

/**
 * Resizes an image to the specified width and height.
 *
 * This function uses the `sharp` library to read an image from the given input path,
 * resize it to the specified dimensions, and then write the resized image to the output path.
 * The resizing process is asynchronous and returns a promise that resolves once the
 * image has been successfully written to the output path.
 *
 * @param {string} inputPath - The file system path to the input image.
 * @param {number} width - The desired width of the resized image.
 * @param {number} height - The desired height of the resized image.
 * @param {string} outputPath - The file system path where the resized image will be saved.
 * @returns {Promise<void>} A promise that resolves once the image has been resized and saved.
 */
export const resizeImage = async (
  inputPath: string,
  width: number,
  height: number,
  outputPath: string,
): Promise<void> => {
  await sharp(inputPath)
    .resize(width, height) // Set the desired width and height for the resize operation.
    .toFile(outputPath); // Write the resized image to the specified output path.
};
