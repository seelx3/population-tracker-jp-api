const express = require("express");
const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const app = express();
const db = new sqlite3.Database("./data.sqlite");

const API_KEY = process.env.API_KEY;

app.use(express.json());

app.get("/api/v1/prefectures", (req, res) => {
  const apiKey = req.header("x-api-key");
  if (apiKey !== API_KEY) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const query = `SELECT value FROM kv_store WHERE key = ?`;

  db.get(query, ["prefectures"], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!row) {
      return res
        .status(404)
        .json({ error: "Data not found for key: prefectures" });
    }

    res.json(JSON.parse(row.value));
  });
});

app.get("/api/v1/population/composition/perYear", (req, res) => {
  const apiKey = req.header("x-api-key");
  if (apiKey !== API_KEY) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const { cityCode, prefCode } = req.query;

  if (cityCode !== "-" || !prefCode) {
    return res.status(400).json({ error: "Invalid query parameters" });
  }

  const key = prefCode;
  const query = `SELECT value FROM kv_store WHERE key = ?`;

  db.get(query, [key], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!row) {
      return res.status(404).json({ error: `Data not found for key: ${key}` });
    }

    res.json(JSON.parse(row.value));
  });
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
