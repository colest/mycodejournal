var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    title: String,
    thumbnail: String,
    description: String,
    status: String,
    deployment: String,
    repo: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
module.exports = mongoose.model("Project", projectSchema);