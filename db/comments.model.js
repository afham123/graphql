import {Schema, model, Types}  from 'mongoose';

const commentsSchema = new Schema({
    name: String,
    email: String,
    movie_id: String,
    text: String,
    date: Date,
    user_id : Types.ObjectId
});

const commentsModel = model('comment', commentsSchema);
export default commentsModel;