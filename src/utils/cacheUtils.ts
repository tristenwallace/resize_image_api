import fs from 'fs';
import path from 'path';

// Define the directory where cached images are stored
const cacheDir = path.resolve(__dirname, '../../public/cache');

/**
 * Retrieves the file path of a cached image based on its cache key.
 *
 * This function constructs the expected file path for a cached image using the provided cache key.
 * It then checks if the file exists in the cache directory. If the file exists, the path to the
 * cached image is returned; otherwise, null is returned to indicate the image is not in the cache.
 *
 * @param {string} cacheKey - The unique identifier for the cached image.
 * @returns {string | null} The file path to the cached image if it exists, otherwise null.
 */
export function getCachedImagePath(cacheKey: string): string | null {
  // Construct the file path for the cached image
  const cachedImagePath = path.join(cacheDir, `${cacheKey}.jpg`);

  // Check for the existence of the cached image and return its path if found
  return fs.existsSync(cachedImagePath) ? cachedImagePath : null;
}
