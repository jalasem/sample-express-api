const express = require('express');

const app = express();

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
  console.log('app is running on port 5400');
});
