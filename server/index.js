const newrelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// app.get('/', (req, res) => res.redirect(`/bookings/${Math.floor(Math.random()* 100)}`));

app.use('/abodes/:roomid', express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '../public')));

// app.get('/photosandcomments/:accommodationid', (req, res) => {
//   axios.get(`http://localhost:3001/photosandcomments/${req.params.accommodationid}`)
//     .then(response => {
//       res.send(response.data);
//     });
// });

// app.get('/bookings/:accommodationid/reserve', (req, res) => {
//   axios.get(`http://localhost:3003/bookings/${req.params.accommodationid}/reserve`)
//     .then(response => {
//       res.send(response.data);
//     });
// });

// app.get('/bookings/:accommodationid/reserve/:startDate&:endDate', (req, res) => {
//   axios.get(`http://localhost:3003/bookings/${req.params.accommodationid}/reserve/${req.params.startDate}&${req.params.endDate}`)
//     .then(response => {
//       res.send(response.data);
//     });
// });

app.get('/api/abodes/:abode_id', (req, res) => {
  console.log('first prox')
  axios.get(`http://localhost:3002/api/abodes/${req.params.abode_id}`)
    .then(response => {
      res.send(response.data);
    });
    // .catch(err => console.log(err))
});

// app.get('/homes', (req, res) => {
//   axios.get(`http://localhost:3004/homes`)
//     .then(response => {
//       res.send(response.data);
//     });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));