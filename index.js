const express = require('express')
const app = express()
const port = process.env.PORT || 7000;
 
const categories = require('./Data/categories.json');
const news = require('./Data/news.json');

const cors = require('cors');
app.use(cors())

app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories',(req, res)=>{
      res.send(categories);
})

app.get('/news',(req, res)=>{
      res.send(news);
})

app.get('/news/:id', (req, res) =>{
  const id = req.params.id
  const selectedNews = news.find(n => n._id == id);
  res.send(selectedNews);
})

app.get('/categories/:id', (req, res) =>{
  const id = parseInt(req.params.id); 
  // console.log(id);
  if (id === 0){
    res.send(news)
  }
  else{
    const categoryNews = news.filter(n => n.category_id == id);
    res.send(categoryNews);
  }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})