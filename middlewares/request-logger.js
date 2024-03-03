function requestLogger(req,res,next) {
    const currentDatetime = new Date();
    const formattedDate = currentDatetime.toISOString();

    const log = `Time: ${formattedDate} - Method: ${req.method} - URL: ${req.originalUrl} - IP: ${req.ip}`;
    console.log(log);

    next();
}

function requestTimeCalculator(req,res,next){
    const startHrTime = process.hrtime();

    res.on('finish', () => {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedTimeInMs = (elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6).toFixed(3);
        console.log(`Response Time: ${elapsedTimeInMs}ms`);
    });

    next();
}

module.exports = {requestLogger , requestTimeCalculator}