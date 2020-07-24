const { index } = require("./UserController");

const connection = require('../database/connection');

module.exports= {
    async index(request, response){
        const userid = request.headers.authorization;

        const lanches = await connection('lanches').where('isAvaliable', true).select('*');

        return response.json(lanches);
    }
}