import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "relay-server",
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Relay server listening on http://localhost:${PORT}`);
});
