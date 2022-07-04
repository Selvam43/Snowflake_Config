// server/index.js

const express = require("express");

const PORT = process.env.PORT || 8001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "SNOWFLAKE CONNECT" });
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
app.post("/api", function(req, res){
    res.send(req.body);
});
