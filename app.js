const express = require('express');
const app = express();
const path = require('path');

const connect = require('./schemas');
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const commentRouter = require('./routes/comments');
const port = 5000;

app.use(express.json())

connect();

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/comments', commentRouter);

app.use((req,res,next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => console.log(`listening on port ${port} ~~~!`))
