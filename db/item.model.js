import {Schema, model}  from 'mongoose';

const ItemSchema = new Schema({
    name : {
        type: String,
        require: true
    },
    category: {
        type : String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    contact_num : {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    location: {
        type: String
    },
    GST_No: {
        type: String
    },
    GST_Turnover: {
        type: String
    },
    Remark: {
        type: String
    },
    Supplier_Type : {
        type: String
    },
    numericId: {
        type: Number,
        default: 0,
        index: true
    },
    EnqDate: String,
    status: String

}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        virtuals: true,
        getters: true
    }
})

const ItemModel = model('Item', ItemSchema);
export default ItemModel;