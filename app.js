let express = require('express'),
  app = express();

app.set('view engine', 'pug');
app.get('/', function(req, res) {
  res.render(__dirname + '/views/other/index');
});
app.listen(3000, () => console.log(`started server on port 3000`));
