import express from "express";

const app = express();

const port = 3000;

// watch out for json payloads and add them to the request
app.use(express.json());

app.get("/hello", (req, res) => {
  console.log("Received a get request on the path /hello");
  res.send("Hello from express");
});

const users = [
  {
    id: "234",
    name: "Berlin",
  },
  {
    id: "983",
    name: "Atsuko",
  },
];
app.get("/users", (req, res) => {
  // load users data from database
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);
  res.send(user);
});

app.post('/users', (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
})

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});

//curl -XPOST -H "Content-Type: application/json" -d '{"id": "345", "name": "Bob Brown" }' localhost:3000/users