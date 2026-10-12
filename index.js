// Importando o express
const express = require("express");
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

app.use(express.static("public")); //Puxando pasta publica

app.get("/", function (req, res) {
  res.render("index");
});

const personagens = [
  {
    nome: "Frodo Bolseiro",
    raca: "Hobbit",
    origem: "Condado",
    papel: "Portador do Um anel"
  },
  {
        nome: "Samwise Gamgee",
        raca: "Hobbit",
        origem: "Condado",
        papel: "Companheiro de Frodo"
    },
    {
        nome: "Gandalf",
        raca: "Maia",
        origem: "Valinor",
        papel: "Mago da Sociedade do Anel"
    },
    {
        nome: "Aragorn",
        raca: "Humano",
        origem: "Gondor",
        papel: "Herdeiro do trono de Gondor"
    },
    {
        nome: "Legolas",
        raca: "Elfo",
        origem: "Reino da Floresta",
        papel: "Arqueiro da Sociedade do Anel"
    }
];

app.get("/personagens", function (req, res) {
  res.render("personagens", { personagens });
});


const locais = [
    {
        nome: "Condado",
        regiao: "Eriador",
        habitantes: "Hobbits",
        descricao: "Uma região tranquila, verde e agrícola."
    },
    {
        nome: "Valfenda",
        regiao: "Eriador",
        habitantes: "Elfos",
        descricao: "Um refúgio élfico governado por Elrond."
    },
    {
        nome: "Gondor",
        regiao: "Sul da Terra-média",
        habitantes: "Humanos",
        descricao: "Um dos grandes reinos dos homens."
    },
    {
        nome: "Rohan",
        regiao: "Centro da Terra-média",
        habitantes: "Rohirrim",
        descricao: "Reino conhecido por seus cavaleiros."
    },
    {
        nome: "Mordor",
        regiao: "Leste da Terra-média",
        habitantes: "Orcs",
        descricao: "Território sombrio onde fica a Montanha da Perdição."
    }
];

app.get("/locais", function (req, res) {
  res.render("locais", { locais });
});

const filmes = [
    {
        titulo: "A Sociedade do Anel",
        ano: 2001,
        diretor: "Peter Jackson",
        duracao: "178 minutos"
    },
    {
        titulo: "As Duas Torres",
        ano: 2002,
        diretor: "Peter Jackson",
        duracao: "179 minutos"
    },
    {
        titulo: "O Retorno do Rei",
        ano: 2003,
        diretor: "Peter Jackson",
        duracao: "201 minutos"
    },
    {
        titulo: "Uma Jornada Inesperada",
        ano: 2012,
        diretor: "Peter Jackson",
        duracao: "169 minutos"
    },
    {
        titulo: "A Desolação de Smaug",
        ano: 2013,
        diretor: "Peter Jackson",
        duracao: "161 minutos"
    }
];

app.get("/filmes", function (req, res) {
  res.render("filmes", { filmes });
});

// Informando a porta que será utilizada
app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${8080}`);
  }
});
