const Task = require("../models/Task");

const repo = "https://github.com/elliotanthony39/todo-backend-nodejs-mongodb";

function onServer(req, res) {
  try {
    res.send(
      `<div><a href=${repo}>About this CRUD project</><a href="/tasks">Get Tasks</a></div>`
    );
  } catch (error) {
    console.error({ error: error.message });
  }
}

async function getTasks(req, res) {
  try {
    const tasks = await Task.find().lean();
    res.json({ results: tasks });
  } catch (error) {
    console.error({ error: error.message });
  }
}

async function recycling(req, res) {
  try {
    const { author } = req.params;
    if (author === "invited") {
      await Task.deleteMany({ author: author });
      res.send("Data clean");
    } else {
      res.send(
        "Author not found or you dont have permission to delete this author"
      );
    }
  } catch (error) {
    console.error({ error: error.message });
  }
}

module.exports = {
  onServer,
  getTasks,
  recycling,
};
