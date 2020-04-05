'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todoListController');
    const SuppliersController = require("../controllers/SuppliersController");
    const ProductsController = require("../controllers/ProductsController");


    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/suppliers')
        .get(SuppliersController.listAllSuppliers)
        .post(todoList.create_a_task);

    app.route('/suppliers/delivery_time')
        .get(SuppliersController.getSuppliersAndDeliveryTimeByProduct)
        .post(todoList.create_a_task);

    app.route('/products/delivery_defective')
        .get(ProductsController.getDefectedDeliveryByProducts)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};