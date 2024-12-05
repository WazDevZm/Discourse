const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/signup", async (req, res) => {
  return {};
});

app.post("/login", async (req, res) => {
  return {};
});

app.listen(3001);