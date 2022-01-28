const express = require("express");
const { Deta } = require("deta");

const deta = Deta("myProjectKey"); // configure your Deta project
const db = deta.Base("toDoDB"); // access your DB

const app = express(); // instantiate express

app.use(express.json()); // for parsing application/json bodies

app.post("/users", async (req, res) => {
  const { name, age, hometown } = req.body;
  const toCreate = { name, age, hometown };
  const insertedUser = await db.put(toCreate); // put() will autogenerate a key for us
  res.status(201).json(insertedUser);
});

export {};
