const { constants } = require("../constants");
// const cors = require("cors"); // Import the CORS middleware

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
     // break; 
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
     // break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      //break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
     // break;
    default:
      console.log("No Error, All good !");
      break;
  }
};

// // Add CORS middleware before your errorHandler middleware
// const corsOptions = {
//   origin: 'http://localhost:3000', // Allow requests from localhost:3000
// };
// const corsMiddleware = cors(corsOptions);

// module.exports = [corsMiddleware, errorHandler]; // Export both middlewares

module.exports = errorHandler;