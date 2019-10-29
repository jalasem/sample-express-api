const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const { environment } = require('./config')

// server plugins & default middlewares
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))

const apiRoutes = require('./routes/');

const { serverResponse } = require('./utils/helpers');

app.use('/api/v1', apiRoutes);

app.get('/', (req, res) => {
  serverResponse(res, 'Social App API');
});

app.get('/*', (req, res) => {
  serverResponse(res, 'invalid route. Try `/` or `/api/v1/`', 404, 'error');
});

app.listen(5400, () => {
  // eslint-disable-next-line no-console
  console.log(`app[${environment}] is running on port 5400`);
});
