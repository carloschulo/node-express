const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <h1>Welcome HOME</h1>
    <img src="/images/misc/background.jpg" alt="" style="height: 200px;">
    <p>This is the homepage</p>
  `);
});

module.exports = router;