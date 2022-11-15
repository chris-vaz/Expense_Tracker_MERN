// Specifying the structure of our MongoDB Documents

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//For the Categories,
// Aim: To categorize by field => ['type':'color']
const cateogries_model=new Schema({
    type:{
        type:String,
        default:"Investment"
    },
    color:{
        type:String,
        default:'rgb(255, 99, 132)'
    }
})


//For the Transactions
// Transactions => field => ['name':'type','amount' and 'date']
const transaction_model=new Schema({
    name:{
        type:String,
        default:"Anonymous"
    },
    type:{
        type:String,
        default:"Investment"
    },
    amount:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const Categories = mongoose.model('categories',cateogries_model)
const Transaction = mongoose.model('transaction',transaction_model)

exports.default=Transaction;
module.exports={
    Categories,
    Transaction
}
