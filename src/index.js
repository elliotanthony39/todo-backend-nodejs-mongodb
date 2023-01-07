const app = require("./app");
const { PORT } = process.env;
require("./database");

app.listen(PORT, () => {
  console.log("server on port " + PORT);
});
