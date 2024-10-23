import commentsModel from "../db/comments.model.js"
import ItemModel from "../db/item.model.js"
import { MongoService } from "../db/mongoservice.js"

export const Mutation = {
    async addComment(_, args) {
        args.comment.movie_id = MongoService.ObjectId(args.comment.movie_id)
        try {
            await MongoService.create(commentsModel, {
                insert: args.comment
            })
            return { success: true };
        }
        catch (err) {
            return { success: false, msg: err.message };
        }
    },
    async addItem(_, args) {
        try {
            console.log(args.item);
            const Item = await MongoService.create(ItemModel, {
                insert: args.item
            })
            console.log(Item)
            return { success: true }
        }
        catch (err) {
            return { success: false, msg: err.message };
        }
    },
    async deleteItem(_, args) {
        try {
            console.log(args.ids);
            return { success: true };

        } catch (err) {
            return { success: false, msg: err.message };
        }
    },
    async uploadItems(_,args){
        try{
            console.log(args.Items);
            return { success: true };
        } catch(err){
            return { success: false, msg: err.message };
        }
    }
}