const express = require("express");
const app = express();

// Estou dizendo para o express usar o EJS como View Engine
app.set('view engine', 'ejs');
// Uso de arquivos estáticos (css, imgs, etc...)
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
    const nome = req.params.nome;
    const lang = req.params.lang;
    const showMsg = true;

    const products = [
        {name: 'Doritos', price:3.14},
        {name: 'Coca-cola', price:5},
        {name: 'Leite', price:1.45},
        {name: 'Carne', price: 15},
        {name: 'Redbull', price: 6},
        {name: 'Nescau', price: 4}
    ];

    // render() olha diretamente na pasta views, por isso não precisa de direcionamento
    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: showMsg,
        products: products
    });
});

app.listen(8080, () => {
    console.log("App rodando!");
})