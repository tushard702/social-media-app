const {postData, topCommentsData} = require("../mocks/index")

const resolvers = {
    Query: {
        getAllPosts() {
            return postData;
        },
        getAllComments(postId) {
            if(postId == "500")
                return topCommentsData;
            return null;
        }
    }
}

module.exports = {resolvers};