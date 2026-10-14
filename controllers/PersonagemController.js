import express from "express";

import Personagem from "../models/Personagem.js";

const router = express.Router();

const personagens = [
  {
    nome: "Frodo Bolseiro",
    raca: "Hobbit",
    origem: "Condado",
    papel: "Portador do Um anel",
  },
  {
    nome: "Samwise Gamgee",
    raca: "Hobbit",
    origem: "Condado",
    papel: "Companheiro de Frodo",
  },
  {
    nome: "Gandalf",
    raca: "Maia",
    origem: "Valinor",
    papel: "Mago da Sociedade do Anel",
  },
  {
    nome: "Aragorn",
    raca: "Humano",
    origem: "Gondor",
    papel: "Herdeiro do trono de Gondor",
  },
  {
    nome: "Legolas",
    raca: "Elfo",
    origem: "Reino da Floresta",
    papel: "Arqueiro da Sociedade do Anel",
  },
];

router.get("/personagens", function (req, res) {
  Personagem.findAll()
    .then((personagens) => {
      res.render("personagens", {
        personagens: personagens,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os personagens: Erro: ${error}`);
    });
});

router.post("/personagens/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const raca = req.body.raca;
  const origem = req.body.origem;
  const papel = req.body.papel;

  Personagem.create({
    nome: nome,
    raca: raca,
    origem: origem,
    papel: papel,
  })
    .then(() => {
      res.redirect("/personagens");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o personagem. Erro: ${error}`);
    });
});

router.get("/personagens/excluir/:id", (req, res) => {
  const id = req.params.id;

  Personagem.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/personagens");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o personagem. Erro: ${error}`);
    });
});

router.get("/personagens/editar/:id", (req,res) => {
  const id = req.params.id;

  Personagem.findByPk(id)
    .then((personagem) => {
      res.render("personagemEditar",
        { personagem: personagem},
      );
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o personagem. Erro ${error}`);
    });
});

router.post("/personagens/alterar", (req,res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const raca = req.body.raca;
  const origem = req.body.origem;
  const papel = req.body.papel;

  Personagem.update(
    {
      nome: nome,
      raca: raca,
      origem: origem,
      papel: papel,
    },
    { where: {id: id}}
  ).then(() => {
    res.redirect("/personagens");
  }).catch((error) => {
    console.log(`Ocorreu um erro ao editar o personagem. Erro: ${error}`);
  });
});

export default router;
