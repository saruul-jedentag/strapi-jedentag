const express = require("express");
const pool = require("../shared/pool");
const goo_saikhan = express.Router();

goo_saikhan.get("/", (req, res) => {
  // List of queries
  const queries = [
    "SELECT * FROM goo_saikhan_aris_archilgaas ORDER BY RANDOM()",
    "SELECT * FROM goo_saikhan_eruul_akhuis ORDER BY RANDOM()",
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

module.exports = goo_saikhan;
