//importa o express
const express = require("express");

//desestrutura as funções necessárias, tiradas do controle
const {
  listarCompras, criarCompra, atualizarCompra, deletarCompra } = require("../controllers/compraController");

  const router = express.Router();

  router.get("/", listarCompras);
  router.post("/", criarCompra);
  router.put("/:id", atualizarCompra);
  router.delete("/:id", deletarCompra);

  module.exports = router;
