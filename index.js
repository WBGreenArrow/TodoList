const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const TodoList = require('./database/Todo.js');
const connection = require('./database/connection.js')

connection.authenticate()
    .then(() => {
        console.log("a conexão com banco de dados foi um sucesso")
    }).catch(() =>{
        console.log("Um Erro aconteceu")
    });

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static("public"))

app.get("/", function(req, res){
    
    TodoList.findAll({raw:true})
        .then((tarefas) =>{
        var tarefa = tarefas

        res.render("index",{
            tarefa:tarefa
    })
  
    });
})


app.post("/tododeleted", function(req, res){

    var bodyId = req.body.delete

    console.log(bodyId)

    TodoList.destroy({
        where: {
          id: bodyId
        }
        
      });


    res.redirect("/")

})




app.post("/todolist",function(req, res){

    var tarefa2 = req.body.tarefa
    console.log(tarefa2)

    TodoList.create({
        tarefa:tarefa2
    })

    res.redirect("/")
})






app.listen(3033);