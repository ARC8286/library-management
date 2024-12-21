const mongoose = require('mongoose');

const autherschema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    dob: {
        type: Number,
        require: true
    },

    bio: {
        type: String,
        require: false
    }

})
const author = mongoose.model("author",autherschema);
module.exports = author;