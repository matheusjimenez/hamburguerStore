const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request,response){
            const users = await connection('users').select('*');
        
            return response.json(users);
    },

    async create(request, response) {
        const { nome, email, senha, telefone_cliente } = request.body;

        const id_cliente = crypto.randomBytes(6).toString('HEX');

        try{
            await connection('users').insert({
                id_cliente,
                email,
                senha,
                nome,
                telefone_cliente
            })
    
            return response.json({ id_cliente });

        }catch(err){
            response.status(400).json({error: 'could not add new user'});
        }

    }
};