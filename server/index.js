const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { simulateCharging } = require('./simulation');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is up!');
});

app.post('/api/simulate', (req, res) => {
  const [ chargePoints, arrivalProbability, consumption, chargingPower ] = req.body;

  const result = simulateCharging(chargePoints.value, arrivalProbability.value, consumption.value, chargingPower.value);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
