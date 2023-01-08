import express from 'express'
import fs from 'fs'

const app = express() 
const port = 3200;

app.get('/banner', (req, res) => {
    const data = getData('./data/Banner.json');
    res.json(data);
}) 

app.get('/category', (req, res) => {
    const data = getData('./data/Category.json');
    res.json(data);
}) 

app.get('/product', (req, res) => {
    const data = getData('./data/Product.json');
    res.json(data);
}) 

app.get('/product/:id', (req, res) => {
    const data = getData('./data/Params.json');
    res.json(data);
}) 

app.listen(port, () => {
   console.log(`server sudah berjalan di localhost port : ${port}`) 
}) 

  const getData = (path) => {
  const data = fs.readfilesync(path, 'utf-8', (err, data) => data) 
}

const findData = (id) => {
const dataProduct = getData('./data/Product.json');
const findProduct = dataProduct.find((data) => data.id === parseInt(id)) 
if(!findProduct) {
  let dummy = [{
    "id" : 12,
    "brand" : "HP VIVO V7", 
    "description" : "THIS IS VIVO", 
    "price" : 2500000,
    "promo" : 2000000,
    "category" : "SMARTPHONE", 
    "image" : ["/storage/emulated/0/DCIM/Camera/IMG_20230107_112248_1.jpg"]
}]
 return dummy
}
 return findProduct
}
