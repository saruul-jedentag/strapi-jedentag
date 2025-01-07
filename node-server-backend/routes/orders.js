const express = require("express");
const pool = require("../shared/pool");
const orders = express.Router();
const checkToken = require("../shared/checktoken");

orders.post("/add", checkToken, async (req, res) => {
  const client = await pool.connect(); // Assuming you are using connection pooling
  try {
    const { name, phone, total, orderDetails } = req.body;

    // Use phone from the token instead of the body
    const phoneFromToken = req.user.phone;

    const userQuery =
      "SELECT id, name, phone, password FROM users WHERE phone = $1";
    const userResult = await client.query(userQuery, [phoneFromToken]);

    if (userResult.rows.length === 0) {
      return res.status(401).send({ message: "User doesn't exist." });
    }

    const userId = userResult.rows[0].id;

    const insertOrderQuery = `
      INSERT INTO orders (userid, name, phone, total)
      VALUES ($1, $2, $3, $4)
      RETURNING orderid;
    `;
    const orderResult = await client.query(insertOrderQuery, [
      userId,
      name,
      phone,
      total,
    ]);

    const orderId = orderResult.rows[0].orderid;

    const detailsQuery = `
      INSERT INTO orderdetails (orderid, productid, qty, une, amount, name, img)
      VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    for (const item of orderDetails) {
      await client.query(detailsQuery, [
        orderId,
        item.productid,
        item.qty,
        item.une,
        item.amount,
        item.name,
        item.img,
      ]);
    }

    await client.query("COMMIT");
    res.status(201).send({ message: "Order added successfully." });
  } catch (error) {
    await client.query("ROLLBACK");
    res.status(500).send({ error: error.code, message: error.message });
  } finally {
    client.release();
  }
});

orders.get("/allorders", checkToken, (req, res) => {
  try {
    const userPhone = req.query.phone;

    // Query to get user role and ID based on phone
    pool.query(
      "SELECT id, role FROM users WHERE phone = $1",
      [userPhone],
      (error, result) => {
        if (error) {
          return res.status(500).send({
            error: error.code,
            message: error.message,
          });
        }

        if (result.rows.length > 0) {
          const { id: userId, role } = result.rows[0];

          // Construct the base query
          let query = `
            SELECT 
              orderId, 
              TO_CHAR(orderDate, 'YYYY/MM/DD') AS orderDate, 
              name, 
              phone, 
              total 
            FROM orders`;

          // If the user's role is 'admin', fetch all orders
          // If the user is not an admin, filter orders by userId
          if (role !== "admin") {
            query += " WHERE userId = $1";
          }

          // Query for getting orders
          pool.query(
            query,
            role === "admin" ? [] : [userId], // Admin passes an empty array, else pass userId
            (ordersError, ordersResult) => {
              if (ordersError) {
                return res.status(500).send({
                  error: ordersError.code,
                  message: ordersError.message,
                });
              }

              // Map orders to the desired response format
              const allOrders = ordersResult.rows.map((order) => ({
                orderId: order.orderid,
                name: order.name,
                phone: order.phone,
                total: order.total,
                orderDate: order.orderdate,
              }));

              return res.status(200).send(allOrders);
            }
          );
        } else {
          return res.status(404).send({
            message: "Хэрэглэгч олдохгүй байна", // User not found
          });
        }
      }
    );
  } catch (error) {
    res.status(500).send({
      error: error.code || "UNKNOWN_ERROR",
      message: error.message || "Алдаа гарлаа", // Error occurred
    });
  }
});

// only userId
orders.get("/allord", checkToken, (req, res) => {
  try {
    let userPhone = req.query.phone;

    // Query for getting user ID based on email
    pool.query(
      "SELECT id FROM users WHERE phone = $1",
      [userPhone],
      (error, result) => {
        if (error) {
          return res.status(500).send({
            error: error.code,
            message: error.message,
          });
        }
        if (result.rows.length > 0) {
          let userId = result.rows[0].id;

          // Query for getting all orders for the user
          pool.query(
            `SELECT 
              orderId, 
              TO_CHAR(orderDate, 'YYYY/MM/DD') AS orderDate, 
              name, 
              phone, 
              total 
            FROM orders 
            WHERE userId = $1`,
            [userId],
            (error, ordersResult) => {
              if (error) {
                return res.status(500).send({
                  error: error.code,
                  message: error.message,
                });
              }

              const allOrders = ordersResult.rows.map((order) => ({
                orderId: order.orderid,
                name: order.name,
                phone: order.phone,
                total: order.total,
                orderDate: order.orderdate,
              }));

              return res.status(200).send(allOrders);
            }
          );
        } else {
          return res.status(404).send({
            message: "Хэрэглэгч олдохгүй байна",
          });
        }
      }
    );
  } catch (error) {
    console.log(error, "  error");
    res.status(400).send({
      error: error.code,
      message: error.message,
    });
  }
});

orders.get("/orderproducts", checkToken, (req, res) => {
  try {
    let orderId = req.query.orderId;

    // Parameterized query to prevent SQL injection
    const query = `SELECT * FROM orderdetails WHERE orderid = $1`;

    pool.query(query, [orderId], (error, result) => {
      if (error) {
        return res.status(500).send({
          error: error.code,
          message: error.message,
        });
      }
      // Transforming the query results into desired format
      const orderDetails = result.rows.map((orderProduct) => ({
        productId: orderProduct.productid,
        productName: orderProduct.name,
        productImage: orderProduct.img,
        qty: orderProduct.qty,
        une: orderProduct.une,
        amount: orderProduct.amount,
      }));

      return res.status(200).send(orderDetails);
    });
  } catch (error) {
    res.status(400).send({
      error: error.code,
      message: error.message,
    });
  }
});

module.exports = orders;
