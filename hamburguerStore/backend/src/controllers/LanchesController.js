const connection = require('../database/connection');


//aula 2 tempo 1:32:35 para fazer o innerjoin com os ingredientes.
module.exports = {
    async index(request, response) {
        const lanches = await connection('lanches').select('*');

        const count = await connection('lanches').count();

        return response.json(lanches);
    },


    async create(request, response) {
        const id_cliente = request.headers.authorization;
        
        if(!id_cliente || id_cliente == null || id_cliente == undefined)
        return response.status(400);
        


        const users = await connection('users')
        .where('id_cliente', id_cliente)
        .select('isAdmin')
        .first();
        
        if (users.isAdmin == false) {
            return response.status(401).json({ error: 'Operation not permited' });
        }

        const { nome_lanche, descricao_lanche, valor_lanche, vegano, imgLanche } = request.body;
        
        await connection('lanches').insert({
            nome_lanche,
            descricao_lanche,
            valor_lanche,
            vegano,
            imgLanche
        });
        //adicionar validação para criar lanche IS ADMIN?
        return response.json({ id_cliente }); // devo tirar isso
    },


    async delete(request, response) {
        const { id } = request.params;
        const idcliente = request.headers.authorization;

        const users = await connection('users')
            .where('id_cliente', idcliente)
            .select('isAdmin')
            .first();

        if (users.isAdmin == false) {
            return response.status(401).json({ error: 'Operation not permited' });
        }

        await connection('lanches').where('id', id).delete();
        return response.status(204).send();
    }
};