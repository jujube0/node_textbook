const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const port = 5000;


app.use((req,res,next) => {
    console.log("hello")
    next();
});

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req,res,next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => console.log(`listening on port ${port}`))