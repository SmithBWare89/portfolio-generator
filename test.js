const cp = require('child_process');
cp.exec('index.html', (err, stdout, stderr) => {
  if (err) throw err;
  console.log('It worked!');
  console.log(stdout);
});