import express from "express";

const server = express();

server.get("/", (req, res) => {
  return res.send("Oieee dev");
});

export { server };

server.listen(3333, () => {});
