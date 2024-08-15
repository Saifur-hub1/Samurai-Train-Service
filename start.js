import { register } from 'node:module';
import { pathToFileURL, fileURLToPath } from 'node:url';
import fs from 'fs';
import path from 'path';

// Register ts-node with ESM
register('ts-node/esm', pathToFileURL('./'));

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

fs.readdir(srcDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.ts')) {
      import(pathToFileURL(path.join(srcDir, file)).href)
        .then(module => {
          console.log(`Imported ${file}`);
        })
        .catch(error => {
          console.error(`Error importing ${file}:`, error);
        });
    }
  });
});
