// server/index.js

const express = require("express");

const PORT = process.env.PORT || 8001;

const cors = require('cors');

const app = express();

app.use(cors());
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
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



app.get("/api", (req, res) => {
  res.json({ message: "Login" });
});