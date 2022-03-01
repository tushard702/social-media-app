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
        userProfilePic: String
    }

    type Comment{
        userName: String!
        postId: String!
        body: String!
    }

    # Queries
    type Query {
        getAllPosts: [Post!]
        getAllComments(postId: String!): [Comment!]
    }

    # Mutations
    type Mutation {
        addComment(userName: String!, postId: String!, body: String!): Comment!
        addPost(userName: String!, body: String!, heroImage: String, userProfilePic: String): Post!
    }
`;

module.exports = {typeDefs};