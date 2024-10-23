export const query = `
    type Query {
        movies(skip: Int, limit: Int): [Movie]
        movie(id: ID!): Movie
        comments(skip: Int, limit: Int): [Comment]
        comment(id: ID!): Comment
        users(skip:Int, limit: Int): [User]
        user(id: ID!): User
        items(skip: Int, limit: Int): [Item]
        item(id: ID!): Item
        totalItem: Int
    }
    type Count {
        AllItem : Int
    }
    type Mutation {
        addComment(comment: AddCommentInput!): responseMsg
        addItem(item: AddItemInput!): responseMsg
        deleteItem(ids: [ID!]): responseMsg
        uploadItems(Items : [AddItemInput]!): responseMsg
    }
    type responseMsg{
        success : Boolean!
        msg : String
    }
    input AddCommentInput{
        user_id: ID!
        movie_id: ID!
        text: String
        date: String
        name: String
        email: String
    }
    input AddItemInput{
        name: String!
        category : String!
        company: String!
        contact_num : String!
        email: String!
        location: String
        GST_No: String
        GST_Turnover: String
        Remark: String
        Supplier_Type: String
        numericId: Int
        EnqDate: String
        status: String
    }
`