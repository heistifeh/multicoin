import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  //get token from cookies
  const token = req.cookies.token;
  if (!token) return next(errorHandler(401, "You are not authenticated because no token"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(401, "You are not authenticated because verification failed"));
    req.user = user;
    next();
  });
};


// basically just collect token and verify, then pass the user to the next middleware
//two guard clauses, if no token and if there is error while jwt.verify.