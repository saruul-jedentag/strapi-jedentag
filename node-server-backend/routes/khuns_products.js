const express = require("express");
const pool = require("../shared/pool");
const khuns_products = express.Router();

khuns_products.get("/", (req, res) => {
  const queries = [
    "SELECT * FROM khuns_amttans ORDER BY RANDOM()",
    "SELECT * FROM khuns_amttlagchuuds ORDER BY RANDOM()",
    "SELECT * FROM khuns_kholdoosons ORDER BY RANDOM()",
    "SELECT * FROM khuns_nooshilsons ORDER BY RANDOM()",
    "SELECT * FROM khuns_ogloonii_khools ORDER BY RANDOM()",
    "SELECT * FROM khuns_orgon_khereglees ORDER BY RANDOM()",
    "SELECT * FROM khuns_tsai_cofe_cacaos ORDER BY RANDOM()",
    "SELECT * FROM khuns_undaa_shingens ORDER BY RANDOM()",
  ];

  const productQueries = queries.map((query) => pool.query(query));

  Promise.all(productQueries)
    .then((results) => {
      const combinedProducts = results.flatMap((result) => result.rows);
      res.status(200).json(combinedProducts); // Send combined result as JSON
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
    });
});

module.exports = khuns_products;
