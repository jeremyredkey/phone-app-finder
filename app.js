const express = require('express');
const morgan = require('morgan');
const playstore = require('./playstore')

const app = express();


app.get('/app', (req, res) => {
    const {sort, genres} = req.query;
    let data = playstore;
    if(sort) {
        if(sort != "rating" && sort != "app" ) {
            return res.status(400).send("Sort should be rating or app")
        }
        data = data.sort((a, b) => a[sort].toLowerCase() > b[sort].toLowerCase() ? 1 : -1)
    }

    if(genres) {
        if(genres != "Action" && genres != "Puzzle" &&  genres != "Strategy" &&  genres != "Casual" &&  genres != "Arcade" &&  genres != "Card") {
            return res.status(400).send("Genres should be rating or app")
        }
        data = data.filter(a => a.Genres == genres) 
    } 
    res.json(data)
})

app.listen(8000)