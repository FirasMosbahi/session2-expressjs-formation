class CustomHttpError extends Error{
    statusCode;
    constructor(statusCode , message) {
        super(message);
        this.statusCode = statusCode;
    }
    static InternalServerError(message) {
        return new CustomHttpError(500 , message ?? 'Internal server error')
    }
    static NotFoundError(message) {
        return new CustomHttpError(404 , message ?? 'Internal server error')
    }
    static ConflictError(message) {
        return new CustomHttpError(409 , message ?? 'Internal server error')
    }
    static BadRequestError(message) {
        return new CustomHttpError(400 , message ?? 'Internal server error')
    }
}

function errorHandlingMiddleware(err,req,res,next){
    console.log(err.stack)
    res.status(err.statusCode).json({error : err.message})
}

module.exports ={CustomHttpError , errorHandlingMiddleware}