const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
require('dotenv').config();
const app = express()


//middleware to enable body parsing
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.get('/', (req, res)=> {
    res.send('Product API by Moralist')
})

<<<<<<< HEAD
app.get('/product', async(req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
app.get('/product/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
=======
app.listen(3000, () => {
    console.log('Product App listening on port 3000')
>>>>>>> 07d192228a3d2aec1dfd9f4652b7fa45e13005f5
})

app.post('/product', async(req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//Update a product
app.put('/product/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body);
        //If product id is not found.
        if(!product){
            res.status(404).json({message: `Product with id ${id} not found`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//Delete a product
app.delete('/product/:id', async(req, res) => {
    try {
        const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    if(!product) {
        return res.status(404).json({message: `Product with id ${id} not found`})
    }
    res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


const MONGODB_CONNECTION_URL=process.env.MONGODB_CONNECTION_URL
mongoose.
connect(MONGODB_CONNECTION_URL)
.then(()=> {
    console.log('MongoDB connection established')
    app.listen(3000, () => {
        console.log('TodoList App listening on port 3000')
    })
   
}).catch(()=> {
    console.log('MongoDB connection failed')
})
