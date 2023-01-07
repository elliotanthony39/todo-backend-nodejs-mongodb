const { connect, set } = require("mongoose");
const { DB_USER, DB_PASSWORD } = process.env;

(async () => {
  try {
    set("strictQuery", false);
    const db = await connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.r4ajwcn.mongodb.net/test`
    );
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
