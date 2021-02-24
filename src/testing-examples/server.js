import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello");
});
// export to server.test.js to test server
export { app };
