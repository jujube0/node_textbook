const express = require('express');
const router = express.Router();

const User = require('../schemas/user');
const Comment = require('../schemas/comment');
const { json } = require('body-parser');

router.route('/')
    .get(async (req, res, next) => {
        try{
            const users = await User.find({});
            res.json({users});
        }catch(err){
            console.error(err);
            next(error);
        }
    })
    .post(async (req, res, next) =>{
        try{
            const user = await User.create({
                name : req.body.name,
                age: req.body.age,
                married : req.body.married,
            });
            console.log(user);
            res.status(201).json(user);
        }catch(err){
            console.error(err);
            next(err)
        }
    });

    router.get('/:id/comments', async (req, res, next) => {
        try{
            const comments = await Comment.find({ commenter : req.params.id})
                .populate('commenter');
            console.log(comments);
            res.json( comments );
        }catch(err){
            console.error(err);
            next(err);
        }
    })

module.exports = router;