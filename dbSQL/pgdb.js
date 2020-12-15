const pg = require('pg');
const Pool = require('pg').Pool;
const config = require('./config.json');


const pool = new pg.Pool(config)

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack);
});

module.exports.pool = pool;

module.exports.query = function(text, values, callback) {
  return pool.query(text, values, callback);
};

module.exports.connect = function(callback) {
  return pool.connect(callback);
};
