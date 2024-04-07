import fs from 'fs';
import path from 'path';

const cacheDir = path.resolve(__dirname, '../../public/cache'); // Adjust based on your directory structure

export function getCachedImagePath(cacheKey: string): string | null {
  const cachedImagePath = path.join(cacheDir, `${cacheKey}.jpg`);
  if (fs.existsSync(cachedImagePath)) {
    return cachedImagePath;
  }
  return null;
}
