const express = require("express");
const pool = require("../shared/pool");

const productCategories = express.Router();

productCategories.get("/", (req, res) => {
  pool.connect((err, client, release) => {
    if (err) {
      res.status(500).send("Error connecting to the database");
    } else {
      pool.query("select * from menus", (error, menus) => {
        if (error) {
          res.status(500).send(error);
        } else {
          // console.log(menus.rows[0].main_menu);
          res.status(200).send(menus.rows[0].main_menu);
        }
      });
    }
    release();
  });
});

module.exports = productCategories;
