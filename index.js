const express = require("express");
const app = express();

// Estou dizendo para o express usar o EJS como View Engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const nome = "Pedro Emanuel";
    const lang = "Javascript";
    // render() olha diretamente na pasta views, por isso não precisa de direcionamento
    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000
    });
});

app.listen(8080, () => {
    console.log("App rodando!");
})