import { MongoService } from "../db/mongoservice.js";
import MovieModel from "../db/movie.model.js";
import usersModel from "../db/user.model.js";

export const Comment = {
    async movie(parent){
        const {movie_id} = parent;
        const data = await MongoService.findOne(MovieModel, {
            query: {_id:movie_id}
        }) 
        return data;
    },
    async user(parent){
        const {user_id} = parent;
        const data = await MongoService.findOne(usersModel, {
            query: {_id:user_id}
        }) 
        return data;
    }
}