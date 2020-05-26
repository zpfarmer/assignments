module.exports = app => {
    const todos = require("../controllers/todoControllers.js")

    var router = require("express").Router();

    router.post("/", todos.create);

    router.get("/", todos.findAll);

    router.get("/published", todos.findAllPublished);

    router.get("/:id", todos.findOne);

    router.put("/:id", todos.update)

    router.delete("/:id", todos.delete)

    router.delete("/", todos.deleteAll)

    app.use('/api/todos', router)
}