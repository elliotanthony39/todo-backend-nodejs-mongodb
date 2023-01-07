const { Router } = require("express");

const {
  onServer,
  getTasks,
  recycling,
} = require("../controllers/index.controllers");

const {
  getTasksApi,
  saveTaskApi,
  editTaskApi,
  deleteTaskApi,
  taskToggleDoneApi,
} = require("../controllers/api");

const routes = Router();

// Index routes
routes.get("/", onServer);

routes.get("/tasks", getTasks);

routes.delete("/tasks/:author/delete", recycling);

// Api routes
routes.get("/api/tasks", getTasksApi);

routes.post("/api/tasks/add", saveTaskApi);

routes.put("/api/tasks/:id/edit", editTaskApi);

routes.put("/api/tasks/:id/toggleDone", taskToggleDoneApi);

routes.delete("/api/tasks/:id/delete", deleteTaskApi);

module.exports = routes;
