const express = require("express");
const { rateLimiter } = require("./Middleware/RateLimiter");

const app = express();

app.use(express.json());
app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send(`Hello ${req.body.count}`);
});

app.listen(8081, () => {
  console.log(`Server running at port 8081`);
});
