import express from "express";

import Local from "../models/Local.js";

const router = express.Router();

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

router.get("/locais", function (req, res) {
  Local.findAll()
    .then((locais) => {
      res.render("locais", {
        // Enviando a lista de clientes para a página HTML
        locais: locais,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os locais: Erro: ${error}`);
    });
});

router.post("/locais/cadastrar", (req,res) => {
    const local = req.body.local;
    const regiao = req.body.regiao;
    const habitantes = req.body.habitantes;
    const descricao = req.body.descricao;

    Local.create({
        local: local,
        regiao: regiao,
        habitantes: habitantes,
        descricao: descricao
    }).then(() => {
      res.redirect("/locais");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o local. Erro: ${error}`);
    });
})

export default router;