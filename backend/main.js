const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { addUser, selectUser } = require("./user");
app.get("/Users", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});
app.post("/add-users", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "meassage added" });
});

app.listen(4000, () => console.log("successful"));
