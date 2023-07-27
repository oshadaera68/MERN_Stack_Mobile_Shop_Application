const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemQty: {
        type: Number,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
})
module.exports = mongoose.model('Item',itemSchema)