import mongoose from 'mongoose'
const { Schema } = mongoose

export const ProductSchema = new Schema({
    code: String,
    description: String,
    value: Number,
    discount: Number,
})

export const Product = mongoose.model('Product', ProductSchema)
