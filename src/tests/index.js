import promise from '../';

promise((arg, callback) => {
  console.log('arg', arg, 'callback', callback);
  callback(undefined, 'arg1', 'arg2');
}, 'an arg').then(value => console.log('value', value), error => console.log('error', error));

promise((arg, callback) => {
  console.log('arg', arg, 'callback', callback);
  callback('error', 'arg1', 'arg2');
}, 'an arg').then(value => console.log('value', value), (error, ...rest) => console.log('error', error, ...rest));