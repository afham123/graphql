import MovieModel from "../db/movie.model.js"
import {MongoService} from '../db/mongoservice.js'
import commentsModel from "../db/comments.model.js"
import usersModel from "../db/user.model.js"
import ItemModel from "../db/item.model.js"

export const Query = {
    async movies(_, { skip = 0, limit = 10 }) {
        // await addUserId();
        return await MongoService.find(MovieModel, {
            query : {  },
            limit : limit,
            offset : skip
        })
    },
    async movie(_, {id}) {
        return await MongoService.findOne(MovieModel, {
            query : { _id : id}
        })
    },
    async comments(_, {skip = 0, limit = 10}) {
        return await MongoService.find(commentsModel, {
            query : {  },
            limit : limit,
            offset : skip
        })
    },
    async comment(_, {id}){
        return await MongoService.findOne(commentsModel, {
            query : { _id:id}
        })
    },
    async users(_, {skip = 0, limit = 10}){
        return await MongoService.find(usersModel, {
            query : {},
            limit : limit,
            offset : skip
        })
    },
    async user(_, {id}){
        return await MongoService.findOne(usersModel, {
            query : { _id:id}
        })
    },
    async items(_, { skip = 0, limit = 10 }){
        return await MongoService.find(ItemModel, {
            query : {},
            limit : limit,
            offset : skip
        })
    },
    async item(_,{id}){
        return await MongoService.findOne(ItemModel, {
            query : {_id:id}
        })
    },
    async totalItem(){
        const docs = await MongoService.find(ItemModel, {
            query : {}
        });
        return {AllItem : docs?.length};
    }

}

async function addUserId(){
    const comments = await MongoService.find(commentsModel, {});
    let updatedDoc = 0;
    
    comments.forEach(async (doc) => {
        const {name, email} = doc;
        const userDoc = await MongoService.findOne(usersModel, {
            query : {
                name, email
            }
        })  
        if(userDoc) {
            MongoService.findOneAndUpdate(commentsModel, {
                query : {_id:doc._id},
                updateData : {user_id : userDoc._id}
            }).then((res)=>{
                console.log(updatedDoc++);
            })
        }
    });
}