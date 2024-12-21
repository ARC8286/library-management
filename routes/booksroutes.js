const express = require('express');
const router = express.Router();
const books = require('.././users/bookname');

router.post('/', async (req, res) => {
    try {
        const books_data = req.body;

        const stored_books = new books(books_data);
        const response = await stored_books.save();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const response = books.find();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:bookgenre', async (req, res) => {
   try{ 

    const bookgenre = req.params.bookgenre;
    if (bookGenre === "Fiction" ||
        bookGenre === "Non-Fiction" ||
        bookGenre === "Mystery" ||
        bookGenre === "Thriller" ||
        bookGenre === "Romance" ||
        bookGenre === "Science Fiction" ||
        bookGenre === "Fantasy" ||
        bookGenre === "Historical" ||
        bookGenre === "Biography" ||
        bookGenre === "Self-Help" ||
        bookGenre === "Philosophy" ||
        bookGenre === "Travel" ||
        bookGenre === "Children's Literature" ||
        bookGenre === "Young Adult" ||
        bookGenre === "Horror" ||
        bookGenre === "Graphic Novel" ||
        bookGenre === "Poetry" ||
        bookGenre === "Classic" ||
        bookGenre === "Adventure" ||
        bookGenre === "Science" ||
        bookGenre === "Technology" ||
        bookGenre === "Cooking" ||
        bookGenre === "Art" ||
        bookGenre === "Religious" ||
        bookGenre === "Health & Fitness" ||
        bookGenre === "Political"){
            const response = books.find({genre : bookgenre})
            res.status(200).json(response);
        }else{
            res.status(404).json(err,"user not found");
        }}
        catch(err){
            res.status(500).json(err);
        }
})

module.exports =router;