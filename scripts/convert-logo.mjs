import sharp from '../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js';

const [, , input, output] = process.argv;
if (!input || !output) {
  console.error('usage: node convert-logo.mjs <input.webp> <output.png>');
  process.exit(1);
}

await sharp(input)
  .png()
  .toFile(output);

console.log(`${input} -> ${output}`);
