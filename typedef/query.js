export const query = `
    type Query {
        movies(skip: Int, limit: Int): [Movie]
        movie(id: ID): Movie
        comments(skip: Int, limit: Int): [Comment]
        users(skip:Int, limit: Int): [User]

    }
`