Calls a function that takes a standard node callback function and returns a Promise that is rejected on error or resolved with the non-error arguments of the callback.

Example:

````
import promise from 'promise-callback';

promise(fs.writeFile, 'file_name.json', JSON.stringify({some: 'js obj'}, null, '  '))
  .then(
       () => console.log('file written'),
    error => console.log('error writting file', error.stack));

promise(fs.readFile, 'file_name.json')
  .then(
    buffer => console.log(buffer.toString())),
    error  => console.log('error reading file' error.stack);
````