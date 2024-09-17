import fs from 'fs'
import path from 'path'

let inputPath = process.argv[2]

if (!inputPath) {
  inputPath = process.cwd()
} else {
  inputPath = path.resolve(inputPath)
}

try {
  const count = fs.readdirSync(inputPath).length

  console.log(count)
} catch (error) {
  console.error(`Error reading directory: ${error.message}`)
}