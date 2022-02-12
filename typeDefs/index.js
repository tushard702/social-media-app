const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Post{
        postId: String!
        likes: Int!
        dislikes: Int!
        topComments: [Comment!]
        body: String!
        heroImage: String
        userName: String!
    }

    type Comment{
        userName: String!
        postId: String!
        body: String!
        replies: [Comment!]
    }

    # Queries
    type Query {
        getAllPosts: [Post!]
        getAllComments(postId: String!): [Comment!]
    }

    # Mutations
`;

module.exports = {typeDefs};