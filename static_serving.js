const express = require("express");

const PORT = 8000;
const app = express();

// Create public folder as a sibling to this current file and place index.html in it
// Additionally you can add javascript and css files too
// Now if you go to "http://localhost:8000/index.html", you'll see the served html file

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(req.query);
  res.json({ status: "ok" });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
