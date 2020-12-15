const fs = require('fs');
const csv = require('fast-csv');
const pool = require('./dbSQL/pgdb.js');

pool.connect((err)=> {
  if (err) {
    console.log(err);
  }
});


const seeder = (num, min, max, counter) => {
    let csvStream = csv.parseFile(`./data/product.csv`, { headers: true })
      .on('data', function(record){
        let sku = record.sku;
        let item = record.item;
        let price = record.price;
        let imgUrl = `{${record.imgUrl}}`;
        let system = record.system;

        pool.query("INSERT INTO games(sku, item, price, imgUrl, system) \
        VALUES ($1, $2, $3, $4, $5)", [sku, item, price, imgUrl, system], function(err) {
          if (err) {
            console.log(err);
          }
        })
        console.log(counter)
        counter++;

    }).on('end', function(){
      return max
      console.log('ya did it kiddo')
    }).on('error', function(err) {
      console.log(err);
    });
}

module.exports = seeder;



