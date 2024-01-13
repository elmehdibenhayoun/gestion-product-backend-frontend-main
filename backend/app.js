const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const productrouter = require("./routes/products.routes");
const categoryRouter = require("./routes/categories.routes");
const loginRouter = require("./routes/login.routes");
const mongoose = require("mongoose");
const dotevn = require("dotenv");
dotevn.config();

const URL =
  "mongodb+srv://mbenhayoun:1qs1wjCgiuQTFENY@cluster0.qgmkbn6.mongodb.net/db_catalogue?retryWrites=true&w=majority";
mongoose
  .connect(URL)
  .then((result) => app.listen(5000, () => console.log("server running")))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/products", productrouter);
app.use("/categories", categoryRouter);
app.use("/", loginRouter);
