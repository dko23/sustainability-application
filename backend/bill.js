
const mongoose = require('mongoose');


const billSchema = new mongoose.Schema({

    month: String, 
    electricity: Number, 
    water: Number, 
    action: String, 
    actionDate: {
        type: String,

    }, 
    createdAt: {
        type: Date,
        default: ()=>new Date()
        
    } //* It can be done in either objects as done on 2nd September 2023
});

module.exports = mongoose.model('receipts', billSchema); // from 'bills' to receipt

//**so is the model the created the same as the collection because the schema created is the document lets say in the form of a blue print */