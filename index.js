const express = require('express')
const app = express()
const port = 5000
 
const categories = require('./Data/categories.json');
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/categories',(req, res)=>{
      res.send(categories);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})