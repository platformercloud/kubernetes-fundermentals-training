import * as express from 'express';

var app = express();


app.get('/', (req, res) => {
    res.send(`Hello World!!!!!!. This changed realtime`)
})
app.listen(8000, () => {
    console.log("app works on http://localhost:8000");
});

