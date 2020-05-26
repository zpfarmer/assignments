const db = require("../models");
const Todo = db.Todos;
const OP = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Must have a Todo"
        });
        return
    }

    const todo = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    Todo.create(todo)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "An error occured while creating the Todo Item"
        });
    });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Todo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error occurred while fetching Todos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Todo.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Todo with id " + id
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id;

    Todo.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if(num == 1) {
            res.send({
                message: "Todo was added."
            });
        } else {
            res.send({
                message: "Cannot update Todo. Todo was not found."
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Todo with id = " + id
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;
     
    Todo.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Todo was removed"
            })
        } else {
            res.send({
                message: "Cannot delete Todo. Maybe Todo was not found"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Todo with id= " + id
        })
    })
}

exports.deleteAll = (req, res) => {
    Todo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Todos where deleted` })
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || "Some error occured while trying to delete all Todos"
            })
        })
}

exports.findAllPublished = (req, res) => {
    Todo.findAll({ where: {published: true } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || "Could not retrieve all Todos"
            })
        })
}