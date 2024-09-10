const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('hello');
});

app.post('/api/simulate', (req, res) => {
  res.json({
      receivedData: req.body
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});