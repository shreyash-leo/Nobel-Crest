const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = './public/images';
const outputDir = './public/images/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = fs.readdirSync(imageDir).filter(file =>
  /\.(jpg|jpeg|png)$/i.test(file)
);

images.forEach(async (image) => {
  const inputPath = path.join(imageDir, image);

  const outputPath = path.join(
    outputDir,
    image.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  );

  await sharp(inputPath)
    .webp({ quality: 85 })
    .resize(1920)
    .toFile(outputPath);

  console.log(`Optimized: ${image}`);
});