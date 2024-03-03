const express = require('express');
const {requestLogger, requestTimeCalculator} = require("./middlewares/request-logger");
const {errorHandlingMiddleware, CustomHttpError} = require("./middlewares/error-handling middleware");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(requestLogger , requestTimeCalculator)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!', status: 'Success' });
});

app.get('/error' , (req,res , next) => {
    throw CustomHttpError.InternalServerError()
})

app.use(errorHandlingMiddleware)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});