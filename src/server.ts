import express, { Router } from 'express'

const app = express()
const router = Router()

app.get('/', (req, res) => {
    return res.json({ message: 'Hello world' })
})

app.get('/product', (req, res) => {
    const products = [{}]
})

app.post('/invoice', (req, res) => {
    const invoice = req.body
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
