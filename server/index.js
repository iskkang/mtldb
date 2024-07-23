const express = require('express');
const app = require('./app');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
