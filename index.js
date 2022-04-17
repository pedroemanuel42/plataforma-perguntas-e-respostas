const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Ask = require('./database/Ask');

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!');
    })
    .catch( (err) => {
        console.log(err);
    })

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    Ask.findAll({ raw: true, order:[
        ['id', 'DESC']
    ]}).then(asks => {
        res.render('index', {
            asks: asks
        });
    });
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/asksave', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    Ask.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect('/');
    });
});

app.get('/ask/:id', (req, res) => {
    const id = req.params.id;
    Ask.findOne({
        where: {
            id: id
        }
    }).then(ask => {
        if(ask != undefined) {
            res.render('ask-id');
        } else {
            res.redirect('/');
        }
    });
});

app.listen(8080, () => {
    console.log('App rodando!');
});
