const express = require("express");
const app = express();
const { connectDB, getDB } = require("./db");
const cors = require("cors");
const { login, adminLogin } = require('./user')

app.use(express.json());
app.use(cors());

connectDB();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.post("/register", async (req, res) => {
  let cnt;
  try {
    const db = getDB();
    cnt = await db.collection("users").find().count();

    data = {
      _id: cnt + 1,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.first_name,
      lastName: req.body.last_name,
    };

    try {
      const mail = data.email;
      const user = await db.collection("users").findOne({ email: mail });

      if (user) {
        console.log("user exsists");
        return res.status(400).json({ msg: "User already exists" });
      }

      await db.collection("users").insertOne(data);

      res.json({ msg: "User created" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } catch (err) {
    console.log(err.message);
  }
});

//contact

app.post("/contact", async (req, res) => {
  let cnt;
  try {
    const db = getDB();
    cnt = await db.collection("contact").find().count();

    data = {
      _id: cnt + 1,
      name: req.body.name,
      email: req.body.email,
      text: req.body.text,
    }
    try {

      await db.collection("contact").insertOne(data);
      res.json({ msg: "message sent" });

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } catch (err) {
    console.log(err.message);
  }
})

app.get('/contact', async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection("contact").find().toArray();

    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

//login details

app.get("/users", async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection("users").find().toArray();

    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


app.post("/adminLogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await adminLogin(email, password);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ error: "Invalid credentials" });
  }
});



app.listen(5000, () => {
  console.log("Server started on port 5000");
});
