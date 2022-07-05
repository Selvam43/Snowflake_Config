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
app.post("/", function(req, res){
    const { Text } = req.body;
    res.send(Text);
    console.log(req.body);      // your JSON
   res.send(req.body);
});
