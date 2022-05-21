const express = require("express");
const app = express();
const port = 5000;

app.use(express.static(__dirname + "/"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/newWindow.html");
});

app.listen(port, async function () {
  console.log(`Server started on port ${port}`);
});
