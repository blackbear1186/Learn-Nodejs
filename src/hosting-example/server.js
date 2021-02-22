import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Heroku!");
});

// Heroku will pass the port number on process.env.PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

// Run command npx babel ./src/hosting-example/server.js --out-file hosted-server.js
// babel will transpile the file into ES5 javascript and store in a file
