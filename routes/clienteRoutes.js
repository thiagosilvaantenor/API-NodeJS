const express = require("express");

const {listarClientes, criarCliente, atualizarCliente, deletarCliente} = require("../controllers/clienteController");


const router = express.Router();

router.get("/", listarClientes);
router.post("/", criarCliente);
router.put("/", atualizarCliente);
router.delete("/", deletarCliente);

module.exports = router;