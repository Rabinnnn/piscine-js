import http from 'http'
import { promises as fs } from 'fs'
import path from 'path'

const port = 5000

const server = http.createServer(async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    if (req.method === 'GET') {
      const guest = req.url.slice(1) 
      const filePath = path.join('./guests', `${guest}.json`)

      try {
        const fileData = await fs.readFile(filePath, 'utf8')
        res.writeHead(200)
        res.end(fileData)
      } catch (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404)
          res.end(JSON.stringify({ error: 'guest not found' }))
        } else {
          res.writeHead(500)
          res.end(JSON.stringify({ error: 'server failed' }))
        }
      }
    } else {
      res.writeHead(404)
      res.end(JSON.stringify({ error: 'guest not found' }))
    }
  } catch (err) {
    res.writeHead(500)
    res.end(JSON.stringify({ error: 'server failed' }))
  }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})