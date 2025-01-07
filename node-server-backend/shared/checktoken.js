const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // Extract the token and remove the 'Bearer ' prefix
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    // console.log(token, "  token");

    if (!token) {
      return res
        .status(401)
        .send({ message: "Authorization token is missing!" });
    }

    // Verify the token
    jwt.verify(token, "jedentag-secret-key", (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Authorization failed!" });
      }

      // Attach decoded user info to the request object
      req.user = decoded;
      // console.log("Decoded Token:", decoded); // Log the decoded token to ensure it's correct

      next();
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Authorization failed!" });
  }
};
