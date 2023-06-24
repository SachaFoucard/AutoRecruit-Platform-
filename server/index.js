const express = require('express');
const cors = require('cors');
const app = express();
const MongoDBConnect = require('./config/database');

app.use(express.json());

require("./config/database");

const PORT = process.env.PORT || 8000;

MongoDBConnect();

app.use(cors());

app.use('/api', require('./Routes/route.apply'));
app.use('/api',require('./Routes/route.email'));


try {
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
} catch (error) {
  console.log(error);
}

