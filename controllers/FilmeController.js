import express from "express";

const router = express.Router();

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

router.get("/filmes", function (req, res) {
  res.render("filmes", { filmes });
});

export default router;