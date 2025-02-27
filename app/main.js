const express = require("express");

const PORT = 3000;
const pagesDir = `${__dirname}/pages/`;

const app = express();

// Todos os arquivos públicos estão na pasta 'public'
app.use(express.static(`${__dirname}/public/`));

// Quando o usuário acessar o site na página principal ('/'), envia o arquivo home.html
app.get("/", (req, res) => {
    res.sendFile(`${pagesDir}/home.html`);
});

// Inicia o servidor
app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log("Servidor rodando!");
    console.log("http://localhost:" + PORT);
});
