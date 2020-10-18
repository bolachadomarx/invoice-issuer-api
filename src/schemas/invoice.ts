import mongoose from 'mongoose'
const { Schema } = mongoose

export const InvoiceSchema = new Schema({
    code: String,
    client: String,
    products: Array,
})

export const Invoice = mongoose.model('Invoice', InvoiceSchema)
