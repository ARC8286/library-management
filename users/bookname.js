const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    publishedYear: {
        type: Number,
        require: true
    },
    genre: {
        type: String,
        enum: [
            "Fiction",
            "Non-Fiction",
            "Mystery",
            "Thriller",
            "Romance",
            "Science Fiction",
            "Fantasy",
            "Historical",
            "Biography",
            "Self-Help",
            "Philosophy",
            "Travel",
            "Children's Literature",
            "Young Adult",
            "Horror",
            "Graphic Novel",
            "Poetry",
            "Classic",
            "Adventure",
            "Science",
            "Technology",
            "Cooking",
            "Art",
            "Religious",
            "Health & Fitness",
            "Political"
        ],
        require: true
    },
    availableCopies: {
        type: Number,
        default: 0
    },
    totalCopies: {
        type: Number,
        default: 0
    }

})

const books = mongoose.model("books", bookschema);
module.exports = books;