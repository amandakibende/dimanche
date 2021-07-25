const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const bagSchema = new Schema ({

    brand: String,
    color:String,
    price:Number,

});

const Bag = mongoose.model("bag", bagSchema);

module.exports = Bag;