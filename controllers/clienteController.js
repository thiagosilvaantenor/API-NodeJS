const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//req = requisiçao, res = resposta
//========= ============= ============ =============
exports.listarClientes = async (req, res) => {
    try{
        const clientes = await prisma.cliente.findMany();
        res.json(clientes);
    } catch(error) {
        res.status(400).json({error: "Erro ao listar clientes"})
    }
};

// ========= ==================== =================
exports.criarCliente = async (req, res) => {
    try {
        const { nome, telefone, email, endereco, idade, sexo, cpf, dtNasc } = req.body;
        const novoCliente = await prisma.cliente.create({
            data: {
                nome, telefone, email, endereco, idade, sexo, cpf, dtNasc
            },
        });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar cliente" });
    }
};
//=========== ================== ====================
exports.atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, telefone, email, endereco, idade, sexo, cpf, dtNasc } = req.body;
        const clienteAtualizado = await prisma.cliente.update({
            where: { id },
            data : { nome, telefone, email, endereco, idade, sexo, dtNasc }
        });
        res.json(clienteAtualizado);
    } catch (error) {
        res.status(400).json({error: "Erro ao atualizar cliente"})
    }
};

//==============================================
exports.deletarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.cliente.delete({where: { id } });
        res.json({ message: "Cliente deletado com sucesso." });
    } catch (error) {
        res.status(400).json({error: "Erro ao deletar cliente."});
    }
}

