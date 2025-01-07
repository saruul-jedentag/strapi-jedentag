const express = require("express");
const productCategories = require("./routes/productCategories");
// const khuns_products = require("./routes/kuns_products");
const users = require("./routes/users");
const cors = require("cors");
const app = express();

const PORT = 5001;
const bodyparser = require("body-parser");
const orders = require("./routes/orders");

app.use(
  cors({
    origin: [
      "http://localhost:1338",
      "http://localhost:4200",
      "http://localhost:5001",
    ], // Replace with your frontend domain or IP
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyparser.json());
app.use("/productCategories", productCategories);
// app.use("/khuns_products", khuns_products);
app.use("/users", users);
app.use("/orders", orders);

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log("App is running on the port ", PORT);
});
