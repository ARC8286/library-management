const express = require('express');
const router = express.Router();
const author = require('.././users/author')
router.post('/',async (req,res)=>{
try{
    const authordata = req.body;
    const newauthor = new author(authordata);
    const response = await newauthor.save();
    res.status(200).json(response);
}catch(err){
    res.status(200).json(err);
}
})

router.get('/',async(req,res)=>{
    try{
        const findauthor = await author.find();
        res.status(200).json(findauthor);
    }catch(err){
        res.status(200).json(err);
    }
})

module.exports = router;