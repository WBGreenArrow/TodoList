const Sequelize = require('sequelize');
const connection = require('./connection');

    const TodoList = connection.define('TodoList',{
        tarefa:{
            type: Sequelize.TEXT,
            allowNull:false
        }
    }
        
    ); 
    TodoList.sync({ force: false })

    module.exports = TodoList;