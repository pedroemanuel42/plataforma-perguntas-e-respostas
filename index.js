const express = require('express');
const app = express();

// Estou dizendo para o express usar o EJS como View Engine
app.set('view engine', 'ejs');
// Uso de arquivos estáticos (css, imgs, etc...)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/asksave', (req, res) => {
    res.send('Formulário respondido!')
});

app.listen(8080, () => {
    console.log('App rodando!');
});