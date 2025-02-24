const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

//========= ============= ============ =============
exports.listarClientes = async (req, res) => {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
};

// ========= ==================== =================
exports.criarCliente = async (req, res) => {
    const {nome, telefone, email, endereco} = req.body;
    const novoCliente = await prisma.cliente.create({
        data: {
            nome, telefone, email, endereco
        }
    });
    res.status(201).json(novoCliente);
}
//=========== ================== ====================
