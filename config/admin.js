module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "086Ywnrg9bDx6K71+H07Hg=="),
  },
  url: "/dashboard", // localhost:1337/dashboard
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
