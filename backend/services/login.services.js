const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotevn = require("dotenv");

dotevn.config();

async function saveUser(user) {
  // if (user.role === "admin" && !req.user || req.user.role !== "admin") {
  //   throw new Error("Vous n'avez pas l'autorisation de créer un administrateur.");
  // }
  // Hash password, set default role to "user"
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.role = user.role || "user"; // Set default role if not provided
  return await User.create(user);
}

async function loginService(loginData) {
  const user = await User.findOne({ email: loginData.email });
  if (user) {
    const res = await bcrypt.compare(loginData.password, user.password);
    if (res) {
      const token = jwt.sign(
        {
          email: user.email,
          role: user.role, // Include role in the token payload
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
      return token;
    } else {
      console.log("Incorrect password");
    }
  } else {
    console.log("User does not exist");
  }
}

module.exports = { saveUser, loginService };
