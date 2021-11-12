const mongoose = require("mongoose");

// Note to self: update the OpenAPI spec later.
const medicineSchema = mongoose.Schema({
    name: {
        type: String
    },
    information: {
        type: String
    },
    price: {
        type: Number
    },
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    manufacturer: {
        type: String
    },
    /*
    * To be added to the manufacturer field
    *
    * type: mongoose.Schema.ObjectId,
    * ref: "Supplier"
    * required: true
    */
    manufactureDate: {
        type: Date,
        default: Date.now,
    },
    expiryDate: {
        type: Date,
        default: Date.now,
    },
    batchNumber: {
        type: Number
    },
    category: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Medicine", medicineSchema);
