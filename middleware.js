import express from "express";

const PORT = 5000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

const checkAge = (req, res, next) => {
  if (req.query.age <= 18) res.json({ status: "error" });
  next();
};

app.get("/api/test", checkAge, (req, res) => {
  res.json({ status: "ok" });
});

// http://localhost:5000/api/test?age=12  
// output - { status : "error" }

// http://localhost:5000/api/test?age=20 
// output - { status : "ok" }

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
