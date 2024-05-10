const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: [true, "Please provide a product name"]
    },
    quantity:{
        type: Number,
        required: [true, "Please provide a quantity"],
        default: 0
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"]
    },
    image: {
        type: String,
        required: [false, "Please provide an image if any"]
    }
},
{
    timestamps: true
}

)


const Product = mongoose.model('product', productSchema);

module.exports = Product;