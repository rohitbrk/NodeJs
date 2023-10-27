import express from "express";

const PORT = 5000;
const app = express();

app.get("/:admin", (req, res) => {
  console.log(req.params.admin.split(","));
  console.log(JSON.parse(req.query.b));
  console.log(req.query.a);
  console.log(req.query.c);
  res.json({ status: "ok" });
});

// if we hit
// http://localhost:3000/admin1,admin2,admin3?b={"name":"ram","age":"10"}&a=1,2,3&c=10

// output
// [ 'admin1', 'admin2', 'admin3' ]
// { name: 'ram', age: '10' }
// 1,2,3
// 10

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

console.log(JSON.stringify({ b: "ram" }));

// (async () => {
//   const response = await fetch("http://localhost:3000/");
//   const data = await response.json();
//   console.log(data);
// })();
