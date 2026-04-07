import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = 'public/team'
const outputDir = 'public/team-opt'

fs.mkdirSync(outputDir, { recursive: true })

const files = fs.readdirSync(inputDir).filter(f => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f))

for (const file of files) {
  const input = path.join(inputDir, file)
  const outName = file.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp')
  const output = path.join(outputDir, outName)

  await sharp(input)
    .resize(300, 300, { fit: 'cover', position: 'top' })
    .webp({ quality: 80 })
    .toFile(output)

  const stats = fs.statSync(output)
  console.log(`${file} -> ${outName} (${(stats.size / 1024).toFixed(1)}KB)`)
}

console.log('\nDone! All images compressed to 300x300 WebP.')
