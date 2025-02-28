const express = require("express");

const clienteRoutes = require("./routes/clienteRoutes");

const compraRoutes = require("./routes/compraRoutes");

const app = express();
app.use(express.json());


app.use("/clientes", clienteRoutes);

app.use("/compras", compraRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor Rodando na porta ${PORT}`));
