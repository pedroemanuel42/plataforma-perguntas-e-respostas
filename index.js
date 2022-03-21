const express = require("express");
const app = express();

// Estou dizendo para o express usar o EJS como View Engine
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    const nome = req.params.nome;
    const lang = req.params.lang;
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