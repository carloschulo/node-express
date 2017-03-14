const express = require('express');
const app = express();
const data = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
/*set a global var called 'appDataFile' equal to the
data variable at the top that holds json data.
this data can now be accessed throughout the app.*/
app.set('appDataFile', data);

app.use(express.static('app/public'))
/*These are my two main routes*/
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

const server = app.listen(app.get('port'), function(){
  console.log('listening on port ' + app.get('port'));
});