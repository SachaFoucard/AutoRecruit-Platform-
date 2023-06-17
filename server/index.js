const express = require('express');
const cors = require('cors');
const app = express();
const MongoDBConnect = require('./config/database');

app.use(express.json());

require("./config/database");

const PORT = process.env.PORT || 8000;

MongoDBConnect();

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Adjust the origin as needed, or use a whitelist of allowed origins
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api', require('./Routes/route.apply'));

try {
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
} catch (error) {
  console.log(error);
}
