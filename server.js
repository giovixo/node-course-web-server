const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
    name: "Giove",
    sports: ["Tennis", "Bike"]
  });
});

app.get('/about', (req, res) =>{
  res.render('about.hbs');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "The page you request is wrong."
  });
});

app.listen(port, () => {
  console.log('Server is up at port 3000');
});
