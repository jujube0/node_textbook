const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, User');
});

router.get('/:id', (req, res) => {
    console.log(req.params.id, req.query)
    return res.end('success')
}) ;

module.exports = router;