const express = require('express');
const { program } = require('commander');

program
  .requiredOption('-h, --host <type>', 'server host')
  .requiredOption('-p, --port <type>', 'server port')
  .requiredOption('-c, --cache <type>', 'cache directory path')
  .parse(process.argv);

const options = program.opts();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(options.port, options.host, () => {
  console.log(`Server running at http://${options.host}:${options.port}`);
});