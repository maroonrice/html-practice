'use strict';

const express = require('express');
const app = express();
app.use(express.static('./contents'));
app.listen(8081, ()=> {
  console.log('start express');
});
