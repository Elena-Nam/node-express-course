require('dotenv').config({ quiet: true });
require('express-async-errors');
const express = require('express');
const app = express();
const router = require('./routes/main')

// middleware
app.use(express.json());
// routes
app.use('/api/v1', router)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
