const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/', (req, res) => {
  res.send('hello mars');
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});