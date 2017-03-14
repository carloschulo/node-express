const express = require('express');
const router = express.Router();

router.get('/speakers', function(req, res){
  let info = '';
  /*Access the json data file from here*/
  let data = req.app.get('appDataFile');
  data.speakers.forEach(function(item){
    info += `
      <li>
        <h2>${item.name}</h2>
        <img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker">
        <p>${item.summary}</p>
      </li>
    `;
  });
  res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>Summaries</h1>
    <ul>${info}</ul>
  `);
});

router.get('/speakers/:speakerid', function(req, res){
  /*Access the json data file from here*/
  let data = req.app.get('appDataFile');
  let speaker = data.speakers[req.params.speakerid];
  res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
    <p>${speaker.summary}</p>
  `);
});

module.exports = router;