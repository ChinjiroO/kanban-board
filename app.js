const express = require('express');
const cors = require('cors');
require('dotenv').config();

const boardRouter = require('./routes/boards');

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/boards', boardRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Node.js, Express, and Postgres API started' });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
