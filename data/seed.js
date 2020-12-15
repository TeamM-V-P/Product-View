//const db = require('../db/index.js');
//const mongoose = require('mongoose');
const faker = require('faker');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');

// creates the 1000 random images to use
let i = 1;
let imgs = [];
while (i <= 1000) {
  imgs.push(`https://loremflickr.com/700/700?random=${i}`);
  i++;
}
console.log('step 1')
// create 10mil entries into an array
let products1 = [];
let products2 = [];
let products3 = [];
let products4 = [];

let k = 0;
let j = 0;
while (k < 2500000) {
  if (j+3 >= 1000) {
    j = 0;
  }
  let price = (Math.ceil(Math.random() * 5)) * 10 + 0.99;
  let arr = [imgs[j], imgs[j+1], imgs[j+2]]
  let temp = {
    "id": k,
    "sku": k,
    "item": `${faker.lorem.slug()}`,
    "price": price,
    "imgUrl": arr,
    "system": `${faker.lorem.slug()}`
  }
  products1.push(temp);
  j += 3;
  k++;
}
console.log('step 2')
while (k >= 2500000 && k < 5000000) {
  if (j+3 >= 1000) {
    j = 0;
  }
  let price = (Math.ceil(Math.random() * 5)) * 10 + 0.99;
  let arr = [imgs[j], imgs[j+1], imgs[j+2]]
  let temp = {
    "id": k,
    "sku": k,
    "item": `${faker.lorem.slug()}`,
    "price": price,
    "imgUrl": arr,
    "system": `${faker.lorem.slug()}`
  }
  products2.push(temp);
  j += 3;
  k++;
}
console.log('step 3')
while (k >= 5000000 && k < 7500000) {
  if (j+3 >= 1000) {
    j = 0;
  }
  let price = (Math.ceil(Math.random() * 5)) * 10 + 0.99;
  let arr = [imgs[j], imgs[j+1], imgs[j+2]]
  let temp = {
    "id": k,
    "sku": k,
    "item": `${faker.lorem.slug()}`,
    "price": price,
    "imgUrl": arr,
    "system": `${faker.lorem.slug()}`
  }
  products3.push(temp);
  j += 3;
  k++;
}
console.log('step 4')
while (k >= 7500000 && k < 10000000) {
  if (j+3 >= 1000) {
    j = 0;
  }
  let price = (Math.ceil(Math.random() * 5)) * 10 + 0.99;
  let arr = [imgs[j], imgs[j+1], imgs[j+2]]
  let temp = {
    "id": k,
    "sku": k,
    "item": `${faker.lorem.slug()}`,
    "price": price,
    "imgUrl": arr,
    "system": `${faker.lorem.slug()}`
  }
  products4.push(temp);
  j += 3;
  k++;
}
// export csv

const csvWriter1 = createCsvWriter({
  path: './data/product.csv',
  header: [
      {id: 'sku', title: 'sku'},
      {id: 'item', title: 'item'},
      {id: 'price', title: 'price'},
      {id: 'imgUrl', title: 'imgUrl'},
      {id: 'system', title: 'system'}
  ]
});

const csvWriter2 = createCsvWriter({
  path: './data/product.csv'
});

const csvWriter3 = createCsvWriter({
  path: './data/product.csv'
});

const csvWriter4 = createCsvWriter({
  path: './data/product.csv'
});


console.log('lets go bubbo');

csvWriter1.writeRecords(products1)
  .then(() => {
    csvWriter2.writeRecords(products2)
      .then(() => {
        csvWriter3.writeRecords(products3)
          .then(() => {
            csvWriter4.writeRecords(products4)
              .then(()=> {
                console.log('ya did it kiddo')
              })
          })
      })
  });


