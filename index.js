// require your server and launch it

const server = require("./api/server");

const PORT = 5500;

server.listen(PORT, () => {
  console.log("listening on", PORT);
});
