//importa PrismaClient
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

exports.listarCompras = async (req, res) => {
  const compras = await prisma.compra.findMany();
  res.json(compras);
};

exports.criarCompra = async (req, res) => {
  try {
    const {nomeProduto, valor} = req.body;
    const novaCompra = await prisma.compra.create({
      data: {
        nomeProduto, valor
      },
    });
    res.status(201).json(novaCompra);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar compra"});
  }
};

exports.atualizarCompra = async (req, res) =>{
  try {
    const { id } = req.params;
    const {nomeProduto, valor} = req.body;
    const compraAtualizada = await prisma.compra.update({
      where: { id },
      data: {nomeProduto, valor},
    });
    res.status(200).json(compraAtualizada);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar compra"});
  }
};

exports.deletarCompra = async (req, res) =>{
  try {
    const { id } = req.params;
    await prisma.compra.delete({
      where: { id } 
    });
    res.status(200).json({message: "Compra deletada com sucesso"});
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar compra"});
  }
};