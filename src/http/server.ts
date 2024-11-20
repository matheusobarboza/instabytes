import express from 'express'
import { env } from '../env.js'
import posts from '../routes/posts.js'

const app = express()
app.use(express.json())

app.use(posts)

app.listen(env.PORT, () => {
  console.log('Server is running on port 3000')
})