const fs = require('node:fs');
const path = require('node:path');

const info = {
  id: 'proof_write_text',
  name: 'Proof Write Text',
  description: 'Writes a fixed proof text file on plugin initialization.',
};

async function init() {
  const outputPath = path.join(process.cwd(), 'data', 'plugin-proof.txt');
  const content = 'SillyTavern plugin proof: init executed and wrote this file.\n';
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`Proof plugin wrote file to ${outputPath}`);
}

module.exports = {
  info,
  init,
};