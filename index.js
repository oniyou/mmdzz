var exec = require('child_process').exec;

// 运行mmdzz.js
!(async () => {
  console.log(`\n运行mmdzz.js`)
  var child1 = exec('node ' + 'mmdzz.js', function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
  })
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())

// 运行smz.js
!(async () => {
  console.log(`\n运行smz.js`)
  var child1 = exec('node ' + 'smz.js', function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
  })
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())
