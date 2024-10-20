import { Commenttypedef } from "./comments.typedef.js"
import { moviesTypedef } from "./movies.typedef.js"
import { query } from "./query.js"
import { userTypedef } from "./user.typedef.js"


export const typedef = '#graphql'  + moviesTypedef + userTypedef + Commenttypedef + query