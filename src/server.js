import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send({
    message: 'server is hot!'
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))

export default app
