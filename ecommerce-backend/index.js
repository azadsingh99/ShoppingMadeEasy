const express = require('express');
const app = express();
const PORT = 3001;
const userRouter = require('./routes/user');
// require('./repository/mongoDbConfig');


app.use(userRouter);
app.listen(PORT, () => {
    console.log('server is running on ', PORT);
});