const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const users = await users.find({});
    } catch(err){
        console.log(err);
        next(err);
    }
});

module.exports = router;
