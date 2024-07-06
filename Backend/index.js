const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // To use environment variables from a .env file

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Database configuration
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to DB");
})
.catch(err => {
  console.error("Error connecting to DB:", err.message);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
