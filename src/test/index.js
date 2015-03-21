import promise from '../';

promise((arg, callback) => {
  console.log('arg', arg, 'callback', callback);
  callback(undefined, 'arg1');
}, 'an arg').then(value => console.log('value', value), error => console.log('error', error));