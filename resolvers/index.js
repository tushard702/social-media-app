const {postData, topCommentsData} = require("../mocks/index")
let cnt = 4;

const resolvers = {
    Query: {
        getAllPosts() {
            return postData;
        },
        getAllComments(parent, args) {
            return topCommentsData.filter((it) => it.postId == args.postId);
        }
    },
    Mutation: {
        addComment(parent, args) {
            let comment = {...args, replies: null}
            topCommentsData.push(comment);
            return comment;
        },
        addPost(parent, args) {
            let post = {...args, postId: ++cnt, likes: 0, dislikes: 0, topComments: null}
            postData.push(post)
            return post;
        }
    }
}

module.exports = {resolvers};