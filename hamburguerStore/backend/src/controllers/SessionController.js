const connection = require('../database/connection');
const { create } = require('./UserController');

module.exports = {
    async create(request,response){
        const { email , senha } = request.body;

        const user = await connection('users')
        .where({
            'email': email,
            'senha':  senha
          })
        .select('nome')
        .select('id_cliente')
        .first();

        if(!user){
            return response.status(400).json({error: 'No User found with this login'});
        }

        response.header('LoggedUser', user.id_cliente);
        return response.json(user);
    }
}