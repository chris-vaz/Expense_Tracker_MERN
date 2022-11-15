const routes=require('express').Router();
const controller=require('../controllers/expense.controller')

routes.route('/api/categories')
    .post(controller.get_categories) ;


module.exports=routes;
