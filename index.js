const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Estou dizendo para o express usar o EJS como View Engine
app.set('view engine', 'ejs');
// Uso de arquivos estáticos (css, imgs, etc...)
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/asksave', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    res.send(`Formulário respondido! Título: ${title} Descrição: ${description}.`)
});

app.listen(8080, () => {
    console.log('App rodando!');
});