import express from "express";

import Local from "../models/Local.js";

const router = express.Router();

const locais = [
  {
    nome: "Condado",
    regiao: "Eriador",
    habitantes: "Hobbits",
    descricao: "Uma região tranquila, verde e agrícola.",
  },
  {
    nome: "Valfenda",
    regiao: "Eriador",
    habitantes: "Elfos",
    descricao: "Um refúgio élfico governado por Elrond.",
  },
  {
    nome: "Gondor",
    regiao: "Sul da Terra-média",
    habitantes: "Humanos",
    descricao: "Um dos grandes reinos dos homens.",
  },
  {
    nome: "Rohan",
    regiao: "Centro da Terra-média",
    habitantes: "Rohirrim",
    descricao: "Reino conhecido por seus cavaleiros.",
  },
  {
    nome: "Mordor",
    regiao: "Leste da Terra-média",
    habitantes: "Orcs",
    descricao: "Território sombrio onde fica a Montanha da Perdição.",
  },
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

router.post("/locais/cadastrar", (req, res) => {
  const local = req.body.local;
  const regiao = req.body.regiao;
  const habitantes = req.body.habitantes;
  const descricao = req.body.descricao;

  Local.create({
    local: local,
    regiao: regiao,
    habitantes: habitantes,
    descricao: descricao,
  })
    .then(() => {
      res.redirect("/locais");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o local. Erro: ${error}`);
    });
});

// Rota de excluir
router.get("/locais/excluir/:id", (req, res) => {
  const id = req.params.id;

  Local.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/locais");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir. Erro: ${error}`);
    });
});

router.get("/locais/editar/:id", (req, res) => {
  // Coletando o parametro do URL
  const id = req.params.id;
  // Buscando o cliente no banco pela ID
  Local.findByPk(id)
    .then((local) => {
      res.render("localEditar", {
        // Enviando um objeto com os dados do cliente para a pagina
        local: local,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o local. Erro ${error}`);
    });
});

router.post("/locais/alterar", (req, res) => {
  // Coletando os dados do formulario
  const id = req.body.id;
  const local = req.body.local;
  const regiao = req.body.regiao;
  const habitantes = req.body.habitantes;
  const descricao = req.body.descricao;
  //chamando o model e pedindo para alterar no banco de dados

  Local.update(
    {
      local: local,
      regiao: regiao,
      habitantes: habitantes,
      descricao: descricao,
    },
    { where: { id: id } },
  )
    .then(() => {
      res.redirect("/locais");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao editar o locais. Erro: ${error}`);
    });
});

export default router;
