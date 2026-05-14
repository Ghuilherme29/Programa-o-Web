const express = require("express");
const cors = require ("cors");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize ("db_api", "root", '', {
    host: 'localhost',
    dialect: 'mysql'
});


// 2. DEFININDO O MODELO DE DADOS
// COMO DEVE SER A TABELA NO BANCO DE DADOS
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

// 4. ROTAS
// ROTA GET - LISTAR TODOS OS CLIENTES

app.get('/clientes', async (req,res)=> {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({error: 'Erro ao busar clientes'})
    }   
    
});

// ROTA POST - CRIAR UM NOVO CLIENTE
app.post('/Clientes', async (req, res) =>{
    const {nome, email, telefone} = req.body;
    try {
        const novoCliente = await Cliente.create({ nome, email, telefone});
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente'})
    }
});

// 5. INICIANDO O SERVIDOR E SICRONIZANDO COM O BANCO DE DADOS
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        console.log( 'Banco de dados sicronizado com sucesso!');
    });
}).catch(error => {
    console.error('Erro ao conectar com o banco de dados:', error);
});