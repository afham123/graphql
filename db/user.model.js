import {Schema, model}  from 'mongoose';

const usersSchema = new Schema({
    name: String,
    email: String,
    password: String
})

const usersModel = model('user', usersSchema);
export default usersModel;