const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

//Categories
const categories = require('./data/categories.json');
const news = require('./data/news.json');


app.get('/', (req, res) => {
    res.send('Dragon News is API Running')
})

//categories
app.get('/categories', (req, res) => {
    res.send(categories)
})

//category news
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id === '08'){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => n.category_id === id);
        res.send(categoryNews);
    }
})
//all news
app.get('/news', (req, res) => {
    res.send(news);
})

//news
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews);
    // console.log(id);
})

app.listen(port, () => {
    console.log('Dragon news server Runnig on:', port);
})








