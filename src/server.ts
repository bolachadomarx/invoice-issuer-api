import express, { Router } from 'express'
import mongoose from 'mongoose'

import { Invoice } from './schemas/invoice'
import { Product } from './schemas/product'

import bodyParser from 'body-parser'
const app = express()
const router = Router()

app.use(bodyParser.json())

mongoose.connect(
    'mongodb+srv://bolachadomar:1XhN7t3fi6daYyp3@parkingbike.gbdff.gcp.mongodb.net/invoice-issuer?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
)

app.get('/', (req, res) => {
    return res.json({ message: 'Hello world' })
})

app.get('/product', (req, res) => {
    const products = Product.find()
    return res.json(products)
})

app.post('/product', async (req, res) => {
    const product = new Product(req.body)
    const newProduct = await Product.create(product)
    return res.json(newProduct)
})

app.post('/invoice', async (req, res) => {
    const invoice = new Invoice(req.body)
    const newInvoice = await Invoice.create(invoice)
    return res.json(newInvoice)
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
