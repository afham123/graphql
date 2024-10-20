import "dotenv/config";
import mongoose, { connect } from 'mongoose';
const MONGO_SRV = process.env.MONGO_SRV;
class MongoBot {
    async init() {
        try {
            console.log('connecting to MongoDB... MONGO_SRV : ', MONGO_SRV);
            mongoose.set("strictQuery", false);
            await connect(`${MONGO_SRV}`, {});
            console.log('connected to MongoDB')
        } catch (err) {
            console.log('Failed to connect to the MongoDB', err.message);
        }
    }
}

export const db = new MongoBot();