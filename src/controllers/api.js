const Task = require("../models/Task");

async function getTasksApi(req, res) {
  try {
    const tasks = await Task.find().lean();
    res.json({ results: tasks });
  } catch (error) {
    console.error({ error: error.message });
  }
}

async function saveTaskApi(req, res) {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    console.log(taskSaved);
    res.send("Saved");
  } catch (error) {
    console.error({ error: error.message });
  }
}

async function editTaskApi(req, res) {
  try {
    const { id } = req.params;
    await Task.updateOne({ _id: id }, req.body);
    res.send("Succes edit task");
  } catch (error) {
    console.error({ error: error.message });
  }
}

async function deleteTaskApi(req, res) {
  let { id } = req.params;
  await Task.remove({ _id: id });
  res.send("Succes remove task");
}

async function taskToggleDoneApi(req, res) {
  try {
    let { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.send("Done changed");
  } catch (error) {
    console.error({ error: error.message });
  }
}

module.exports = {
  getTasksApi,
  saveTaskApi,
  editTaskApi,
  deleteTaskApi,
  taskToggleDoneApi,
};
