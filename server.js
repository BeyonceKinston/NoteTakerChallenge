const express = require('express');
const path = require('path');
const htmlRoutes = require('./htmlRoutes/index')
const apiRoutes = require('./apiRoutes/index')

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
