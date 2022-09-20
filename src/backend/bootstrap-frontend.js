import fs from 'node:fs/promises';
import path from 'node:path';

export default async function setPort(ws_port) {
  const filename = await getFilename();
  const result = await replacePort(filename, ws_port);
  return await writeFile(filename, result);
}

async function getFilename() {
  try {
    const files = await fs.readdir(path.join('./', 'dist/assets'));
    for (const file of files) {
      if(/^index\..+\.js$/.test(file)) {
        return path.join('./', 'dist/assets', file);
      }
    }
  } catch (err) {
    console.error(err);
  }
  return;
}

async function replacePort(filename, ws_port) {
  try {
    const file = await fs.readFile(filename, 'utf8');
    const result = file.replace(/WS_PORT/g, ws_port);
    return result;
  } catch (err) {
    console.error(err);
  }
  return;
}

async function writeFile(filename, data) {
  try {
    await fs.writeFile(filename, data, 'utf8');
  } catch (err) {
    console.error(err);
  }
  return;
}
