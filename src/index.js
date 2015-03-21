module.exports = function promise(fn, ...args) {
  return new Promise((resolve, reject) => {
    fn(...args, (error, ...rest) => {
      if (error) reject({error, args: rest});
      else resolve(rest.length === 1 ? rest[0] : rest);
    });
  });
};
