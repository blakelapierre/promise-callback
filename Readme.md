Calls a function that takes a standard node callback function and returns a Promise that is rejected on error or resolved with the non-error arguments of the callback.

Example:

var promise = require('promise-callback');

promise(fs.writeFile, 'file_name.json', JSON.stringify({some: 'js obj'}, null, '  '))
  .then(
    () => console.log('file written'),
    error => console.log('error writting file', error.stack));