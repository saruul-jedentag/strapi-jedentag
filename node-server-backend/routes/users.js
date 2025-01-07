const express = require("express");
const pool = require("../shared/pool");
const bcrypt = require("bcryptjs");
const users = express.Router();
const jwtoken = require("jsonwebtoken");

users.post("/signup", async (req, res) => {
  try {
    const { name, phone, password, role } = req.body;

    // Validate input
    if (!name || !phone || !password || !role) {
      console.warn("Missing fields in request body");
      return res.status(400).send({ message: "All fields are required" });
    }

    // Check if phone already exists
    const checkQuery = "SELECT COUNT(*) AS count FROM users WHERE phone = $1";
    const { rows: existingUser } = await pool.query(checkQuery, [phone]);

    // console.log("Result from user check:", existingUser);
    if (existingUser[0].count > 0) {
      return res.status(200).send({ message: "Phone already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const insertQuery =
      "INSERT INTO users (name, phone, password, role) VALUES ($1, $2, $3, $4)";
    await pool.query(insertQuery, [name, phone, hashedPassword, role]);

    res.status(201).send({ message: "success" });
  } catch (error) {
    console.error("Error details:", error.stack); // More detailed logging
    res.status(500).send({
      error: error.code || "Internal Server Error",
      message: error.message,
    });
  }
});

users.post("/login", (req, res) => {
  try {
    const { phone, password } = req.body;

    pool.query(
      "SELECT id, name, phone, password, role FROM users WHERE phone = $1",
      [phone],
      (error, result) => {
        if (error) {
          // Check if the response has already been sent
          if (!res.headersSent) {
            return res
              .status(500)
              .send({ error: error.code, message: error.message });
          }
        } else {
          if (result.rows.length > 0) {
            const user = result.rows[0];
            bcrypt
              .compare(password, user.password)
              .then((compareResult) => {
                if (!res.headersSent) {
                  // Ensure a response is only sent once
                  if (compareResult) {
                    const token = jwtoken.sign(
                      { id: user.id, phone: user.phone },
                      "jedentag-secret-key",
                      { expiresIn: "1h" }
                    );
                    return res.status(200).send({
                      token: token,
                      expiresInSeconds: 3600,
                      user: {
                        name: user.name,
                        phone: user.phone,
                        role: user.role,
                      },
                    });
                  } else {
                    return res
                      .status(401)
                      .send({ message: "Invalid password." });
                  }
                }
              })
              .catch((err) => {
                if (!res.headersSent) {
                  return res
                    .status(500)
                    .send({ error: err.code, message: err.message });
                }
              });
          } else {
            if (!res.headersSent) {
              return res
                .status(401)
                .send({ message: "Бүртгэлтэй утасны дугаар биш байна!" });
            }
          }
        }
      }
    );
  } catch (error) {
    if (!res.headersSent) {
      res.status(400).send({ error: error.code, message: error.message });
    }
  }
});

module.exports = users;
