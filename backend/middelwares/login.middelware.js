// auth.middleware.js

const jwt = require("jsonwebtoken");
const dotevn = require("dotenv");

dotevn.config();

async function jwtVerify(req, res, next) {
  const token = req.headers.authorization;
  console.log(token);
  jwt.verify(token, process.env.SECRET_KEY, (error, data) => {
    if (error) {
      res.status(401).json("Authorization problem");
    } else {
      req.user = {
        "email": data.email,
        "role": data.role, // Include role in req.user
        "verified": true
      };
      next();
    }
  });
}

module.exports = { jwtVerify };
