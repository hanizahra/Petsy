//requirements
const express  = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser= require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Wassup this is the back end of petFinder root route! switch to client server for testing!');
});

const petFinder = require('./routes/petFinder');
app.use('/petFinder', petFinder); //--this route is just for my testing purposes here in the back end.. --/api/petFinder will be the one executed to the front end
app.use('/api/petFinder', petFinder);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'yow page not found',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
