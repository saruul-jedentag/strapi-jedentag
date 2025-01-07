const express = require("express");
const pool = require("../shared/pool");
const products = express.Router();

// Endpoint to get all products (first 6 items from each table)
products.get("/", (req, res) => {
  // List of queries for each product category, limited to 6 results
  const queries = [
    "SELECT * FROM ger_akhuis ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM ger_akhui_tseverlegees ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM goo_saikhan_aris_archilgaas ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM goo_saikhan_eruul_akhuis ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM khuns_amttans ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM khuns_amttlagchuuds ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM khuns_kholdoosons ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM khuns_nooshilsons ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM khuns_ogloonii_khools ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM khuns_orgon_khereglees ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM khuns_tsai_cofe_cacaos ORDER BY RANDOM() LIMIT 6",
    "SELECT * FROM khuns_undaa_shingens ORDER BY RANDOM() LIMIT 6",
  ];

  // Make queries for all categories
  const productQueries = queries.map((query) => pool.query(query));

  Promise.all(productQueries)
    .then((results) => {
      // Combine all the results (first 6 items from each query)
      const combinedProducts = results.flatMap((result) => result.rows);
      res.status(200).json(combinedProducts); // Send combined result as JSON
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
    });
});

module.exports = products;
