const express = require("express");

const PORT = 3000;
const app = express();

// create public folder and place index.html file in it
// additionally you can add javascript and css files too in the public folder
// now if you go to "www.yourWebsite.com/index.html", you'll see the served html file
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(req.query);
  res.json({ status: "ok" });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
