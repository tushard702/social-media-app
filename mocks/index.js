const topCommentsData = [
    {userName: "1", postId: "1", body: "quidem magnam voluptate", replies: null},
    {userName: "1", postId: "1", body: "molestiae reprehenderit", replies: null},
    {userName: "1", postId: "1", body: "deserunt consectetur qui", replies: null},
]

const postData = [
    {postId: "1", likes: 2, dislikes: 0, topComments: topCommentsData, 
    body: "laudantium enim quasi est quidem magnam",
    heroImage: null, userName: "1"},
    {postId: "2", likes: 0, dislikes: 4, topComments: null, 
    body: "doloribus at sed quis culpa deserunt",
    heroImage: null, userName: "1"},
    {postId: "3", likes: 10, dislikes: 1, topComments: null, 
    body: "sapiente assumenda molestiae atque\nadipisci laborum",
    heroImage: null, userName: "2"},
    {postId: "4", likes: 1002, dislikes: 60, topComments: topCommentsData, 
    body: "mollitia quas deserunt nostrum",
    heroImage: null, userName: "2"},
]

module.exports = {postData, topCommentsData};