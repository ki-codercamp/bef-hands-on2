var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

app.set('view engine', 'ejs');



// get all cars
app.get('/', (req,res) => {
  // res.json(cars);
  let cars = [
    {make: 'ford', model: 'mustang'},
    {make: 'BMW', model: 'M4'},
    {make: 'Mercedes-Benz', model: 'C63'}
  ];
  res.render('pages/index', {cars: cars});
});



app.use(function(req, res, next) {
  console.log('404 error handler');
  res.status(404).send("custom not found handler called");
});

app.listen(port, () => {
  console.log('server connected');
});
