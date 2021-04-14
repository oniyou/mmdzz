var exec = require('child_process').exec;

var child1 = exec('node ' + 'mmdzz.js', function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
});

var child2 = exec('node ' + 'smz.js', function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
});
