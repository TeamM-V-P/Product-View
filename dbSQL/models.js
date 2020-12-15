const pool = require('./pgdb.js');

const model = {
  post: async (item, callback) => {
    try {
      let results = await pool.query(`INSERT INTO games (sku, item, price, imgUrl, system) VALUES ($1, $2, $3, $4, $5)`, item)
      callback(null, results)
    } catch(error) {
      callback(error)
    }
  },

  get: async (sku, callback) => {
    try {
      let results = await pool.query(`SELECT * FROM games WHERE sku = ${sku}`);
      callback(null, results.rows[0]);
    } catch(error) {
      callback(error);
    }
  },

  put: async (item, callback) => {
    try {
      let result = await pool.query( 'UPDATE games SET price = $1 WHERE sku = $2;', [item.price, item.sku])
      callback(null, 'updated!')
    } catch (error) {
      callback(error);
    }
  },

  delete: async (sku) => {
    try {
      let result = await pool.query('DELETE FROM users WHERE sku = $1;', [sku.sku]);
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = model;
