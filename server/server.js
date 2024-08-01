//Dependências do servidor
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mysql = require('mysql2');

//Importação da configuração da conexão mysql e função response.
const funcoes = require('../config/functions.js');
const mySqlConfig = require('../config/mySqlConfig.js');

//Criando conexão com o banco de dados.
const conection = mysql.createConnection(mySqlConfig);

//Verificação para saber se a conexão foi efetuada com sucesso!
conection.connect(error=>{
    if(error){
        console.log(`Erro na conexão com o banco de dados $${mySqlConfig.stack} `);
        console.log(error.stack);
    }else{
        console.log(`Conexão efetuada com o MySql com sucesso!`)
    }
})

//Utilizando a middleware cors 
app.use(cors());


//Endpoints

//Consultando o banco de dados
app.get('/users',(req,res)=>{
    conection.query('SELECT * FROM usuarios',(err,results)=>{
        let response = null;
        if(err){
            response = funcoes.response('Error!','Erro na consulta dos dados',null);
            res.json(response);
        }else{
            response = funcoes.response('Sucesso!!!','Sucesso na obtenção dos dados',results);
            res.json(response);
            
        }
    })
})



//Consultar um usuário específico
app.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    conection.query('SELECT * FROM usuarios WHERE id_usuario = ?',[id],(err,results)=>{
        let response = null;
        if(err){
            response = funcoes.response('Error!','Erro na consulta dos dados',null);
            res.json(response);
        }else{
            response = funcoes.response('Sucesso!!!','Sucesso na obtenção dos dados',results);
            res.json(response);
            
        }
    })
})
app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:3000;`);
})